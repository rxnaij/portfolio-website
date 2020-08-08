import { Link } from "gatsby"
import React from "react"

import githubIcon from '../images/icons/github-32.png'
import behanceIcon from '../images/icons/behance-32.png'

import Container from 'react-bootstrap/Container'

const Footer = ({ siteTitle }) => {

    return (
        <Container>
            <div className="border-top py-4">
                <div>
                    <p className="text-muted"><strong>Current status:</strong> open to full-time and freelance opportunities.
                    <br />If you're interested in working together, <Link to="#contact">drop me a line!</Link></p>
                </div>
                <div>
                    <p className="small">Find me around the internet:</p>
                    <ul className="list-unstyled d-flex justify-content-start">
                        <li className="mr-2">
                            
                            <a href="https://github.com/rxnaij">
                                <img src={githubIcon} alt="Richard's GitHub" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/xricharizab88b">
                                <img src={behanceIcon} alt="Richard's Behance portfolio" />
                            </a>
                        </li>
                    </ul>
                </div>
                <span className="small">
                    © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
            </div>
            
        </Container>
    )
}

export default Footer
