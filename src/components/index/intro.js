import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'react-bootstrap/Image'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                    <Col xs={8} lg={7} className="d-flex flex-column justify-content-center">
                        <h1 className="display-3">hey!<br />i'm richard.</h1>
                        <p>
                            <span className="lead text-muted">
                                product designer, human, etc.
                            </span>
                            <br />
                            <strong className="lead text-info">
                                open to full-time and freelance opportunities!
                            </strong>
                        </p>

                    </Col>
                    <Col xs={4} lg={5} className="d-flex flex-row align-items-center">
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
                    I'm a product designer // human being // thing-doer based in NYC. I use technology to help people connect with themselves and others in meaningful ways.
                </p>
                <p>Additionally, I have been involved in activism related to Asian American issues, mental health, and ethics in tech. In 2019, I co-directed the <a href="http://nycaasc.com">New York City Asian American Student Conference (NYCAASC).</a></p>
                <p>In my free time, I love to ride my fixed gear bike, jam out on the piano, and dance my heart out on Dance Dance Revolution.</p>
                <Button size="lg" variant="outline-primary" className="mr-3">
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