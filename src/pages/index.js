import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import IntroSection from '../components/index/intro'
import ContactSection from '../components/index/contact'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <ContactSection />
  </Layout>
)

export default IndexPage
