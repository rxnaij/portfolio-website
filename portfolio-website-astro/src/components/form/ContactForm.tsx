import React from 'react'
import Button from '../button/Button'
import Form from './Form'

/**
 * Composes the whole contact form as a single React tree.
 * Astro renders nested framework components as independent invocations, so
 * Form's context Provider wouldn't reach Form.Input/Form.Textarea if they
 * were instead nested directly inside <Form> in an .astro template.
 */
const ContactForm = () => {
    return (
        <Form name="contact" method="post">
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
            <Button renderContainer={(props) => <button type="submit" {...props} />}>
                Send it!
            </Button>
        </Form>
    )
}

export default ContactForm
