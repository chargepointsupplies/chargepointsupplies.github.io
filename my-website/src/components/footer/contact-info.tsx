import React from 'react';
import Link from 'next/link';

const contactInfo = [
    //aqui va la informacion de contacto
    { href: "mailto:info@example.com", label: "Email: info@example.com" },
    { href: "tel:+1234567890", label: "Phone: +1 234 567 890" },
    { href: "https://goo.gl/maps/abc123", label: "Address: 1234 Main St, City, Country" }
];

const ContactInfo: React.FC = () => {
    return (
        <div className='flex flex-col p-2 items-center justify-center'>
            {contactInfo.map((info, index) => (
                <Link key={index} href={info.href}>
                    <p>{info.label}</p>
                </Link>
            ))}
        </div>
    );
};

export default ContactInfo;
