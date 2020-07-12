import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const IntroSection = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulAsset(
            title: {
            eq: "Richard Lu Resume [April 2020]"
            }
        ) {
            title
            file {
                url
            }
        }
    }
    `)

    return(
        <section>
            <Container className="mb-5">
                <h1>Hey! I'm Richard.</h1>
                <p>
                    I'm a product designer based in New York City. I create digital solutions that help people connect with themselves and others in meaningful ways.
                </p>
                <p>Additionally, I have been heavily involved in activism related to Asian American issues, mental health, and ethics in tech. In 2019, I co-directed the New York City Asian American Student Conference.</p>
                <p>In my free time, I love to ride (and look at) my bike, jam out on the piano, and dance my heart out on Dance Dance Revolution.</p>
                <Button size="lg" variant="outline-primary" className="mr-3">
                    <Link to="#contact" className="a-no-style">
                        Let's talk!
                    </Link>
                </Button>
                <Button size="lg" variant="outline-primary" className="">
                    <a href={data.contentfulAsset.file.url}>Resume</a>
                </Button>
            </Container>
        </section>  
    )
}

export default IntroSection