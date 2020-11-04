import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classNames from 'classnames'
import { ThemeContext } from '../../hooks/ThemeContext.ts'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Toggle from '../toggle/Toggle.tsx'

const Header = ({ siteTitle }) => {

  const { state, dispatch } = React.useContext(ThemeContext)

  return (
    <Navbar
      expand="sm"
      sticky='top'
      variant={state.theme === 'dark' ? 'dark' : 'light'}
      bg={ state.theme === 'dark' ? 'dark' : 'light' }
    >
      <Navbar.Brand className="mr-4 font-weight-bold">
        <Link to="/" className="a-no-style">Richard Lu</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link pl-0 pr-3 mr-3" activeClassName="nav-link--is-active" to="/">Home</Link>
          <Link className="nav-link pl-0 pr-3 mr-3" activeClassName="nav-link--is-active" partiallyActive={true} to="/work">Portfolio</Link>
          <Link className="nav-link pl-0 pr-3" activeClassName="nav-link--is-active" to="/#contact">Contact</Link>
        </Nav>
        <hr />
        <Toggle
          className=""
          horizontal
          name="dark-theme-toggle"
          labelText="Theme"
          offText="Dark"
          onText="Light"
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
