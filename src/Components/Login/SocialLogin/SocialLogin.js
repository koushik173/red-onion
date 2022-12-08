import React from 'react';
import { Button } from 'react-bootstrap';
import './SocialLogin.css'
import googleLogo from '../../Images/icons/google.png'
import fbLogo from '../../Images/icons/fb.png'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-item-center pt-3'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='OrPosition'>Or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            <div>
                <Button variant="info" style={{width:'53%'}} className='d-flex justify-content-between mx-auto '>
                    <img style={{height: '25px'}} src={googleLogo} alt="" />
                    <span>Continue with Google</span>
                </Button>
                <Button variant="info" style={{width:'53%'}} className='d-flex justify-content-between mx-auto mt-2'>
                    <img style={{height: '25px'}} src={fbLogo} alt="" />
                    <span>Continue with Facebook</span>
                </Button>
            </div>
            
        </div>
    );
};

export default SocialLogin;