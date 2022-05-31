import React from 'react'
import { InputGroup, FormControl, Row, Col, Button, ListGroup, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [token, setToken] = useState(null);
    function BtnSubmit() {
        axios.post("http://localhost:80/auth/login", {
            username: username,
            password: password

        })
            .then((response) => {
                console.log(response);
                console.log(response.status);
                setStatus(response.status);
                setToken(response.data.token)
                console.log(response.data.token);
            });

    }


    return (
        <div>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                        Kullanıcı adı
                    </Form.Label>
                    <Col sm="10">
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-describedby="basic-addon2"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                            />
                        </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Şifre
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                    </Col>
                </Form.Group>
                <Link to="/"><Button variant="primary" onClick={BtnSubmit}>Giriş Yap</Button>
                </Link>
                <Link to="/registerPage"><Button variant="primary" >Kayıt Ol</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Login
