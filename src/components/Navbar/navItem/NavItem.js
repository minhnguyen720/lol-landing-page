import React from 'react';

export default function NavItem() {
    return (
        <ul className='nav-items-container'>
            <li className='nav-item'>
                <a className='nav-link'>overview</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link'>news</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link'>champions</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link'>support</a>
            </li>
        </ul>
    );
}