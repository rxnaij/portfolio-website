import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Tag from './Tag'
import WorkBlurb from './WorkBlurb'
import Stack from '../stack/Stack'
import Tabs from './Tabs'
import { wrapper, workSection, blurbContainer } from './WorkSection.module.scss'
import { ProjectNode, getTagsOfNode, getAllUniqueTags } from './tagUtilities'

interface TagFilteredBlurbsProps {
    isOnHomePage?: boolean
    // nodes: ProjectNode[]
}

const TagFilteredBlurbs = ({ isOnHomePage }: TagFilteredBlurbsProps) => {
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
    const { nodes } = data.allContentfulCaseStudy

    const [tags] = useState(getAllUniqueTags(nodes))
    const [filter, setFilter] = useState([])

    const [activeTab, setActiveTab] = useState<'Work' | 'Extra'>('Work')    // Consider dynamically building this state type based on the permitted projectCategory values in the Contentful Case Study.

    return (
        <section className={wrapper}>
            {
                !isOnHomePage &&
                <Tabs 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            }
            <div className={workSection}>
                {
                    // Preview the first two work projects on the home page
                    isOnHomePage
                        ? nodes
                            .filter(node => node.projectCategory === 'Work')
                            .slice(0, 2)
                            .map((node: any) => 
                                <WorkBlurb 
                                    key={node.title}
                                    title={node.title}
                                    slug={node.slug}
                                    description={node.description}
                                    projectType={node.projectType}
                                    projectDates={node.startDate + (node.endDate ? ` – ${node.endDate}` : `` )}
                                    thumbnail={node.coverPhoto.gatsbyImageData}
                                    alt={node.coverPhoto.file.fileName}
                                    protected={node.protected}
                                />
                            )
                        // Preview 
                        : nodes
                            // (CURRENTLY UNUSED--See <TagFilter> definition.) 
                            // Filter nodes by tag
                            .filter((node) => {       
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
                            // Filter nodes by work project category (e.g. "Work" or "Extra")
                            .filter(node => node.projectCategory === activeTab)
                            // Render nodes
                            .map((node: any) =>
                                    <WorkBlurb 
                                        key={node.title}
                                        title={node.title}
                                        slug={node.slug}
                                        protected={node.protected}
                                        description={node.description}
                                        projectType={node.projectType}
                                        projectDates={node.startDate + (node.endDate ? ` – ${node.endDate}` : `` )}
                                        thumbnail={node.coverPhoto.gatsbyImageData}
                                        alt={node.coverPhoto.file.fileName}
                                    />
                            )
                }
            </div>
        </section>
    )
}

export default TagFilteredBlurbs

/**
 * CURRENTLY UNUSED
 * Reason: adds unnecessary complexity to portfolio UX.
 * Consider removing
 */
const TagFilter = ({ tags, filter, setFilter }) => {
    return(
        <Stack gap='base'>
            {
                tags?.map(tag => 
                    <Tag 
                        key={tag} 
                        name={tag} 
                        active={filter.includes(tag)} 
                        handleClick={() => {
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
        </Stack>
    )
}