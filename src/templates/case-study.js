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
            mainContent {
                json
            }
        }
    }
`

// Create a page using that content

const ArticleText = ({ children }) => {
    return(
        <div className="article-width">
            { children }
        </div>
    )
}

const FeatureFigure = props => {
    return(
        <figure className="figure feature-figure">
            <img src={props.url} alt={props.title} className="figure-img" />
            <figcaption className="figure-caption">
                { props.caption }
            </figcaption>
        </figure>
    )
}

const CaseStudy = props => {
    // Set renderNode options
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const title = node.data.target.fields.title['en-US']
                const caption = node.data.target.fields.description
                    ? node.data.target.fields.description['en-US']
                    : ''
                const url = node.data.target.fields.file['en-US'].url
                return (
                    <FeatureFigure url={url} title={title} caption={ title && caption } />
                ) 
            }
        }
      }

    return (
        <Layout>
            <SEO title={props.data.contentfulCaseStudy.title} />
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/work/">Work</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        { props.data.contentfulCaseStudy.title }
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h1>{props.data.contentfulCaseStudy.title}</h1>
                <Img fluid={props.data.contentfulCaseStudy.coverPhoto.fluid} className="mb-4" fadeIn />
                <Row>
                    <Col md={6}>
                        <p className="lead">{props.data.contentfulCaseStudy.description}</p>
                    </Col>
                    <Col md={6}>
                        <p>
                            <strong>Date</strong>: { 
                                props.data.contentfulCaseStudy.startDate + (
                                    props.data.contentfulCaseStudy.endDate 
                                    ? ` – ${props.data.contentfulCaseStudy.endDate}` 
                                    : `` 
                                ) 
                            }
                            <br />
                            <strong>Project type</strong>: { props.data.contentfulCaseStudy.projectType }
                            <br />
                            <strong>Role</strong>: { props.data.contentfulCaseStudy.role }
                        </p>
                    </Col>
                </Row>
                <hr />
                <ArticleText>
                    { documentToReactComponents(props.data.contentfulCaseStudy.mainContent.json, options) }
                </ArticleText>
            </Container>
        </Layout>
    )
}

export default CaseStudy