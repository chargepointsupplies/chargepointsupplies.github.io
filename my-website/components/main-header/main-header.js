'use client'

import Link from "next/link"
import Image from 'next/image';
import { usePathname } from "next/navigation";

import MainHeaderBackground from "./main-header-background";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';


export default function MainHeader() {
const path=usePathname();

    return (
        <>
        <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="Logo for chargepoint supplies" priority />
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                           
                        </li>
                        <li>
                            <Link href="/community" className={path === '/community' ? classes.active : undefined}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </ >
    );
}