/**
 * Layout component — sets up style of pages.
 * queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useThemeState } from "../../hooks/ThemeContext.ts"

import Sidebar from '../navigation/Sidebar'
import Footer from '../footer/footer'
import '../../styles/App.scss'
import cn from 'classnames'
import { layout, mainContent, title, wideWrapper, wideContent } from './Layout.module.scss'

const Layout = ({ children, style }) => {

  const { theme } = useThemeState()
  const tType = theme === 'dark' ? 'dark-mode' : 'default-mode'

  return (
    <div className={`${tType} ${layout}`}>
      <Sidebar />
      <main style={{ ...style }} className={mainContent}>
        {children}
        <Footer />
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
}

const Title = ({ children }) => {
  return(
      <div className={cn(["typography", title])}>
          { children }
      </div>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired
}

const WideSection = ({ children, tagName, className, id }) => {
  const Tag = tagName || `section`
  return(
    <Tag id={id} className={cn(wideWrapper)} style={{
      backgroundColor: "#30363B"
    }}>
      <div className={cn(wideContent, className)}>
        { children }
      </div>
    </Tag>
  )
}

Layout.Title = Title
Layout.WideSection = WideSection

export default Layout