import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Button from '../button/Button'
import TagFilteredBlurbs from './TagFilteredBlurbs'

const WorkSection = ({ isOnHomePage }) => {

    const Title = isOnHomePage ? `h2` : `h1`

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
            <Title>Portfolio</Title>
            <p>Check out the projects I've worked on!</p>
            <TagFilteredBlurbs 
                nodes={data.allContentfulCaseStudy.nodes}
                isOnHomePage={isOnHomePage}
            />
            {
                isOnHomePage && 
                <Link to="/work">
                    See all work &rarr;
                </Link>
            }
        </section>
    )
}

export default WorkSection