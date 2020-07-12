import React from 'react'
import { Link } from 'gatsby'

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
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form>
            </Container>
        </section>
    )
}

export default ContactSection