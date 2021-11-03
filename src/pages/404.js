import React from "react"
import { Link }  from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Container from 'react-bootstrap/Container'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <section>
        <h1>Not found :(</h1>
        <p>Sorry, the link you followed either doesn't exist or was removed.</p>
        <p><Link to="/">Return to home</Link></p>
      </section>
    </Container>
  </Layout>
)

export default NotFoundPage
