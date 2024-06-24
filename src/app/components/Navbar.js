'use client'

import '@/app/components/navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import ucphoenix from '../../../public/UChicago_PhoenixWhite.svg';
import uclogo from '../../../public/ucsp_whiteonblack.svg';

const Navbar = () => {
    return (
        <div>
            <nav className='navbar'>
                <Link href="/">
                    <Image 
                        className='logo'
                        src={uclogo}
                        alt="UCSP Logo"
                    />
                </Link>
                <div className='links'>
                    <Link href="/cubesat" className='navlink'>
                        ABOUT
                    </Link>
                    <Link href="/Contact" className='navlink'>
                        LABORATORIES
                    </Link>
                    <Link href="services" className='navlink'>
                        JOIN
                    </Link>
                </div>
                <Image 
                    className='logo'
                    src={ucphoenix}
                    alt="UCPhoenix Logo"
                />
            </nav>
        </div>
    );
};








export default Navbar;