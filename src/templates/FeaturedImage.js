import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { wrapper } from './FeaturedImage.module.scss'

/* FeaturedImage: product images that appear at the top to describe the product */
const FeaturedImage = ({ image, description, index }) => {
    return(
        <figure className={wrapper}>
            <GatsbyImage image={image} alt={description} />
            <figcaption>{ description }</figcaption>
        </figure>
    )
}

export default FeaturedImage