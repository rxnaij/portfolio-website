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
import CaseStudyHead from './components/CaseStudyHead'
import TableOfContents from './components/TableOfContents.tsx'
import { generateSlugFromTitle } from './slugUtil'
import { createHeadingNodesFromContentNodes } from '../components/lists/HeadingUtils'

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

/* FeaturedImage: product images that appear at the top to describe the product */
const FeaturedImage = ({ image, description, index }) => {
    return(
        <Row className="py-4 align-items-center justify-content-center">
            <Col xs={9} sm={{ order: index % 2 === 0 ? 1 : 12 }} lg={5} className="mb-2 mb-md-0">
                {/* <Img fluid={image} alt={description} /> */}
                <GatsbyImage image={image} alt={description} />
            </Col>
            <Col sm={{ order: index % 2 === 0 ? 12 : 1 }} lg={5} className="d-flex align-items-center">
                <p className="lead">{description}</p>
            </Col>
        </Row>
    )
}

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
            [BLOCKS.HEADING_2]: node => 
                <h2 id={generateSlugFromTitle(node.content[0].value)}>
                    {node.content[0].value}
                </h2>,
            [BLOCKS.HEADING_3]: node => 
                <h3 id={generateSlugFromTitle(node.content[0].value)}>
                    {node.content[0].value}
                </h3>,
            [BLOCKS.HEADING_4]: node => 
                <h4 id={generateSlugFromTitle(node.content[0].value)}>
                    {node.content[0].value}
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