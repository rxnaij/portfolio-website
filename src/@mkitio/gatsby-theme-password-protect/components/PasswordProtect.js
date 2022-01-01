import React, { useState } from 'react'
import { Link } from 'gatsby'
import { setSessionPassword } from '../utils/utils'

import { Lock } from 'react-bootstrap-icons'

import Form  from '../../../components/form/Form'
import Button from '../../../components/button/Button'
import Layout from '../../../components/layout/layout'
import Stack from '../../../components/stack/Stack'

const PasswordProtect = () => {
    const [password, setPassword] = useState('')

    const onSubmit = event => {
        event.preventDefault();
        setSessionPassword(password);
        window.location.reload(); // eslint-disable-line
    };

    return (
        <Layout>
            <section>
                <h1 className="section-title">Protected case study</h1>
                <Link to="/work">&larr; Go back to portfolio</Link>
                <Stack flexDirection="column" paddingY="2xl" gap="base">
                    <p><Lock color="hsl(168, 48%, 48%)" size={24} style={{ display: 'inline-block' }} /> This case study is password-protected. If you have the password, please enter it below.</p>
                    <Form onSubmit={onSubmit} disableNetlify={true} style={{ width: '100%', maxWidth: 400 }}>
                        <Form.Group>
                            <Form.Label htmlFor="password">
                                Enter password
                            </Form.Label>
                            <Form.Input 
                                type="password" 
                                name="password" 
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </Stack>
                
            </section>
        </Layout>
    )
}

export default PasswordProtect
