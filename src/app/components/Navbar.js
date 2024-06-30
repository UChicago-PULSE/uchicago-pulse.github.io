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

const Navbar = () => {

    const pathname = usePathname();
    let src_uc = pathname == "/cubesat" ? b_uclogo : uclogo;
    src_uc = pathname == "/rocketry" ? r_uclogo : src_uc; 

    let src_ucphoenix = pathname == "/cubesat" ? b_ucphoenix : ucphoenix;

    let color = pathname == "/cubesat" ? 'white' : 'black';
    color = pathname == "/rocketry" ? 'red' : color; 

    return (
        <div>
            <nav className='navbar'>
                <Link href="/">
                    <Image 
                        className='logo'
                        src={src_uc}
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
                    <Link href="/join" className='navlink'>
                        JOIN
                    </Link>
                </div>
                <Image 
                    className='logo'
                    src={src_ucphoenix}
                    alt="UCPhoenix Logo"
                />
            </nav>
        </div>
    );
};








export default Navbar;