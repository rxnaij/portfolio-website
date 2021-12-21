import React from 'react'
import { Link, graphql } from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CaseStudyHead from './CaseStudyHead'
import TableOfContents from '../components/toc/TableOfContents.tsx'
import FeaturedImage from './FeaturedImage'
import { generateSlugFromTitle } from '../components/toc/slugUtil'
import { createHeadingNodesFromContentNodes } from '../components/toc/HeadingUtils'

import { pageLayout, wide, content, info } from './CaseStudy.module.scss'

const CaseStudy = ({ data }) => {
    const { 
        title, 
        slug,
        coverPhoto, 
        description, 
        startDate, 
        endDate, 
        projectType, 
        role, 
        projectLink,
        productImages,
        mainContent,
    } = data.contentfulCaseStudy

    const headings = createHeadingNodesFromContentNodes(
        JSON.parse(mainContent.raw).content, 
        data.contentfulCaseStudy.protected ? `work/secret/${slug}` : `work/${slug}`
    )

    // Options that assign special rendering to certain data from the case study content.
    const options = {
        renderNode: {
            // Render images as figures.
            [BLOCKS.EMBEDDED_ASSET]: node => {
                // Retrieve image and metadata.
                const { id } = node.data.target.sys
                const { title, description, gatsbyImageData } = data.contentfulCaseStudy.mainContent.references.find(asset => asset.contentful_id === id)

                return (
                    <figure className={`figure ${wide}`}>
                        <GatsbyImage 
                            image={gatsbyImageData}
                            alt={title && description}
                            className={wide}
                        />
                        <figcaption>{ description }</figcaption>
                    </figure>
                ) 
            },
            // Assign slugs to heading IDs, allowing headings to be linkable via anchor links.
            [BLOCKS.HEADING_2]: ({ content }) => 
                <h2 id={generateSlugFromTitle(content[0].value)}>
                    {content[0].value}
                </h2>,
            [BLOCKS.HEADING_3]: ({ content }) => 
                <h3 id={generateSlugFromTitle(content[0].value)}>
                    {content[0].value}
                </h3>,
            [BLOCKS.HEADING_4]: ({ content }) => 
                <h4 id={generateSlugFromTitle(content[0].value)}>
                    {content[0].value}
                </h4>,
        }
    }

    return (
        <Layout>
            <SEO title={title} />
            <CaseStudyHead 
                title={title}
                coverPhoto={coverPhoto}
                description={description}
                startDate={startDate}
                endDate={endDate}
                projectType={projectType}
                role={role}
                projectLink={projectLink}
            />
            <Container className={pageLayout}>
                {
                    productImages &&
                    <section>
                        {
                            productImages.map( (image, index) => {
                                return (
                                    <FeaturedImage
                                        key={image.id}
                                        image={image.gatsbyImageData}
                                        description={image.description}
                                        index={index}
                                    />
                                )
                            } )
                        }
                    </section>
                }
                <article className={content}>
                    { mainContent && renderRichText(mainContent, options) }
                </article>
                {
                    headings.length > 0 &&
                    <TableOfContents 
                        rootSlug={slug} 
                        headings={headings} 
                    />
                }
                <nav>
                    <Link to="/work">&larr; Back to portfolio</Link>
                </nav>
            </Container>
        </Layout>
    )
}

export default CaseStudy


// Use GraphQL to source content from Contentful
export const query = graphql`
    query (
        $slug: String
    ) {
        contentfulCaseStudy(
            slug: {
                eq: $slug
            }
        ) {
            title
            slug
            protected
            description
            coverPhoto {
                title
                gatsbyImageData(
                    layout: FULL_WIDTH
                )
            }
            projectType
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM YYYY")
            role
            projectLink
            productImages {
                id
                description
                gatsbyImageData
            }
            mainContent {
                raw
                references {
                    ...on ContentfulAsset {
                        __typename
                        title
                        description
                        gatsbyImageData
                        contentful_id
                    }
                }
            }
        }
    }
`