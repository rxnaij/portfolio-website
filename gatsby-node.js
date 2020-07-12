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
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    response.data.allContentfulCaseStudy.edges.forEach(edge => {
        createPage({
            component: caseStudyTemplate,
            path: `/work/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })


}