import React, { useState } from 'react'
import { navigate } from 'gatsby'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from "react-bootstrap/Form"

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const ContactSection = () => {
    const [ state, setState ] = useState({})

    // Syncs form input values with state (is this necessary?)
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    // Handle form submissions
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert(error))
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
                    novalidate
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
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Container>
        </section>
    )
}

export default ContactSection