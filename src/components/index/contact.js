import React from 'react'
import { Link } from 'gatsby'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form"

const ContactSection = () => {
    return(
        <section>
            <Container id="contact">
                <h2>Contact Me</h2>
                <p>Hi! Whether you'd like to work together or have a question, let's get in touch.</p>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </section>
    )
}

export default ContactSection