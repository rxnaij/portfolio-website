import React from 'react'
import { Link, graphql } from 'gatsby'
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import BlogPostHead from './BlogPostHead'
import BlogPostMainContent from './BlogPostMainContent'

import CaseStudyHead from './CaseStudyHead'
import CaseStudyMainContent from './CaseStudyMainContent'
import TableOfContents from './TableOfContents/TableOfContents'
import FeaturedImage from './FeaturedImage'
import { generateSlugFromTitle } from './TableOfContents/slugUtil'
import { createHeadingNodesFromContentNodes } from './TableOfContents/HeadingUtils'

import { pageLayout, wide, content, info } from './CaseStudy.module.scss'

const BlogPost = ({ data }) => {
    const { 
        title, 
        subtitle,
        slug,
        category,
        datePublished,
        mainContent 
    } = data.contentfulBlogPost

    return(
        <Layout>
            <SEO title={title} />
            <BlogPostHead 
                title={title}
                subtitle={subtitle}
                category={category}
                datePublished={datePublished}
            />
            <BlogPostMainContent 
                content={mainContent}
                rootSlug={slug}
            />
        </Layout>
    )
}

export default BlogPost

export const query = graphql`
query BlogPostQuery($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
        title
        subtitle
        slug
        category
        datePublished(formatString: "MMMM DD, YYYY")
        mainContent {
            raw
        }
      
    }
  }
  
`