import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from '../actions/userAction'

import Loader from '../components/Loader'
import Success from '../components/Success'
import Error from '../components/Error'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const registerState = useSelector(state => state.registerUserReducer)
    const { error , success ,loading } = registerState


    const dispatch = useDispatch()


    const registerhandler =() => {
        if(password !== confirmPassword){
            alert('password not match')
        }
        else {
            const user = {name , email, password, confirmPassword}
            dispatch(registerUser(user))
        }
    }

    return (
        <>
            <Container>
                {loading && <Loader />}
                {success && <Success success='User Register Successfully' />}
                {error && <Error error="something went wrong" />}
                <Form>
                    <h1>Registeration</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                         placeholder="text"
                          />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary"
                      onClick={registerhandler}
                  >
                        Register
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Register