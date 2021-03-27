import React from 'react';
import './Nav.css';
import logo from '../../../Machine Test/logo.png';

const Nav = () => {
    return (
        <>
            <header>
                <img src={logo} alt='logo'/>
                <ul className='navigation'>
                    <li>Games</li>
                    <li>Gallery</li>
                    <li>Media</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </header>
        </>
    )
}

export default Nav;
