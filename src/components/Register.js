import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import { register } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Register = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            firstName,
            lastName,
        }
        dispatch(register(user));
    }
    const isAuth = useSelector(state => state.firebase.auth)
    if (isAuth.uid) return <Redirect to='/dashboard'></Redirect>

    return (
        <div data-aos="fade-right">
            <div className='register-form'>
                <div className='field'>
                    <AccountCircleIcon fontSize='large' />
                    <input type='text' placeholder='Write your email...' value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
                </div>
                <div className='field'>
                    <LockIcon fontSize='large' />
                    <input type='password' placeholder='Write your password...' value={password} onChange={(e) => setPassword(e.currentTarget.value)}></input>
                </div>
                <div className='field'>
                    <PersonIcon fontSize='large' />
                    <input type='text' placeholder='Write your Name' value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)}></input>
                </div>
                <div className='field'>
                    <PersonIcon fontSize='large' />
                    <input type='text' placeholder='Write your Surname' value={lastName} onChange={(e) => setLastName(e.currentTarget.value)}></input>
                </div>
                <div className='submit-btn'>
                    <button type='submit'  onClick={(e) => handleSubmit(e)}>Register</button>
                </div>
            </div>
        </div>

    )
}

export default Register
