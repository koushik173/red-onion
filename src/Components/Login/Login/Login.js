import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container w-50 my-5'>
            <h2 className='pb-3'>Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </div>
                    <div>
                        <Link>Forget Password</Link>
                    </div>
                </div>
            </Form>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <p className='mx-5 px-5 pt-3'>Don't have account? <Link to="/register" className='text-primary text-decoration-none'>Please register!</Link></p>
                <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Login;