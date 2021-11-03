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


}