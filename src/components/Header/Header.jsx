import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Khadok Society</h1>
            <div className='menu'>
                <a href="/home">Home</a>
                <a href="/about">About Us</a>
                <a href="/menu">Menu Bar</a>
                <a href="/special">Special Today</a>
            </div>
        </div>
    );
};

export default Header;