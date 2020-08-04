import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Container from 'react-bootstrap/Container'

import WorkBlurb from './work-blurb'

const WorkSection = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulCaseStudy(
            sort: {
            fields: startDate,
            order: DESC
            }
        ) {
            edges {
                node {
                    title
                    slug
                    description
                    projectType
                    startDate(formatString: "MMMM YYYY")
                    endDate(formatString:"MMMM YYYY")      
                    coverPhoto {
                        fluid (maxWidth: 720, maxHeight: 480) {
                            ...GatsbyContentfulFluid
                        }
                        fixed (width: 600, height: 400) {
                            ...GatsbyContentfulFixed
                        }
                        file {
                            url
                        }
                    }  
                }
            }
        }
    }
    `)

    return(
        <section>
            <Container id="work">
                <h1>Work</h1>
                <ul className="list-unstyled">
                {
                    data.allContentfulCaseStudy.edges.map( edge => {
                        return(
                            <li key={edge.node.title}>
                                <WorkBlurb 
                                    title={edge.node.title}
                                    slug={edge.node.slug}
                                    description={edge.node.description}
                                    projectType={edge.node.projectType}
                                    projectDates={edge.node.startDate + (edge.node.endDate ? ` – ${edge.node.endDate}` : `` )}
                                    thumbnail={edge.node.coverPhoto.fluid}
                                />
                            </li>
                        )
                    })
                }
                </ul>
            </Container>
        </section>
    )
}

export default WorkSection