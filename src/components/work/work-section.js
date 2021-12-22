import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Button from '../button/Button'
import TagFilteredBlurbs from './TagFilteredBlurbs'

const WorkSection = ({ isOnHomePage }) => {

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
            <h2 className="section-title">Work</h2>
            <TagFilteredBlurbs 
                nodes={data.allContentfulCaseStudy.nodes}
                isOnHomePage={isOnHomePage}
            />
            {
                isOnHomePage && 
                <Button renderContainer={(props) => (
                    <Link to="/work" {...props}>
                        See all work &rarr;
                    </Link>
                )}>
                </Button>
            }
        </section>
    )
}

export default WorkSection