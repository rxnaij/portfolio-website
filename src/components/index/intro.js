import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'react-bootstrap/Image'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Border from '../border/Border'

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

    const [profileImageIsRotating, setProfileImageIsRotating] = useState(false)

    return(
        <section id="intro">
            <Container>
                <Row className="d-flex justify-content-between mb-4">
                    <Col xs={{ span: 12, order: 1 }} sm={{ span: 8, order: 0 }} className="d-flex flex-column justify-content-center">
                        <h1>hey!<br />i'm richard.</h1>
                        <>
                            <span className="lead">
                                product designer // human // etc.
                            </span>
                            <br />
                            <Border>
                                <strong className="lead text-info font-weight-bold">
                                    open to full-time and freelance opportunities!
                                </strong>
                            </Border>
                        </>
                    </Col>
                    <Col xs={{ span: 6, order: 0 }} sm={{ span: 4, order: 1 }} className="d-flex flex-row align-items-center mx-auto">
                        <figure>
                            <Image
                                className={`mw-100 ${profileImageIsRotating ? 'profile-image' : ''}`}
                                style={{

                                }}
                                src={profileImage}
                                roundedCircle 
                                onClick={() => {
                                    if (profileImageIsRotating) {
                                        setProfileImageIsRotating(false)
                                    } else {
                                        setProfileImageIsRotating(true)
                                    }
                                }}
                            />
                            <figcaption>
                                { profileImageIsRotating ? 'Tap again to stop spinning.' : 'Tap me!' }
                            </figcaption>
                        </figure>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <p className="lead">Harnessing the powers of empathy, design, and code, I'm on a quest to help people connect with themselves and others in meaningful, equitable, and healthy ways.</p>
                        <p>Additionally, my interests extend into social justice, mental health, and ethics in tech. In 2019, I served as co-director for the 13th <a href="http://nycaasc.com">New York City Asian American Student Conference (NYCAASC).</a></p>
                        <Button size="lg" variant="primary" className="mr-3">
                            <Link to="#contact" className="a-no-style">
                                Let's talk!
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline-primary" className="">
                            <a href={data.contentfulAsset.file.url} className="a-no-style">Résumé</a>
                        </Button>
                    </Col>
                </Row>
                
            </Container>
        </section>  
    )
}

export default IntroSection