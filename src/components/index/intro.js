import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'react-bootstrap/Image'
import { useThemeState } from '../../hooks/ThemeContext.ts'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import Flipcard from '../flipcard/Flipcard'

import githubIcon from '../../images/icons/github-32.png'
import behanceIcon from '../../images/icons/behance-32.png'
import profileImage from '../../images/cursor-face.jpg'

const IntroSection = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset(
            title: {
            eq: "Richard Lu Resume"
            }
        ) {
            file {
                url
            }
        }
    }
    `)

    const { theme } = useThemeState()

    return(
        <section id="intro">
            <Container>
                <Row className="d-flex">
                    <Col xs={12} sm={6} md={6} className="mb-5 mb-sm-0">
                        <h1 className="display-4 font-weight-bold">hey!<br />I'm Richard.</h1>
                        <p className="lead text-muted mb-4"> product designer // human // etc.</p>
                        <div>
                            <p>I'm a digital product designer on a quest to use technology to help people connect with themselves and others in meaningful, healthy, and equitable ways.</p>
                            <p>My interests also extend into social justice, mental health, and ethics in tech.</p>
                            <Button size="lg" variant="primary" className="mr-3">
                                <Link to="#contact" className="a-no-style">
                                    Let's talk!
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline-primary">
                                <a href={data.contentfulAsset.file.url} className="a-no-style">Résumé</a>
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={5} className="mb-4 mb-sm-0 ml-auto">
                        <Card as="aside" bg={theme === 'dark' ? 'secondary' : 'white'} className="px-5 d-flex align-items-start py-4 bg-light">
                            <Flipcard
                                className="mb-4 align-self-center"
                                front={
                                    <Image
                                        className="mb-4 mw-100"
                                        src={profileImage}
                                        roundedCircle 
                                    />
                                }
                                back={
                                    <Image
                                        className="mb-4 mw-100"
                                        src={profileImage}
                                        roundedCircle 
                                    />
                                }
                            />
                            <h2 className="small-header">Across the internet</h2>
                            <ul className="list-unstyled d-flex justify-content-around mb-5">
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
                            <h2 className="small-header">Current Status</h2>
                            <strong className="text-info font-weight-bold">
                                open to full-time and freelance opportunities!
                            </strong>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>  
    )
}

export default IntroSection