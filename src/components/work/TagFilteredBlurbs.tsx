import React, { useState } from 'react'
import Tag from './Tag'
import WorkBlurb from './WorkBlurb'
import Stack from '../stack/Stack'
import { workSection } from './WorkSection.module.scss'
import { ProjectNode, getTagsOfNode, getAllUniqueTags } from './tagUtilities'

interface TagFilteredBlurbsProps {
    isOnHomePage?: boolean
    nodes: ProjectNode[]
}

const TagFilteredBlurbs = ({ nodes, isOnHomePage }: TagFilteredBlurbsProps) => {
    const [tags] = useState(getAllUniqueTags(nodes))
    const [filter, setFilter] = useState([])
    return (
        <section>
            {
                !isOnHomePage && <Stack gap='base'>
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
                    {filter.length > 0 && <Tag reset name="Clear filter" handleClick={() => setFilter([])}/>}
                </Stack>
            }
            <div className={workSection}>
                {
                    isOnHomePage
                        ? nodes
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
                        : nodes
                            .filter((node) => {       // Filter nodes by tag
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