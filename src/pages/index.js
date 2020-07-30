import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
    <GameSection />
  </Layout>
)

export default IndexPage
