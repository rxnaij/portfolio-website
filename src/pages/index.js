import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import IntroSection from '../components/index/intro'
import RelevantLinks from "../components/index/RelevantLinks"
import WorkSection from '../components/work/work-section'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <WorkSection isOnHomePage />
    <RelevantLinks />
  </Layout>
)

export default IndexPage
