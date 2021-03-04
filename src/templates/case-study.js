import React from 'react'
import { Link, graphql } from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { wide, head, img, info, content } from './CaseStudy.module.scss'

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
            description
            coverPhoto {
                title
                gatsbyImageData(
                    layout: FULL_WIDTH
                    aspectRatio: 1.8
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

/* Head of the case study, with intro content */
const CaseStudyHead = ({ title, coverPhoto, description, startDate, endDate, projectType, role, projectLink }) => {
    return(
        <section className="mb-5">
            <Container fluid className={head}>
                <Row>
                    <Col xs={12}>
                        <GatsbyImage image={coverPhoto.gatsbyImageData} alt={coverPhoto.title} className={img} loading="eager" />
                    </Col>
                    <Col xs={12}>
                        <h1 className="display-4 mb-3">{title}</h1>
                        <p className="lead">{description}</p>
                        <ul className={info}>
                            <li className="mb-1"><strong>Date</strong>: {  startDate + ( endDate ? ` – ${endDate}` : `` ) }</li>
                            <li className="mb-1"><strong>Project type</strong>: { projectType }</li>
                            <li className="mb-1"><strong>Role</strong>: { role }</li>
                            { projectLink && <li className="mb-1"><strong>View app website</strong>: <a href={projectLink}>{projectLink}</a> </li> }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

/* FeaturedImage: product images that appear at the top to describe the product */
const FeaturedImage = ({ image, description, index }) => {
    return(
        <Row className="mb-4 py-4 align-items-center justify-content-center">
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

    // Set renderNode options
    const options = {
        renderNode: {
            // Special rendering options for images embedded in rich text
            [BLOCKS.EMBEDDED_ASSET]: node => {
                // console.log(node)
                // console.log(data)
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
            }
        }
    }

    // Render CaseStudy component
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
            {
                productImages &&
                <section>
                    <Container>
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
                    </Container>
                </section>
            }
            <article>
                <Container fluid className={content}>
                    { mainContent && renderRichText(mainContent, options ) }
                    <nav className="my-5">
                        <Link to="/work">&larr; Back to work</Link>
                    </nav>
                </Container>
            </article>
        </Layout>
    )
}

export default CaseStudy