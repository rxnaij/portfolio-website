import { Link } from "gatsby"
import React from "react"

import githubIcon from '../../images/icons/github-32.png'
import behanceIcon from '../../images/icons/behance-32.png'
import Icon from '../icon/Icon'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = ({ siteTitle }) => {

    return (
        <Container>
            <Row className="border-top py-4">
                <Col sm={6} className="mb-2">
                    <p className="small"><strong>Current status:</strong> <span className="text-info">open to full-time and freelance opportunities.</span>
                    <br />If you're interested in working together, <Link to="#contact">drop me a line!</Link></p>
                </Col>
                <Col sm={6} className="d-flex flex-column">
                    <p className="small mb-1">Find me around the internet:</p>
                    <ul className="list-unstyled d-flex justify-content-start">
                        <li className="">
                            <a href="https://github.com/rxnaij">
                                <Icon src={githubIcon} alt="Richard's GitHub profile" />
                            </a>
                        </li>
                        <li>
                            <a href="https://be.net/richardbludesign">
                                <Icon src={behanceIcon} alt="Richard's Behance profile" />
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
