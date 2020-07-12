import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'

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
                fluid (maxWidth: 1920, maxHeight: 400) {
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
                    <figure className="figure">
                        <img src={url} alt={title} className="figure-img" />
                        <figcaption className="figure-caption">{ title && caption }</figcaption>
                    </figure>
                ) 
            }
        }
      }

    return (
        <Layout>
            <SEO title={props.data.contentfulCaseStudy.title} />
            <Container>
                <h1>{props.data.contentfulCaseStudy.title}</h1>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/work/">Work</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        { props.data.contentfulCaseStudy.title }
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Img fluid={props.data.contentfulCaseStudy.coverPhoto.fluid} className="mb-4" fadeIn />
                <p className="lead">{props.data.contentfulCaseStudy.description}</p>
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
                <ArticleText>
                    { documentToReactComponents(props.data.contentfulCaseStudy.mainContent.json, options) }
                </ArticleText>
            </Container>
        </Layout>
    )
}

export default CaseStudy