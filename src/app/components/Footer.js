'use client'
import '@/app/components/footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ucphoenix from '../../../public/UChicago_PhoenixWhite.svg';
import b_ucphoenix from '../../../public/UChicago_Phoenix_Solid_1Color_White_RGB.svg';
import r_uclogo from '../../../public/redUC.svg';
// import uclogo1 from '../../../public/ucsp_whiteonblack-1.svg';
import uclogo from '../../../public/ucsp_whiteonblack.svg';
import b_uclogo from '../../../public/uscp_blackonwhite.svg';

import x from '../../../public/footer/Xlogo.svg';
import github from '../../../public/footer/githublogo.svg';
import insta from '../../../public/footer/instagramlogo.svg';
import linkedin from '../../../public/footer/linkedinlogo.svg';

const Footer = () => {

    const pathname = usePathname();
    let src_uc = pathname == "/cubesat" ? b_uclogo : uclogo;
    src_uc = pathname == "/rocketry" ? r_uclogo : src_uc; 

    let src_ucphoenix = pathname == "/cubesat" ? b_ucphoenix : ucphoenix;

    let color = pathname == "/cubesat" ? 'white' : 'black';
    color = pathname == "/rocketry" ? 'red' : color; 

    return (
        <div>
            <footer className='footer'>
                <div className='flinks' id={color}>
                    <Link href="/about" className='footlink'>
                        ABOUT
                    </Link>
                    <Link href='/cubesat' className='footlink'>
                        CUBESAT
                    </Link>
                    <Link href='/rocketry' className='footlink'>
                        ROCKETRY
                    </Link>
                    <Link href="/">
                        <Image 
                            className='flogo'
                            src={b_uclogo}
                            alt="UCSP Logo"
                        />
                    </Link>
                    <Link href="/join" className='footlink'>
                        JOIN
                    </Link>
                    <Link href="/pulse-a" className='footlink'>
                        PULSE-A
                    </Link>
                    <Link href="/pulse-a" className='footlink'>
                        CONTACT
                    </Link>
                </div>
                <div className='flogos'>
                    <Link href="/pulse-a" className='footlink'>
                        <Image
                            src={github}
                            className='logo'
                            alt='github'
                            width={30}
                        />
                    </Link>
                    <Link href="/pulse-a" className='footlink'>
                        <Image
                            src={insta}
                            className='logo'
                            alt='insta'
                            width={30}
                        />
                    </Link>
                    <Link href="/pulse-a" className='footlink'>
                        <Image
                            src={x}
                            className='logo'
                            alt='X'
                            width={30}
                        />
                    </Link>
                    <Link href="/pulse-a" className='footlink'>
                        <Image
                            src={linkedin}
                            className='logo'
                            alt='linkedin'
                            width={30}
                        />
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;