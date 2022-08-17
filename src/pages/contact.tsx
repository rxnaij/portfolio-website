import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import Button from '../components/button/Button'
import Form from '../components/form/Form'
import SEO from '../components/seo'
import cn from 'classnames'
import { wrapper } from './contact.module.scss'

const ContactPage = () => {
    const [ state, setState ] = useState({})

    // Syncs form input values with state (is this necessary?)
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    return(
        <Layout>
            <SEO title="Contact" />
            <Layout.Title>
                <h1>Contact</h1>
                <p>Let's get in touch!</p>
            </Layout.Title>
            <section id="contact" className={wrapper}>
                <p>Leave a message if you're interested in working together, have questions, or want to share ideas. At the moment, I'm seeking opportunities for full-time, entry-level UX/product designer roles.</p>
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