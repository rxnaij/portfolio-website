import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Container from 'react-bootstrap/Container'

import WorkBlurb from './WorkBlurb'
import Button from '../button/Button'

import { stack, inlineRow, tag, activeTag } from './WorkSection.module.scss'

import { 
    getTagsOfNode,
    getAllUniqueTags, 
    getAllTopicsByTag, 
    sortAllTopicsByTag 
} from './tagUtilities.ts'

import { XCircleFill } from 'react-bootstrap-icons'

const WorkSection = ({ seeAllCTA }) => {

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

    const [tags] = useState(getAllUniqueTags(data.allContentfulCaseStudy.nodes))

    const [filter, setFilter] = useState([])

    return(
        <section id="work">
            <Container>
                <h1 className="section-title">Work</h1>
                {
                    seeAllCTA || <div className={inlineRow}>
                        {
                            tags?.map(tag => 
                                <Tag 
                                    key={tag} 
                                    name={tag} 
                                    active={filter.includes(tag)} 
                                    onClick={() => {
                                        // Toggle the filter
                                        if (filter.includes(tag)) {
                                            setFilter(filter.filter(keep => keep !== tag))
                                        } else {
                                            setFilter([...filter, tag])
                                        }
                                    }}
                                />
                                )
                            }
                            {filter.length > 0 && <Tag reset name="Clear filter" onClick={() => setFilter([])}/>}
                    </div>
                }
                <ul className={"list-unstyled " + stack}>
                {
                    data.allContentfulCaseStudy.nodes
                    .filter(node => {       // Filter nodes by tag
                        // Is there a filter in the first place?
                        if (filter.length > 0) {        
                            const nodeTags = getTagsOfNode(node)
                            for (const tag of filter) {
                                // If the filter doesn't completely match a node, exclude that node.
                                if (!nodeTags.includes(tag)) {
                                    return false
                                }
                            }
                            // Include a node that matches all filters.
                            return true
                        } else {
                            // If there's no filter, just include all nodes.
                            return true
                        }
                    })
                    .map(node => {
                        return(
                            <li key={node.title}>
                                <WorkBlurb 
                                    title={node.title}
                                    slug={node.slug}
                                    description={node.description}
                                    projectType={node.projectType}
                                    projectDates={node.startDate + (node.endDate ? ` – ${node.endDate}` : `` )}
                                    thumbnail={node.coverPhoto.gatsbyImageData}
                                    alt={node.coverPhoto.file.fileName}
                                />
                            </li>
                        )
                    })
                }
                </ul>
                {
                    seeAllCTA && 
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

function Tag({ name, active, ...props }) {
    const activeClass = active ? activeTag : ''
    return (
        <div className={`${tag} ${activeClass}`} {...props}>
            <span>
                { name }
            </span>
            { (active || props.reset) && <XCircleFill /> }
        </div>
    )
}
