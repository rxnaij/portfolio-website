import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import TagFilteredBlurbs from '../components/work/TagFilteredBlurbs'

const WorkPage = ({ data }) => {
    console.log(data)
    return(
        <Layout>
            <SEO title="Work" />
            <Layout.Title>
                <h1>Portfolio</h1>
                <p>Check out the projects I've worked on!</p>
            </Layout.Title>
            <TagFilteredBlurbs isOnHomePage={false} />
        </Layout>
    )
}

export default WorkPage