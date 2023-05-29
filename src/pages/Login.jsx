import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/auth'
import GoogleLogin from '../components/GoogleLogin'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const data = { email, password }

        dispatch(login(data, navigate))
    }

    return (
        <Container className='p-4'>
            <Row>
                <Col>
                    {''}
                    <Form onSubmit={onSubmit}>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>
                                Email Address
                            </Form.Label>

                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Form.Text>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='formBasicPassword'>
                            <Form.Label>
                                Password
                            </Form.Label>

                            <Form.Control
                                type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className='text-center'>Or</h3>
                    <div className="d-flex justify-content-center align-items-center">
                        <GoogleLogin buttonText={'Login with Google'}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login