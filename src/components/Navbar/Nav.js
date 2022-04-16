import React from 'react';
import Logo from './logo/Logo';
import NavItem from './navItem/NavItem';

export default function Nav() {
    return(
        <div className='nav-container'>
            <Logo />
            <NavItem />
        </div>
    );
}