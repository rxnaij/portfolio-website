import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Image from 'react-bootstrap/Image'
import classNames from 'classnames'
import { useThemeState } from '../../hooks/ThemeContext.ts'

// import Button from 'react-bootstrap/Button'
import Button from '../button/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from '../card/Card'

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
                    <Col xs={12} sm={8} className="mb-5 mb-sm-0">
                        <h1 className="display-4 font-weight-bold">Hey!<br />I'm Richard.</h1>
                        <div>
                            <p>I'm a <strong>product designer</strong> and <strong>front-end developer</strong> on a quest to create compassionate technology.</p> 
                            <p>My specialty lies at the intersection of user experience design, empathetic design, and web development.</p>
                            <p>I'm also interested in the relationship between tech and social justice, well-being, and ethics. In college, I was a co-director for the <a href="https://nycaasc.com">NYC Asian American Student Conference</a>.</p>
                            <div>
                                <Button className="mr-3">
                                    <AnchorLink to="#contact" className="a-no-style">
                                        Get in touch!
                                    </AnchorLink>
                                </Button>
                                <Button variant="outline">
                                    <a href={data.contentfulAsset.file.url} className="a-no-style">View résumé</a>
                                </Button>
                            </div>
                            
                        </div>
                    </Col>
                    <Col xs={12} sm={4} className="mb-4 mb-sm-0 ml-auto">
                        <Card as="aside" bg={theme === 'dark' ? 'dark' : 'white'} className="px-4 py-4 d-flex align-items-start bg-light">
                            <Flipcard
                                className="align-self-center"
                                front={
                                    <Image
                                        className="mw-100"
                                        src={profileImage}
                                        roundedCircle 
                                    />
                                }
                                back={
                                    <Image
                                        className="mw-100"
                                        src={profileImage}
                                        roundedCircle 
                                    />
                                }
                            />
                            <div>
                                <h2 className={classNames("small-header", theme === 'dark' && "dark")}>Across the internet</h2>
                                <ul className="list-unstyled">
                                    <li className="">
                                        <a href="https://github.com/rxnaij" className="secondary-link">
                                            <img src={githubIcon} alt="Richard's GitHub" className="mr-2"/>
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://be.net/richardbludesign" className="secondary-link">
                                            <img src={behanceIcon} alt="Richard's Behance portfolio" className="mr-2"/>
                                            Behance
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={classNames("small-header", theme === 'dark' && "dark")}>Current Status</h2>
                                <p>Open to full-time and freelance opportunities!</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>  
    )
}

export default IntroSection