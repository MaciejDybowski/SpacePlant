import React, { useEffect } from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Login = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="fade-left">
            <div className='login-form'>
                <div className='field'>
                    <AccountCircleIcon fontSize='large' />
                    <input type='text' placeholder='Write your username...'></input>
                </div>
                <div className='field'>
                    <LockIcon fontSize='large' />
                    <input type='password' placeholder='Write your password...'></input>
                </div>
                <div className='submit-btn'>
                    <button>Login</button>
                </div>
            </div>
        </div>

    )
}

export default Login
