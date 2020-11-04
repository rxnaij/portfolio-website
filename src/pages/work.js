import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

import WorkSection from '../components/work/work-section'

const WorkPage = () => {
    return(
        <Layout>
            <SEO title="Work" />
            <WorkSection />
        </Layout>
    )
}

export default WorkPage