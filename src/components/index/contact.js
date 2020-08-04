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
        <section>
            <Container id="contact">
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your name" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="email@example.com" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" as="textarea" rows="3" onChange={handleChange} placeholder="Let's work together..." />
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