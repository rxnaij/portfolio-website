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
import Sidebar from '../navigation/Sidebar'
import Footer from '../footer/footer'
import '../../styles/App.scss'
import { layout, mainContent } from './Layout.module.scss'

/**
 * Returns page layout, contained within state managers.
 * Only edit this component to change state providers.
 * @param {React.ReactNode} children 
 */
const Layout = ({ children, style }) => {

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
    <div className={`${tType} ${layout}`}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Sidebar />
      <main style={{ ...style }} className={mainContent}>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

export default Layout
