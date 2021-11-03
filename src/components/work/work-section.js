import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Container from 'react-bootstrap/Container'

import Button from '../button/Button'
import TagFilteredBlurbs from './TagFilteredBlurbs'

const WorkSection = ({ seeAllCTA, isOnHomePage }) => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulCaseStudy(
            sort: {
            fields: startDate,
            order: DESC
            }
        ) {
            nodes {
                title
                slug
                protected
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
    `)

    return(
        <section id="work">
            <Container>
                <h1 className="section-title">Work</h1>
                <TagFilteredBlurbs 
                    nodes={data.allContentfulCaseStudy.nodes}
                    isOnHomePage={isOnHomePage}
                />
                {
                    isOnHomePage && 
                    <Button className="d-block mt-3 ml-auto">
                        <Link to="/work" className="a-no-style">
                            See all work &rarr;
                        </Link>
                    </Button>
                }
            </Container>
        </section>
    )
}

export default WorkSection