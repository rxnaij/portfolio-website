/**
 * Contentful rich text rendering options
 */

import React from 'react'
import { BLOCKS } from "@contentful/rich-text-types"
import { generateSlugFromTitle } from './TableOfContents/slugUtil'
import { GatsbyImage } from 'gatsby-plugin-image'

interface HeadingNode {
    content: any
}

/**
 * Renders headings in rich text with `id`s
 */
const linkedHeadings = {
    [BLOCKS.HEADING_2]: ({ content }: HeadingNode) =>
        <h2 id={generateSlugFromTitle(content[0].value)}>
            {content[0].value}
        </h2>,
    [BLOCKS.HEADING_3]: ({ content }: HeadingNode) =>
        <h3 id={generateSlugFromTitle(content[0].value)}>
            {content[0].value}
        </h3>,
    [BLOCKS.HEADING_4]: ({ content }: HeadingNode) =>
        <h4 id={generateSlugFromTitle(content[0].value)}>
            {content[0].value}
        </h4>,
}

/**
 * Renders Contentful rich text images as `<figure>`s with captions
 * @param references the `references` object on the Contentful `content` JSON. This object contains asset data that's used to render images.
 * @param className classes to be applied to the `GatsbyImage` component
 * @returns a `<figure>` with the image and its caption
 */
const renderImages = (references, className="") => ({
    // Render images as figures.
    [BLOCKS.EMBEDDED_ASSET]: node => {
        // Retrieve image and metadata.
        const { id } = node.data.target.sys
        const { title, description, gatsbyImageData } = references.find(asset => asset.contentful_id === id)

        return (
            <figure>
                <GatsbyImage
                    image={gatsbyImageData}
                    alt={title && description}
                    className={className}
                />
                <figcaption>{description}</figcaption>
            </figure>
        )
    }
})

/**
 * Returns a Contentful render options object that will be used to apply special rendering instructions to Contentful rich text.
 * @param references the `references` object on the Contentful `content` JSON. This object contains asset data that's used to render images.
 * @param className classes to be passed to the renderImages() function
 * @returns 
 */
export const contentRenderingOptions = (references, className) => ({
    renderNode: {
        ...renderImages(references, className),
        ...linkedHeadings
    }
})