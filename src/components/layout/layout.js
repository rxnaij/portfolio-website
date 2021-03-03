/**
 * Layout component — sets up style of pages.
 * queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useThemeState } from "../../hooks/ThemeContext.ts"

import Header from "../header/header"
import Footer from '../footer/footer'
import '../../styles/App.scss'

/**
 * The actual content of the page.
 * Edit this component to change the appearance of the layout.
 * @param {React.ReactNode} children 
 */
const PageContent = ({children}) => {
  // Queries for site title
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { theme } = useThemeState()
  const tType = theme === 'dark' ? 'dark-mode' : 'default-mode'

  return (
    <div
        className={tType}
    >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{
          margin: `0 auto`,
          maxWidth: 1000,
        }} className="pt-3">{children}</main>
        <Footer />
    </div>
  )
}

/**
 * Returns page layout, contained within state managers.
 * Only edit this component to change state providers.
 * @param {React.ReactNode} children 
 */
const Layout = ({ children }) => {

  return (
      <PageContent>
        {children}
      </PageContent>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
