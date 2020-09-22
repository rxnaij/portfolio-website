import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ContactSection = () => {
    const [ state, setState ] = useState({})

    // Syncs form input values with state (is this necessary?)
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return(
        <section id="contact">
            <Container>
                <h1>Let's talk!</h1>
                <Row>
                    <Col xs={12} md={6}>
                        <p className="mb-4">Thanks for stopping by! Leave a message if you're interested in working together, have questions, or want to share ideas.
                        </p>
                        <p>At the moment, <strong className="text-info">I'm currently open to offers for full-time and freelance work.</strong> Woohoo!</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <form 
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            noValidate
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <p hidden>
                                <label>
                                    Don't fill this out: <input name="bot-field" onChange={handleChange} />
                                </label>
                            </p>
                            <Form.Group controlId="name">
                                <Form.Label>Your name (required)</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Jimmy Johns" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Your email (required)</Form.Label>
                                <Form.Control name="email" type="email" placeholder="email@example.com" onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group controlId="message">
                                <Form.Label>Message (required)</Form.Label>
                                <Form.Control name="message" as="textarea" rows="3" onChange={handleChange} placeholder="Let's work together..." required />
                            </Form.Group>
                            <Button className="mr-auto" variant="primary" type="submit">
                                Send it!
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactSection