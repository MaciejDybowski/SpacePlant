import React, { useEffect, useState } from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { login } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        dispatch(login(data));
    }

    useEffect(() => {
        AOS.init();
    }, [])
    
    const isAuth = useSelector(state => state.firebase.auth)
    if (isAuth.uid) return <Redirect to='/dashboard'></Redirect>
    return (
        <div data-aos="fade-left">
            <div className='login-form'>
                <div className='field'>
                    <AccountCircleIcon fontSize='large' />
                    <input type='text' placeholder='Write your email...' value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
                </div>
                <div className='field'>
                    <LockIcon fontSize='large' />
                    <input type='password' placeholder='Write your password...' value={password} onChange={(e) => setPassword(e.currentTarget.value)}></input>
                </div>
                <div className='submit-btn'>
                    <button type='submit' onClick={(e) => handleSubmit(e)}>Login</button>
                </div>
            </div>
        </div>

    )
}

export default Login
