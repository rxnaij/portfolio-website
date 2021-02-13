import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './CaseStudy.module.scss'

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
                fluid (maxWidth: 1920, maxHeight: 1080) {
                    ...GatsbyContentfulFluid
                }
            }
            projectType
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM YYYY")
            role
            productImages {
                id
                description
                file {
                    url
                }
                fluid (quality: 100) {
                    ...GatsbyContentfulFluid
                }
            }
            mainContent {
                json
            }
        }
    }
`

/* FeaturedImage: product images that appear at the top to describe the product */
const FeaturedImage = props => {
    return(
        <Row className="mb-4 py-4 align-items-center justify-content-center">
            <Col xs={9} sm={{ order: props.index % 2 === 0 ? 1 : 12 }} lg={5} className="mb-2 mb-md-0">
                <Img fluid={props.image} alt={props.description} />
            </Col>
            <Col sm={{ order: props.index % 2 === 0 ? 12 : 1 }} lg={5} className="d-flex align-items-center">
                <p className="lead">{props.description}</p>
            </Col>
        </Row>
    )
}

/* Figure: display images in rich text */
const Figure = ({url, title, caption}) => {
    return(
        <figure className={`figure ${styles.wide}`}>
            <img src={url} alt={title} />
            <figcaption>
                { caption }
            </figcaption>
        </figure>
    )
}

/* Head of the case study, with intro content */
const CaseStudyHead = ({ title, coverPhoto, description, startDate, endDate, projectType, role }) => {

    return(
        <section className="mb-5">
            <Container fluid className={styles.head}>
                <Row>
                    <Col xs={12}>
                        <Img
                            fluid={coverPhoto} 
                            className="mb-4" 
                            fadeIn 
                        />
                    </Col>
                    <Col xs={12}>
                        <h1>{title}</h1>
                        <p className="lead">{description}</p>
                        <p>
                            <strong>Date</strong>: {  startDate + ( endDate ? ` – ${endDate}` : `` ) }
                            <br />
                            <strong>Project type</strong>: { projectType }
                            <br />
                            <strong>Role</strong>: { role }
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

/* Case study template */
const CaseStudy = ({data}) => {
    // Set renderNode options
    const options = {
        renderNode: {
            // Special rendering options for images embedded in rich text
            "embedded-asset-block": node => {
                // Declare references to make my life easier
                // Shorten the reference to the fields property
                const fields = node.data.target.fields
                const title = fields.title['en-US'] // Title of image
                const description = fields.description  // Image caption – default to description, otherwise leave blank
                    ? fields.description['en-US']
                    : ''
                const url = fields.file['en-US'].url    // Image url, to be passed into src attribute

                return (
                    <Figure
                        url={url}
                        title={title}
                        caption={ title && description }
                        width={fields.file['en-US'].details.image.width}
                    />
                ) 
            }
        }
    }
    
    const { 
        title, 
        coverPhoto, 
        description, 
        startDate, 
        endDate, 
        projectType, 
        role, 
        productImages, 
        mainContent 
    } = data.contentfulCaseStudy

    // Render CaseStudy component
    return (
        <Layout>
            <SEO title={title} />
            <CaseStudyHead 
                title={title}
                coverPhoto={coverPhoto.fluid}
                description={description}
                startDate={startDate}
                endDate={endDate}
                projectType={projectType}
                role={role}
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
                                        image={image.fluid}
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
                <Container fluid className={styles.content}>
                    { documentToReactComponents(mainContent.json, options) }
                    <nav className="my-5">
                        <Link to="/work">&lsaquo; Back to work</Link>
                    </nav>
                </Container>
            </article>
        </Layout>
    )
}

export default CaseStudy