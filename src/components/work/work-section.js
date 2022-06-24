import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../layout/layout'
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
                projectCategory
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
        <>
            
            
            {
                isOnHomePage && 
                <Link to="/work">
                    See all work &rarr;
                </Link>
            }
        </>
    )
}

export default WorkSection