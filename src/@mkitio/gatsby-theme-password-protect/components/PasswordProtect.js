import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { setSessionPassword } from '../utils/utils'

import Container from 'react-bootstrap/Container'

import { Lock } from 'react-bootstrap-icons'
import Form  from '../../../components/form/Form'
import Button from '../../../components/button/Button'
import Layout from '../../../components/layout/layout'


const PasswordProtect = () => {
    const [password, setPassword] = useState('')

    const onSubmit = event => {
        event.preventDefault();
        setSessionPassword(password);
        window.location.reload(); // eslint-disable-line
    };

    return (
        <Layout>
            <Container>
                <section>
                    <a 
                        href="/" 
                        onClick={(e) => {
                            e.preventDefault()
                            navigate(-1)
                        }}
                        className="d-block mb-4"
                    >&larr; Back to previous page</a>
                    <h1>Protected case study <Lock color="hsl(168, 48%, 48%)" size="1.5rem" /></h1>
                    <p>This case study is protected. If you have the password, please enter it below.</p>
                    <Form onSubmit={onSubmit} disableNetlify={true}>
                        <Form.Group>
                            <Form.Label htmlFor="password">
                                Enter password
                            </Form.Label>
                            <Form.Input 
                                type="password" 
                                name="password" 
                                onChange={e => setPassword(e.target.value)}
                                required 
                                style={{
                                    maxWidth: 500
                                }}
                            />
                        </Form.Group>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </section>
            </Container>
        </Layout>
    )
}

export default PasswordProtect
