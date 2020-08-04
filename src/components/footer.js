import { Link } from "gatsby"
import React from "react"

import Container from 'react-bootstrap/Container'

const Footer = ({ siteTitle }) => {

    return (
        <Container>
            <div className="border-top pt-4">
                <div>
                    <p className="small">Find me around the internet:</p>
                    <ul className="list-unstyled">
                        <li>
                            <a href="https://github.com/rxnaij">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/xricharizab88b">Behance</a>
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
