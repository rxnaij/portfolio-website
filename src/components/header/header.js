import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ siteTitle }) => {


  return (
    <Navbar sticky="top" bg="white" variant="light" className="mb-2">
      <Navbar.Brand>
        <Link to="/" className="header-brand">Richard Lu</Link>
      </Navbar.Brand>
      <Nav>
        <Nav.Item>
          <Link to="/" className="header-link" activeClassName="header-link--is-active">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/work" className="header-link" activeClassName="header-link--is-active" partiallyActive={true}>
            Work
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/#contact" className="header-link" activeClassName="header-link--is-active">
            Contact
          </Link>
        </Nav.Item>
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
