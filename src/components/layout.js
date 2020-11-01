/**
 * Layout component — sets up style of pages.
 * queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useDarkMode } from "../hooks/useDarkMode"

import Header from "./header/header"
import Footer from './footer'
import '../pages/App.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, toggleTheme] = useDarkMode()

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
      }}
      className={theme === 'dark' ? 'dark-mode' : 'dark-mode'}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main  className="pt-3">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
