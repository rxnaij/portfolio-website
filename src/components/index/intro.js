import React from 'react'
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
            eq: "Richard Lu Resume [April 2020]"
            }
        ) {
            file {
                url
            }
        }
    }
    `)

    return(
        <section id="intro">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col className="d-flex align-items-center">
                        <h1 className="display-3">hey!<br />i'm richard.</h1>
                    </Col>
                    <Col>
                        <Image className="mw-100" src={profileImage} roundedCircle />
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
                    <a href={data.contentfulAsset.file.url} className="a-no-style">Resume</a>
                </Button>
            </Container>
        </section>  
    )
}

export default IntroSection