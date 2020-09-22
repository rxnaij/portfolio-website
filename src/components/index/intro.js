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
                <Row className="d-flex justify-content-between">
                    <Col xs={12} lg={7} className="d-flex flex-column justify-content-center">
                        <h1>hey!<br />i'm richard.</h1>
                        <div>
                            <span className="lead text-muted">
                                product designer, human, etc.
                            </span>
                            <br />
                            <Border>
                                <strong className="lead text-info font-weight-bold">
                                    open to full-time and freelance opportunities!
                                </strong>
                            </Border>
                        </div>
                    </Col>
                    <Col xs={6} lg={5} className="d-flex flex-row align-items-center mx-auto">
                        <Image
                            className={`mw-100 ${profileImageIsRotating ? 'profile-image' : ''}`}
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
                    </Col>
                </Row>
                <p>
                    I'm a product designer // human being // thing-doer based in NYC. I design with the purpose of helping people connect with themselves and others in meaningful, equitable, and healthy ways.
                </p>
                <p>Additionally, I have been involved in activism related to Asian American issues, mental health, and ethics in tech. In 2019, I co-directed the <a href="http://nycaasc.com">New York City Asian American Student Conference (NYCAASC).</a></p>
                <p>In my free time, I love to ride my fixed gear bike, jam out on the piano, and dance my heart out on Dance Dance Revolution.</p>
                <Button size="lg" variant="primary" className="mr-3">
                    <Link to="#contact" className="a-no-style">
                        Let's talk!
                    </Link>
                </Button>
                <Button size="lg" variant="outline-primary" className="">
                    <a href={data.contentfulAsset.file.url} className="a-no-style">Résumé</a>
                </Button>
            </Container>
        </section>  
    )
}

export default IntroSection