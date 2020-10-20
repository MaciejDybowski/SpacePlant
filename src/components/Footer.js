import React, { useEffect } from 'react'
import '../style/Footer.scss';
import Avatar from '@material-ui/core/Avatar';
import avatarPic from '../images/avatar.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const maciek = {
    name: 'Maciej',
    surname: 'Dybowski',
    function: 'Aplikacja React',
    github: 'https://github.com/MaciejDybowski',
    facebook: 'https://www.facebook.com/maciek.dybowski.5',
    linkedin: 'https://www.linkedin.com/in/maciejdybowski/',
}

const patryk = {
    name: 'Patryk',
    surname: 'Wicherek',
    function: 'Aplikacja Unity',
    github: 'www.google.com',
    facebook: 'www.google.com',
    linkedin: 'www.google.com',
}

const jakub = {
    name: 'Jakub',
    surname: 'Tytuła',
    function: 'Modele i tekstury Unity',
    github: 'www.google.com',
    facebook: 'www.google.com',
    linkedin: 'www.google.com',
}

const marcin = {
    name: 'Marcin',
    surname: 'Sirant',
    function: 'Aplikacja Unity',
    github: 'https://github.com/Marcinsirant',
    facebook: 'https://www.facebook.com/marcin.sirant.7',
    linkedin: '#',
}

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='footer'>
            <p className='title'>Autorzy</p>
            <div data-aos="fade-up" className='authorbox'>
                <div className='authors'>
                    <Author person={maciek} />
                    <Author person={patryk} />
                    <Author person={marcin} />
                    <Author person={jakub} />

                </div>
            </div>

        </div>
    )
}


const Author = ({ person }) => {
    return (
        <div className='author'>
            <Avatar alt="Remy Sharp" src={avatarPic} className='avatar' />
            <p>{person.name} {person.surname}</p>
            <p>{person.function}</p>
            <div className='icons'>
                <a href={person.github} target='blank'>
                    <GitHubIcon />
                </a>
                <a href={person.facebook} target='blank'>
                    <FacebookIcon />
                </a>
                <a href={person.linkedin} target='blank'>
                    <LinkedInIcon />
                </a>
            </div>
        </div>
    )
}

export default Footer
