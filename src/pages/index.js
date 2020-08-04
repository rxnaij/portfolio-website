import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IntroSection from '../components/index/intro'
import WorkSection from '../components/work/work-section'
import ContactSection from '../components/index/contact'
import GameSection from '../components/game/game'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <WorkSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
