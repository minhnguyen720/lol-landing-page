import React from 'react';
import { logo } from '../../../assets/images';

export default function Logo() {
    return(
        <div className='logo-container'>
            <img className="logo-img" src={logo} alt="lol-logo"></img>
        </div>
    );
}