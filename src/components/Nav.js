import React, { useState } from 'react'
import '../style/Nav.scss';
import HamburgerMenu from 'react-hamburger-menu';
import logo from '../images/logo.png';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { logout } from '../redux/actions/authAction';

const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

    const isAuth = useSelector(state => state.firebase.auth)
    if (!isAuth.uid) {
        return (
            <div className='navbar'>
                <span><img src={logo} alt="logo" /></span>
                <p>SpacePlant</p>
                <div className='desktop-nav'>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='mobile-nav'>
                    <HamburgerMenu className='hamburger'
                        isOpen={isMenuOpen}
                        menuClicked={() => setIsMenuOpen(!isMenuOpen)}
                        width={32}
                        height={24}
                        strokeWidth={2.5}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                    {isMenuOpen ?
                        <div className='toggle-menu active'>
                            <ul>
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)}>About</li>
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</li>
                            </ul>
                        </div>

                        :
                        <div className='toggle-menu'>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className='navbar'>
                <span><img src={logo} alt="logo" /></span>
                <p>SpacePlant</p>
                <div className='desktop-nav'>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li onClick={() => handleLogout()}>Logout</li>
                    </ul>
                </div>
                <div className='mobile-nav'>
                    <HamburgerMenu className='hamburger'
                        isOpen={isMenuOpen}
                        menuClicked={() => setIsMenuOpen(!isMenuOpen)}
                        width={32}
                        height={24}
                        strokeWidth={2.5}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                    {isMenuOpen ?
                        <div className='toggle-menu active'>
                            <ul>
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)}>About</li>
                                <li onClick={() => setIsMenuOpen(!isMenuOpen)}>Contact</li>
                                <li onClick={() => handleLogout()}>Logout</li>
                            </ul>
                        </div>

                        :
                        <div className='toggle-menu'>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li onClick={() => handleLogout()}>Logout</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }

}

export default Nav
