/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')


/* TODO: createPages API for contentful pages, probably case studies */
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const caseStudyTemplate = path.resolve('./src/templates/case-study.js')

    const response = await graphql(`
        query {
            allContentfulCaseStudy {
                nodes {
                    slug
                    protected
                }
            }
            allContentfulBlogPost {
                nodes {
                    slug
                }
            }
        }
    `)

    response.data.allContentfulCaseStudy.nodes.forEach(node => {
        const path = node.protected ? `/work/secret/${node.slug}` : `/work/${node.slug}`
        createPage({
            component: caseStudyTemplate,
            path: path,
            context: {
                slug: node.slug,
            }
        })
    })

    const blogPostTemplate = path.resolve(`./src/templates/BlogPost.tsx`)
    response.data.allContentfulBlogPost.nodes.forEach(node => {
        createPage({
            component: blogPostTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug
            }
        })
    })
}

async function generateBlogPostPages() {
    const blogPostTemplate = path.resolve(`./src/templates/BlogPost.tsx`)

    const response = await graphql`
        query {
            allContentfulBlogPost {
                nodes {
                    slug
                }
            }
        }
    `

    response.data.allContentfulBlogPost.nodes.forEach(node => {
        createPage({
            component: blogPostTemplate,
            path: `/blog/${node.slug}`,
            context: {
                slug: node.slug
            }
        })
    })
}