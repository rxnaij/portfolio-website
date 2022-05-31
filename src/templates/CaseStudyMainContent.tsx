import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import FeaturedImage from './FeaturedImage'
import TableOfContents from './TableOfContents/TableOfContents'
import { HeadingNode } from './TableOfContents/HeadingUtils'
import { contentRenderingOptions } from './contentUtilities'
import { wide, wrapper, productImagesWrapper, mainContentWrapper } from './CaseStudyMainContent.module.scss'

interface CaseStudyMainContentProps {
    productImages: any[]
    content: any
    headings: HeadingNode[]
    rootSlug: string
}

const CaseStudyMainContent = ({ productImages, content, headings, rootSlug }: CaseStudyMainContentProps) => {
    // Options that assign special rendering to certain data from the case study content.
    const options = contentRenderingOptions(content.references, wide)

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

export default CaseStudyMainContent