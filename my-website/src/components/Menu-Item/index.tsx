import React from 'react';

interface MenuItemProps {
    imageSrc: string;
    title: string;
    description: string;
    price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, title, description, price }) => {
    return (
        <div className='flex items-center justify-between p-4 border-b max-w-xl gap-3'>
            <img src={imageSrc} alt={title} className='w-full h h-full object-cover max-w-sm' />
            <div className='ml-4'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <p className='text-sm text-gray-500'>{description}</p>
                <p className='text-base font-bold'>{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;
