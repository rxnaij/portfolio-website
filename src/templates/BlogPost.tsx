import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import BlogPostHead from './BlogPostHead'
import BlogPostMainContent from './BlogPostMainContent'

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
            references {
                ...on ContentfulAsset {
                    __typename
                    title
                    description
                    gatsbyImageData
                    contentful_id
                }
            }
        }
      
    }
  }
  
`