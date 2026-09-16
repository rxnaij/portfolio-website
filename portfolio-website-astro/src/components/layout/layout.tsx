/**
 * Layout component — sets up style of pages.
 * queries for data with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, { type ComponentPropsWithoutRef } from "react"
import PropTypes from "prop-types"

import Sidebar from '../navigation/Sidebar'
import Footer from '../footer/Footer'

import '../../styles/App.scss'
import cn from 'classnames'
import { layout, mainContent, title, wideWrapper, wideContent } from './Layout.module.scss'

const Layout = ({ children, style }: LayoutProps) => {

  return (
    <div className={layout}>
      <Sidebar />
      <main style={{ ...style }} className={mainContent}>
        {children}
        <Footer />
      </main>
    </div>
  )
}

interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
}

const Title = ({ children }: TitleProps) => {
  return(
      <header className={cn(["typography", title])}>
          { children }
      </header>
  )
}

interface TitleProps extends ComponentPropsWithoutRef<"header"> {}

const WideSection = ({ children, tagName, className, id }: WideSectionProps) => {
  const Tag = tagName || `section`
  return(
    <Tag id={id} className={cn(wideWrapper)}>
      <div className={cn(wideContent, className)}>
        { children }
      </div>
    </Tag>
  )
}

interface WideSectionProps extends ComponentPropsWithoutRef<"div"> {
  tagName?: any // TODO: should be a string representing the name of an HTML element
}

Layout.Title = Title
Layout.WideSection = WideSection

export default Layout