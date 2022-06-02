import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import cn from 'classnames'
import { section, wrapper, blogPostsWrapper, title, subtitle, category, date } from './blog.module.scss'

interface BlogPostNode {
    id: string
    title: string
    subtitle: string
    category: string
    datePublished: string
    slug: string
}

const BlogPage = ({ data }) => {

    const { nodes } = data.allContentfulBlogPost

    return (
        <Layout>
            <SEO title="Blog" />
            <section className={section}>
                <h1>Blog</h1>
                <div className={blogPostsWrapper}>
                    {
                        nodes.length > 0
                        ? nodes.map((node: BlogPostNode) => {
                            return (
                                <Link
                                    to={node.slug}
                                    key={node.id + Math.random()}
                                    className={cn([
                                        `a-no-style`,
                                        wrapper
                                    ])}
                                >
                                    <span className={category}>{node.category}</span>
                                    <h3 className={title}>{node.title}</h3>
                                    <p className={subtitle}>{node.subtitle}</p>
                                    <p className={date}>{node.datePublished}</p>
                                </Link>
                            )
                        })
                        : <p>No posts yet...but expect some in the near future!</p>
                    }
                </div>
            </section>
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
    query MyQuery {
        allContentfulBlogPost(filter: { title: {eq: "blog_placeholder"} }) {
            nodes {
                title
                subtitle
                category
                datePublished(formatString: "MMMM DD, YYYY")
                id
                slug
            }
        }
    }
`