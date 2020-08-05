import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form"


const ContactSection = () => {
    const [ state, setState ] = useState({})

    // Syncs form input values with state (is this necessary?)
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return(
        <section id="contact">
            <Container>
                <h1>Contact Me</h1>
                <p>Hi! Whether you'd like to work together or have a question, let's get in touch.</p>
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
            </Container>
        </section>
    )
}

export default ContactSection