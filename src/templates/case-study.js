import React from 'react'
import { Link, graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
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

/* Case study template */
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
        mainContent
    } = data.contentfulCaseStudy

    const nestedHeadings = createHeadingNodesFromContentNodes(
        JSON.parse(mainContent.raw).content, 
        `work/${slug}`
    )

    // Set renderNode options
    const options = {
        renderNode: {
            // Special rendering options for images embedded in rich text
            [BLOCKS.EMBEDDED_ASSET]: node => {
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

    // Render CaseStudy component
    return (
        <Layout style={{ maxWidth: 'none', paddingTop: 0 }}>
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
                <Row>
                    <Col xs={{ order: "last", span: 12 }} lg={{ order: "first", span: 8 }}>
                        <article className={content}>
                            { mainContent && renderRichText(mainContent, options ) }
                        </article>
                    </Col>
                    <Col xs={{ order: "first", span: 12 }} lg={{ order: "last", span: 4 }}>
                        <TableOfContents rootSlug={slug} headings={nestedHeadings} />
                    </Col>
                </Row>
                <nav>
                    <Link to="/work">&larr; Back to portfolio</Link>
                </nav>
            </Container>
        </Layout>
    )
}

export default CaseStudy