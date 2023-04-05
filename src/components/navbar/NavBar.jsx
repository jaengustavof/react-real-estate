import React from 'react';
import './nav-bar.scss';
import Logo from '../../assets/imgs/logo.svg';

const NavBar = () => {
    return (
        <nav>
            <div className='logo-container'>
                <img src={Logo} alt="fake log" height='60px' />
            </div>
            <div className='links-container'>
                <li className='link-item'>Buy</li>
                <li className='link-item'>Rent</li>
                <li className='link-item'>Sell</li>
                <li className='link-item'>Home Loans</li>
            </div>
            <div className='work-with-us'>
                <span>Work with us</span>
            </div>
        </nav>
    );
}

export default NavBar;
