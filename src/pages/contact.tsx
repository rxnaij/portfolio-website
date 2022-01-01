import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import Button from '../components/button/Button'
import Form from '../components/form/Form'
import SEO from '../components/seo'
import Stack from '../components/stack/Stack'

const ContactPage = () => {
    const [ state, setState ] = useState({})

    // Syncs form input values with state (is this necessary?)
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return(
        <Layout>
            <SEO title="Contact" />
            <section id="contact">
                <h1>Let's talk!</h1>
                <p>Thanks for stopping by! Leave a message if you're interested in working together, have questions, or want to share ideas.</p>
                <p>At the moment, <strong>I'm currently open to offers for full-time and freelance work.</strong> Woohoo!</p>
                <br />
                <Form 
                    name="contact"
                    method="post"
                >
                    <Form.Group>
                        <Form.Label htmlFor="name">Your name</Form.Label>
                        <Form.Input type="text" name="name" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email address</Form.Label>
                        <Form.Input type="email" name="email" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="message">Your message</Form.Label>
                        <Form.Textarea name="message" rows={4} required />
                    </Form.Group>
                    <Button renderContainer={
                        (props) => <button type="submit" {...props} />
                    }>
                        Send it!
                    </Button>
                    
                </Form>
            </section>
        </Layout>
    )
}

export default ContactPage