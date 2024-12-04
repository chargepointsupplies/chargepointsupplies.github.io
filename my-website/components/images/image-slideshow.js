'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import infousbcImg from '@/assets/infousb-c.jpg';
import portbattery2Img from '@/assets/portbattery2.jpg';
import colorspeakersImg from '@/assets/colorspeakers.jpg';
import portbattery1Img from '@/assets/portbattery1.jpg';
import wirelessheadphonesImg from '@/assets/wirelessheadphones.jpg';
import applechargekitImg from '@/assets/applechargekit.jpg';
import androidcableImg from '@/assets/androidcable.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: infousbcImg, alt: 'New and improved USB-C technology' },
  { image: portbattery2Img, alt: 'Portable battery compatible with various Iphone models' },
  { image: colorspeakersImg, alt: 'Small and portable speakers in a variety of colors' },
  { image: portbattery1Img, alt: 'Portable battery compatible with Android and Apple phones' },
  { image: wirelessheadphonesImg, alt: 'Bluetooth headphones with charging case' },
  { image: applechargekitImg, alt: 'Fast-charge lightning kit for Apple devices' },
  { image: androidcableImg, alt: 'USB-C to USB-C charging cable' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000); //every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}