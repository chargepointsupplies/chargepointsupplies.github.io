import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
const nav = [
    // add your social media links here
    { href: "", name: <FaInstagram /> },
    { href: "", name: <FaFacebook /> },
    { href: "", name: <FaTwitter /> },
];

const SocialLinks: React.FC = () => {
    return (

        <div className='flex flex-col p-2 items-center justify-center rounded-full'>
            {nav.map((nav, index) => (
                <Link key={index} href={nav.href}>
                    <p>{nav.name}</p>
                </Link>
            ))}
        </div>
        
    );
};

export default SocialLinks;