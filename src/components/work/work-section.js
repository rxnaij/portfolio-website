import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Container from 'react-bootstrap/Container'

import WorkBlurb from './WorkBlurb'

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
                        file {
                            url
                            fileName
                        }
                        gatsbyImageData(
                            width: 720
                            height: 480
                            placeholder: BLURRED
                        )
                    }  
                }
            }
        }
    }
    `)

    return(
        <section id="work">
            <Container>
                <h1 className="section-title">Work</h1>
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
                                    thumbnail={edge.node.coverPhoto.gatsbyImageData}
                                    alt={edge.node.coverPhoto.file.fileName}
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