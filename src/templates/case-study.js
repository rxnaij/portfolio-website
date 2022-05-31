import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import CaseStudyHead from './CaseStudyHead'
import CaseStudyMainContent from './CaseStudyMainContent'
import { createHeadingNodesFromContentNodes } from './TableOfContents/HeadingUtils'

const CaseStudy = ({ data }) => {
    const { 
        title, 
        slug,
        coverPhoto, 
        description, 
        startDate, 
        endDate, 
        projectType, 
        role, 
        projectLink,
        productImages,
        mainContent,
    } = data.contentfulCaseStudy

    const headings = createHeadingNodesFromContentNodes(
        JSON.parse(mainContent.raw).content, 
        data.contentfulCaseStudy.protected ? `work/secret/${slug}` : `work/${slug}`
    )

    return (
        <Layout>
            <SEO title={title} />
            <CaseStudyHead 
                title={title}
                coverPhoto={coverPhoto}
                description={description}
                startDate={startDate}
                endDate={endDate}
                projectType={projectType}
                role={role}
                projectLink={projectLink}
            />
            <CaseStudyMainContent 
                productImages={productImages}
                content={mainContent}
                headings={headings}
                rootSlug={slug}
            />
            <section>
                <Link to="/work">&larr; Back to portfolio</Link>
            </section>
        </Layout>
    )
}

export default CaseStudy


// Use GraphQL to source content from Contentful
export const query = graphql`
    query (
        $slug: String
    ) {
        contentfulCaseStudy(
            slug: {
                eq: $slug
            }
        ) {
            title
            slug
            protected
            description
            coverPhoto {
                title
                gatsbyImageData(
                    layout: FULL_WIDTH
                )
            }
            projectType
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM YYYY")
            role
            projectLink
            productImages {
                id
                description
                gatsbyImageData
            }
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