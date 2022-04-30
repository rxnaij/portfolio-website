import React from 'react'

import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'
import FeaturedImage from './FeaturedImage'
import { generateSlugFromTitle } from './TableOfContents/slugUtil'

import { wide, wrapper, productImagesWrapper } from './CaseStudyMainContent.module.scss'

interface CaseStudyMainContentProps {
    productImages: any[]
    content: any
}

const CaseStudyMainContent = ({ productImages, content }: CaseStudyMainContentProps) => {
    // Options that assign special rendering to certain data from the case study content.
    const options = {
        renderNode: {
            // Render images as figures.
            [BLOCKS.EMBEDDED_ASSET]: node => {
                // Retrieve image and metadata.
                const { id } = node.data.target.sys
                const { title, description, gatsbyImageData } = content.references.find(asset => asset.contentful_id === id)

                return (
                    <figure>
                        <GatsbyImage 
                            image={gatsbyImageData}
                            alt={title && description}
                            className={wide}
                        />
                        <figcaption>{ description }</figcaption>
                    </figure>
                ) 
            },
            // Assign slugs to heading IDs, allowing headings to be linkable via anchor links.
            [BLOCKS.HEADING_2]: ({ content }) => 
                <h2 id={generateSlugFromTitle(content[0].value)}>
                    {content[0].value}
                </h2>,
            [BLOCKS.HEADING_3]: ({ content }) => 
                <h3 id={generateSlugFromTitle(content[0].value)}>
                    {content[0].value}
                </h3>,
            [BLOCKS.HEADING_4]: ({ content }) => 
                <h4 id={generateSlugFromTitle(content[0].value)}>
                    {content[0].value}
                </h4>,
        }
    }

    return(
        <>
            {
                productImages &&
                <section className={productImagesWrapper}>
                    {
                        productImages.map( (image, index) => {
                            return (
                                <FeaturedImage
                                    key={image.id}
                                    image={image.gatsbyImageData}
                                    description={image.description}
                                    index={index}
                                />
                            )
                        } )
                    }
                </section>
            }
            <article className={wrapper}>
                { renderRichText(content, options) }
            </article>
        </>
    )
}

export default CaseStudyMainContent