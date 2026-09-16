/**
 * Phase B/C of the Contentful migration: turn the raw dump into MDX + local assets.
 *
 * Rich text becomes MDX rather than plain markdown because embedded images carry
 * captions, which markdown cannot express. Each one becomes a <Figure> with the
 * image imported so astro:assets can optimize it.
 *
 * Re-runnable: it overwrites its outputs and skips assets already downloaded.
 */

import fs from 'node:fs'
import path from 'node:path'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import TurndownService from 'turndown'

const ROOT = path.resolve(import.meta.dirname, '..')
const RAW_DIR = path.join(ROOT, 'contentful-raw')
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'work')
const ASSET_DIR = path.join(ROOT, 'src', 'assets', 'work')

const raw = JSON.parse(fs.readFileSync(path.join(RAW_DIR, 'case-studies.json'), 'utf8'))
const allAssets = JSON.parse(fs.readFileSync(path.join(RAW_DIR, 'assets.json'), 'utf8'))

const assetsById = new Map(
    [...raw.includes.Asset, ...allAssets.items].map(a => [a.sys.id, a])
)

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' })
// Markdown has no underline, so keep the tag rather than silently dropping emphasis.
turndown.keep(['u'])

const sanitize = (fileName) =>
    fileName
        .toLowerCase()
        .replace(/\.[^.]+$/, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') + path.extname(fileName).toLowerCase()

const download = async (asset, destDir) => {
    const file = asset.fields.file
    const name = sanitize(file.fileName)
    const dest = path.join(destDir, name)
    if (!fs.existsSync(dest)) {
        const url = file.url.startsWith('//') ? `https:${file.url}` : file.url
        const res = await fetch(url)
        if (!res.ok) throw new Error(`Failed to download ${file.fileName}: HTTP ${res.status}`)
        fs.mkdirSync(destDir, { recursive: true })
        fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()))
    }
    return name
}

const yaml = (value) => JSON.stringify(value ?? null)

const stats = { entries: 0, figures: 0, assets: 0, protectedSlugs: [] }

for (const entry of raw.items) {
    const f = entry.fields
    const slug = f.slug
    const assetDir = path.join(ASSET_DIR, slug)

    // Collect every asset this case study references, in the order encountered.
    const imports = []
    const importNameFor = new Map()
    const registerAsset = async (assetId) => {
        if (importNameFor.has(assetId)) return importNameFor.get(assetId)
        const asset = assetsById.get(assetId)
        if (!asset) throw new Error(`${slug}: asset ${assetId} missing from dump`)
        const fileName = await download(asset, assetDir)
        const name = `img${imports.length}`
        imports.push({ name, fileName })
        importNameFor.set(assetId, { name, asset })
        stats.assets++
        return { name, asset }
    }

    const coverPhoto = f.coverPhoto ? await registerAsset(f.coverPhoto.sys.id) : null
    const productImages = []
    for (const link of f.productImages ?? []) {
        productImages.push(await registerAsset(link.sys.id))
    }

    // Pre-register embedded assets so the <Figure> replacements have imports ready.
    const embeddedIds = []
    const collect = (node) => {
        if (!node) return
        if (node.nodeType === BLOCKS.EMBEDDED_ASSET) embeddedIds.push(node.data.target.sys.id)
        ;(node.content ?? []).forEach(collect)
    }
    collect(f.mainContent)
    for (const id of embeddedIds) await registerAsset(id)

    const html = documentToHtmlString(f.mainContent, {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => `<p>@@FIGURE:${node.data.target.sys.id}@@</p>`,
        },
    })

    let body = turndown.turndown(html)
    body = body.replace(/@@FIGURE:([^@]+)@@/g, (_, assetId) => {
        const { name, asset } = importNameFor.get(assetId)
        const caption = asset.fields.description ?? ''
        const alt = asset.fields.description ?? asset.fields.title ?? ''
        stats.figures++
        return `<Figure src={${name}} alt=${yaml(alt)} caption=${yaml(caption)} />`
    })

    const frontmatter = [
        '---',
        `title: ${yaml(f.title)}`,
        `description: ${yaml(f.description)}`,
        `projectCategory: ${yaml(f.projectCategory)}`,
        `projectType: ${yaml(f.projectType)}`,
        `role: ${yaml(f.role)}`,
        f.projectLink ? `projectLink: ${yaml(f.projectLink)}` : null,
        `startDate: ${f.startDate}`,
        f.endDate ? `endDate: ${f.endDate}` : null,
        `protected: ${Boolean(f.protected)}`,
        coverPhoto ? `coverPhoto: ${yaml(`../../assets/work/${slug}/${imports.find(i => i.name === coverPhoto.name).fileName}`)}` : null,
        coverPhoto ? `coverPhotoAlt: ${yaml(coverPhoto.asset.fields.description ?? coverPhoto.asset.fields.title ?? '')}` : null,
        productImages.length ? 'productImages:' : null,
        ...productImages.map(p =>
            `  - src: ${yaml(`../../assets/work/${slug}/${imports.find(i => i.name === p.name).fileName}`)}\n    caption: ${yaml(p.asset.fields.description ?? '')}`
        ),
        '---',
    ].filter(Boolean).join('\n')

    const importBlock = [
        `import Figure from '../../components/figure/Figure.astro'`,
        ...imports.map(i => `import ${i.name} from '../../assets/work/${slug}/${i.fileName}'`),
    ].join('\n')

    fs.mkdirSync(CONTENT_DIR, { recursive: true })
    fs.writeFileSync(
        path.join(CONTENT_DIR, `${slug}.mdx`),
        `${frontmatter}\n\n${importBlock}\n\n${body}\n`
    )

    stats.entries++
    if (f.protected) stats.protectedSlugs.push(slug)
    console.log(`  ${slug}.mdx  (${imports.length} assets)`)
}

// The resume is a standalone asset, not linked from any case study.
const resume = allAssets.items.find(a => a.fields?.file?.contentType === 'application/pdf')
if (resume) {
    fs.mkdirSync(path.join(ROOT, 'public'), { recursive: true })
    const url = resume.fields.file.url.startsWith('//') ? `https:${resume.fields.file.url}` : resume.fields.file.url
    const res = await fetch(url)
    fs.writeFileSync(path.join(ROOT, 'public', 'resume.pdf'), Buffer.from(await res.arrayBuffer()))
    console.log(`  public/resume.pdf  (from "${resume.fields.title}")`)
}

console.log(`\nentries: ${stats.entries}  figures: ${stats.figures}  assets downloaded/reused: ${stats.assets}`)
console.log(`protected (held out of git): ${stats.protectedSlugs.join(', ') || 'none'}`)
