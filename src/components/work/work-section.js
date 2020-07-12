import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
                        fixed (width: 300) {
                            ...GatsbyContentfulFixed
                        }
                    }  
                }
            }
        }
    }
    `)

    return(
        <section>
            <Container>
                <h1>Work</h1>
                <ul className="list-unstyled">
                {
                    data.allContentfulCaseStudy.edges.map( edge => {
                        return(
                            <li>
                                <WorkBlurb 
                                    title={edge.node.title}
                                    slug={edge.node.slug}
                                    description={edge.node.description}
                                    projectType={edge.node.projectType}
                                    projectDates={edge.node.startDate + (edge.node.endDate ? ` – ${edge.node.endDate}` : `` )}
                                    thumbnail={edge.node.coverPhoto.fixed}
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