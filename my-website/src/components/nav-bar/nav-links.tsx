import React from 'react';
import Link from 'next/link';

const nav = [
    { href: "/", name: "Home" },
    { href: "/Menu", name: "Menu" },
    { href: "/services", name: "Services" },
    { href: "/contact", name: "Contact Us" }
];

const NavLinks: React.FC = () => {
    return (

        <div className='flex flex-row px-6 py-4 items-center justify-center'>
            {nav.map((nav, index) => (
                <Link key={index} href={nav.href}>{nav.name}</Link>
            ))}
        </div>
        
    );
};

export default NavLinks;