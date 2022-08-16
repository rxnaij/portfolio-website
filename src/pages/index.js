import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import IntroSection from '../components/index/intro'
import RelevantLinks from "../components/index/RelevantLinks"
import TagFilteredBlurbs from "../components/work/TagFilteredBlurbs"

import { Title } from '../components/typography/typography'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <Layout.WideSection>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        padding: "80px 0"
        // gridColumn: "start / end"
      }}>
        <Title 
          title="Featured work"
          level={2}
          subtitle="Check out what I've been working on!"
        />
        <TagFilteredBlurbs isOnHomePage={true} />
        <Link to="/work">
          See all work &rarr;
        </Link>
      </div>
    </Layout.WideSection>
    
    <RelevantLinks />
  </Layout>
)

export default IndexPage
