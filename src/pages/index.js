import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import IntroSection from '../components/index/intro'
import RelevantLinks from "../components/index/RelevantLinks"
import TagFilteredBlurbs from "../components/work/TagFilteredBlurbs"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 48
    }}>
      <h2>Featured work</h2>
      <TagFilteredBlurbs isOnHomePage={true} />
      <Link to="/work">
        See all work &rarr;
      </Link>
    </section>
    <RelevantLinks />
  </Layout>
)

export default IndexPage
