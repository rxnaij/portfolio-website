import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import Container from 'react-bootstrap/Container'

const Footer = ({ siteTitle }) => {

    return (
        <Container>
            <div className="border-top pt-4">
                <div>
                    Find me around the internet:
                    <ul className="unstyled-list">
                        <li>
                            <a href="">GitHub</a>
                        </li>
                        <li>
                            <a href="">Behance</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/#contact">
                        Get in touch
                    </Link>

                </div>
                <span className="small">
                    © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
            </div>
            
        </Container>
    )
}

export default Footer
