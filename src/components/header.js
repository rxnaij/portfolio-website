import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => (
  <Navbar sticky="top" bg="light">
    <Navbar.Brand>
      <Link to="/" className="a-no-style">Richard Lu</Link>
    </Navbar.Brand>
    <Nav>
      <Nav.Item>
        <Link to="/" className="header-link" activeClassName="header-link--is-active">
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/work" className="header-link" activeClassName="header-link--is-active">
          Work
        </Link>
      </Nav.Item>
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
