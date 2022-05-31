import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import TableOfContents from './TableOfContents/TableOfContents'
import { createHeadingNodesFromContentNodes, HeadingNode } from './TableOfContents/HeadingUtils'
import { wide, wrapper, mainContentWrapper } from './CaseStudyMainContent.module.scss'

import {contentRenderingOptions} from './contentUtilities'

interface BlogPostMainContentProps {
    content: any
    rootSlug: string
}

const BlogPostMainContent = ({ content, rootSlug }: BlogPostMainContentProps) => {
    const headings = createHeadingNodesFromContentNodes(
        JSON.parse(content.raw).content, 
       `blog/${rootSlug}`
    )

    const options = contentRenderingOptions(content.references, wide)

    return(
        <>
            <div className={wrapper}>
                {
                    headings.length > 0 &&
                    <TableOfContents 
                        headings={headings} 
                    />
                }     
                <article className={mainContentWrapper}>
                    { renderRichText(content, options) }
                </article>
            </div>
        </>
    )
}

export default BlogPostMainContent