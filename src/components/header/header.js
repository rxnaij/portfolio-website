import { Link } from "gatsby"
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import PropTypes from "prop-types"
import React from "react"
import { ThemeContext } from '../../hooks/ThemeContext.ts'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Toggle from '../toggle/Toggle.tsx'

const Header = ({ siteTitle }) => {

  const { state, dispatch } = React.useContext(ThemeContext)
  const { theme } = state

  return (
    <Navbar
      expand="sm"
      variant={theme}
      style={{ "background-color": "inherit" }}
    >
      <Navbar.Brand className="mr-4 font-weight-bold">
        <Link to="/" className="a-no-style">Richard Lu</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link pl-0 pr-3 mr-3" activeClassName="nav-link--is-active" to="/">Home</Link>
          <Link className="nav-link pl-0 pr-3 mr-3" activeClassName="nav-link--is-active" partiallyActive={true} to="/work">Portfolio</Link>
          <AnchorLink className="nav-link pl-0 pr-3" activeClassName="nav-link--is-active" to="/#contact">Contact</AnchorLink>
        </Nav>
        <hr />
        <Toggle
          className=""
          horizontal
          name="dark-theme-toggle"
          labelText="lights"
          offText="Dark"
          onText="Light"
          value={theme}
          condition={theme === 'light'}
          onToggle={() => dispatch({ type: 'toggleDarkMode' })}
        />
      </Navbar.Collapse>
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
