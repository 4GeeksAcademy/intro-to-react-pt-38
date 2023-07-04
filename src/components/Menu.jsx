import React from 'react';
import MyLink from './MyLink';

export const Menu = () => {
    return (
        <nav className="nav">
            <MyLink link="https://google.com" text="Google" />
            <MyLink link="https://facebook.com" text="Facebook" />
            <MyLink link="https://instagram.com" text="Instagram" />
        </nav>
    )
}