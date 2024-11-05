import React from 'react';
import Link from 'next/link';

const nav = [
    { href: "/", name: "Home" },
    { href: "/Menu", name: "Menu" },
    { href: "/services", name: "Services" },
];

const NavLinks: React.FC = () => {
    return (

        <ul className='flex flex-row px-6 py-4 items-center justify-center gap-8'>
            {nav.map((nav, index) => (
            <li key={index}>
                <Link href={nav.href}>{nav.name}</Link>
            </li>
            ))}
        </ul>
        
    );
};

export default NavLinks;