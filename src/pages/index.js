import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IntroSection from '../components/index/intro'
import WorkSection from '../components/work/work-section'
import PublicationsSection from '../components/index/publications'
import ContactSection from '../components/index/contact'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <WorkSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
