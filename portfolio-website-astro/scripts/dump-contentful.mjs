/**
 * Phase A of the Contentful migration: pull everything down untouched.
 *
 * The dump is the safety net for the transform steps, so it resolves links
 * (include=10) but changes nothing else. Output is gitignored: it contains the
 * protected case study.
 */

import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const OUT_DIR = path.join(ROOT, 'contentful-raw')

const env = Object.fromEntries(
    fs.readFileSync(path.join(ROOT, '..', '.env'), 'utf8')
        .split('\n')
        .filter(Boolean)
        .map(line => {
            const i = line.indexOf('=')
            return [line.slice(0, i).trim(), line.slice(i + 1).trim()]
        })
)

const SPACE = env.CONTENTFUL_SPACE_ID
const TOKEN = env.CONTENTFUL_ACCESS_TOKEN
if (!SPACE || !TOKEN) throw new Error('CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be set in ../.env')

const BASE = `https://cdn.contentful.com/spaces/${SPACE}/environments/master`

const get = async (pathname) => {
    const url = `${BASE}${pathname}${pathname.includes('?') ? '&' : '?'}access_token=${TOKEN}`
    const res = await fetch(url)
    // Keep the token out of the thrown message.
    if (!res.ok) throw new Error(`Contentful returned ${res.status} for ${pathname.split('?')[0]}`)
    return res.json()
}

/** Pages through a collection endpoint until every item is retrieved. */
const getAll = async (pathname) => {
    const items = []
    let includes = { Asset: [], Entry: [] }
    let skip = 0
    while (true) {
        const page = await get(`${pathname}&limit=100&skip=${skip}`)
        items.push(...page.items)
        includes = {
            Asset: [...includes.Asset, ...(page.includes?.Asset ?? [])],
            Entry: [...includes.Entry, ...(page.includes?.Entry ?? [])],
        }
        skip += page.items.length
        if (skip >= page.total || page.items.length === 0) return { items, includes, total: page.total }
    }
}

fs.mkdirSync(OUT_DIR, { recursive: true })

const write = (name, data) => {
    fs.writeFileSync(path.join(OUT_DIR, name), JSON.stringify(data, null, 2))
    console.log(`  wrote ${name}`)
}

const contentTypes = await get('/content_types')
write('content-types.json', contentTypes)

const caseStudies = await getAll('/entries?content_type=caseStudy&include=10')
write('case-studies.json', caseStudies)

const assets = await getAll('/assets?')
write('assets.json', assets)

console.log(`\ncase studies: ${caseStudies.total}`)
console.log(`assets in space: ${assets.total}`)
console.log(`assets linked from case studies: ${caseStudies.includes.Asset.length}`)
