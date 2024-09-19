'use client'
import '@/app/components/navbar.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ucphoenix from '../../../public/UChicago_PhoenixWhite.svg';
import b_ucphoenix from '../../../public/UChicago_Phoenix_Solid_1Color_White_RGB.svg';
import r_uclogo from '../../../public/redUC.svg';
import uclogo from '../../../public/ucsp_whiteonblack.svg';
import b_uclogo from '../../../public/uscp_blackonwhite.svg';
import { useState } from 'react';

const Navbar = () => {

    const pathname = usePathname();
    let src_uc = pathname == "/cubesat" ? b_uclogo : uclogo;
    src_uc = pathname == "/rocketry" ? r_uclogo : src_uc; 

    let src_ucphoenix = pathname == "/cubesat" ? b_ucphoenix : ucphoenix;

    let color = pathname == "/cubesat" ? 'white' : 'black';
    color = pathname == "/rocketry" ? 'red' : color; 

    let [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className='navbar'>
            <Link href="/">
                <Image 
                    className='logo ucsp'
                    src={src_uc}
                    alt="UCSP Logo"
                />
                <Image 
                    className='logo ucsp mobile'
                    src={uclogo}
                    alt="UCSP Logo"
                />
            </Link>
            <div className='links' id={color}>
                <Link href="/about" className='navlink'>
                    ABOUT
                </Link>
                <Link href=""className='navlink' id='labs'>
                    LABORATORIES
                    <ul id='dropdown'>
                        <li><Link href='/cubesat'>CUBESAT</Link></li>
                        <li><Link href='/rocketry'>ROCKETRY</Link></li>
                    </ul>
                </Link>
                <Link href="https://docs.google.com/forms/d/1jiXOX33-p-h8lLMY3VJhZ5mswJuqcpZ9GpILEmz8uT0/viewform" target='_blank' className='navlink'>
                    JOIN
                </Link>
            </div>
            <a href="https://www.uchicago.edu" style={{cursor: 'pointer'}}>
                <Image 
                    style={{float: 'right', paddingRight: '2rem'}}
                    className='logo ucphoenix'
                    src={src_ucphoenix}
                    alt="UCPhoenix Logo"
                />
            </a>
            <div className='hamburger' onClick={handleMenu}>
                <div class="a"></div>
                <div class="a b"></div>
                <div class="a"></div>
                <div class="a b"></div>
                <div class="a"></div>
            </div>
            {openMenu ? 
            <div class="menu">
                <Link href="/about" className='footlink' onClick={handleMenu}>
                    ABOUT
                </Link>
                <Link href='/cubesat' className='footlink' onClick={handleMenu}>
                    CUBESAT
                </Link>
                <Link href='/rocketry' className='footlink' onClick={handleMenu}>
                    ROCKETRY
                </Link>
                <Link href="/" onClick={handleMenu}>
                    <Image 
                        className='flogo'
                        src={b_uclogo}
                        alt="UCSP Logo"
                    />
                </Link>
                <Link href="https://docs.google.com/forms/d/1jiXOX33-p-h8lLMY3VJhZ5mswJuqcpZ9GpILEmz8uT0/viewform" target='_blank' className='footlink' onClick={handleMenu}>
                    JOIN
                </Link>
                <Link href="/pulse-a" className='footlink' onClick={handleMenu}>
                    PULSE-A
                </Link>
                <Link href="/pulse-a" className='footlink' onClick={handleMenu}>
                    CONTACT
                </Link>
            </div> : ""}
        </nav>
    );
};








export default Navbar;