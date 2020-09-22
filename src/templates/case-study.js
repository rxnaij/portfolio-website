import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

import Layout from '../components/layout'
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
                fluid (maxWidth: 1920, maxHeight: 720) {
                    ...GatsbyContentfulFluid
                }
            }
            projectType
            startDate(formatString: "MMMM YYYY")
            endDate(formatString:"MMMM YYYY")
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

/* ArticleText: container for case study rich text */
const ArticleText = ({ children }) => {
    // Render ArticleText component
    return(
        <article>
            <Container fluid className={styles.content}>
                { children }
            </Container>
        </article>
    )
}

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
const Figure = props => {
    return(
        <figure className={`figure ${styles.figure} ${styles.wide}`}>
            <img src={props.url} alt={props.title} className="figure__img" />
            <figcaption className={styles.caption}>
                { props.caption }
            </figcaption>
        </figure>
    )
}

/* Head of the case study, with intro content */
const CaseStudyHead = props => {

    const { title, coverPhoto, description, startDate, endDate, projectType, role } = props

    return(
        <section>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/work/">Work</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        { title }
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1>{title}</h1>
                <Img fluid={coverPhoto} className="mb-4" fadeIn />
                <Row>
                    <Col md={6}>
                        <p className="lead">{description}</p>
                    </Col>
                    <Col md={6}>
                        <p>
                            <strong>Date</strong>: { 
                                startDate + ( endDate ? ` – ${endDate}` : `` ) 
                            }
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
const CaseStudy = props => {
    // Set renderNode options
    const options = {
        renderNode: {
            // Special rendering options for images embedded in rich text
            "embedded-asset-block": node => {
                // Declare references to make my life easier
                // Shorten the reference to the fields property
                const fields = node.data.target.fields
                // Title of image
                const title = fields.title['en-US']
                // Image caption – default to description, otherwise leave blank
                const caption = fields.description
                    ? fields.description['en-US']
                    : ''
                // Image url, to be passed into src attribute
                const url = fields.file['en-US'].url
                // Render image as a figure
                return (
                    <Figure
                        url={url}
                        title={title}
                        caption={ title && caption }
                        width={fields.file['en-US'].details.image.width}
                    />
                ) 
            }
        }
      }

    // Render CaseStudy component
    return (
        <Layout>
            <SEO title={props.data.contentfulCaseStudy.title} />
            <CaseStudyHead 
                title={props.data.contentfulCaseStudy.title}
                coverPhoto={props.data.contentfulCaseStudy.coverPhoto.fluid}
                description={props.data.contentfulCaseStudy.description}
                startDate={props.data.contentfulCaseStudy.startDate}
                endDate={props.data.contentfulCaseStudy.endDate}
                projectType={props.data.contentfulCaseStudy.projectType}
                role={props.data.contentfulCaseStudy.role}
            />
            {props.data.contentfulCaseStudy.productImages &&
            <section>
                <Container>
                    {
                        // Testing product images featured at the top
                        props.data.contentfulCaseStudy.productImages.map( (image, index) => {
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
            </section>}
            <ArticleText>
                { documentToReactComponents(props.data.contentfulCaseStudy.mainContent.json, options) }
            </ArticleText>
            <section>
                <Container>
                    <hr />
                    <Link to="/work">Back to Work</Link>
                </Container>
            </section>
        </Layout>
    )
}

export default CaseStudy