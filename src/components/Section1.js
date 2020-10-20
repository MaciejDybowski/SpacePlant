import React, { useState, useEffect } from 'react'
import astronaut from '../images/section-1.png';
import '../style/Section.scss';

import Login from './Login';
import Register from './Register';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Section1 = () => {
    const [form, setForm] = useState(true);
    const [formButton, setButton] = useState(true);

    useEffect(() => {
        AOS.init();
    }, [])

    const handleButtonTrue = () => {
        setForm(true);
        setButton(true);
    }

    const handleButtonFalse = () => {
        setForm(false);
        setButton(false);
    }



    return (
        <div className='section-1'>
            <div className='form-bg'> 
                <div className='form'>
                    <div className='from-btn'>
                        {formButton ? <>
                            <button onClick={() => handleButtonTrue()}>Login</button>
                            <button className='active' onClick={() => handleButtonFalse()} >Register</button> </> :
                            <>
                                <button className='active' onClick={() => handleButtonTrue()}>Login</button>
                                <button onClick={() => handleButtonFalse()} >Register</button></>}
                    </div>
                    {form ? (<Login />) : (<Register />)}
                </div>
            </div>
            <div className='astronaut'>
                <div data-aos="fade-up">
                    <img src={astronaut} alt='astronauta' />
                </div>
            </div>
        </div>
    )
}

export default Section1
