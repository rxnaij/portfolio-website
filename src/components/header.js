import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => (
  <Navbar bg="light" sticky="top">
    <Navbar.Brand>
      <Link to="/" className="a-no-style">Richard Lu</Link>
    </Navbar.Brand>
    <Nav>
      <Nav.Link>
        <Link to="/" className="a-no-style" activeStyle={{ 'color': 'blue' }}>Home</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/work" className="a-no-style" activeStyle={{ 'color': 'blue' }} >Work</Link>
      </Nav.Link>
    </Nav>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
