import { Link } from "gatsby"
import React from "react"

import githubIcon from '../images/icons/github-32.png'
import behanceIcon from '../images/icons/behance-32.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = ({ siteTitle }) => {

    return (
        <Container>
            <Row className="border-top py-4">
                <Col sm={6}>
                    <p className="text-muted"><strong>Current status:</strong> <span className="text-info">open to full-time and freelance opportunities.</span>
                    <br />If you're interested in working together, <Link to="#contact">drop me a line!</Link></p>
                </Col>
                <Col sm={6}>
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
                </Col>
            </Row>
            <Row>
                <Col className="mb-4">
                    <span className="small">
                        © {new Date().getFullYear()} Richard Lu, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </span>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Footer
