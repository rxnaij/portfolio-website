import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classNames from 'classnames'
import { useDarkMode } from '../../hooks/useDarkMode'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => {

  const [theme, toggleTheme] = useDarkMode()

  return (
    <Navbar variant="light">
      <Navbar.Brand>Richard Lu</Navbar.Brand>
      <Nav className="mr-auto">
        <Link className="nav-link" activeClassName="nav-link--is-active" to="/">Home</Link>
        <Link className="nav-link" activeClassName="nav-link--is-active" partiallyActive={true} to="/work">Portfolio</Link>
        <Link className="nav-link" activeClassName="nav-link--is-active" to="/#contact">Contact</Link>
      </Nav>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
