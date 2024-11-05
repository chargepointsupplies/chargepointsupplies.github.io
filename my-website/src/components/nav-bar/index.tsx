// src/components/nav-bar/nav-links.tsx
import React from 'react';
import Link from 'next/link';
import NavLinks from './nav-links';

const NavBar = () => {
    return (
        <div className=' items-center justify-between'>
            {/* could add logo here */}
            <NavLinks/>
            
        </div>
    );
};

export default NavBar;