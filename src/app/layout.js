'use client'
import Navbar from '@/app/components/Navbar';
import styles from '@/app/layout.module.css';
import { Outfit } from "next/font/google";
import { usePathname } from 'next/navigation';
import '../app/styles/globals.css';

const inter = Outfit({ subsets: ["latin"] });

export default function Layout({ children }) {

    const pathname = usePathname();
    let color = pathname == "/cubesat" ? 'white' : 'black';
    color = pathname == "/rocketry" ? 'red' : color; 

  return (
    <html lang="en">
      <head>
        <title>UCSP</title> 
      </head>
      <body className={inter.className} id={color}>
        <div className={styles.root} >
            <Navbar/>
            <div>
            {children}
            </div>
        </div>
      </body>
    </html>) 
}

        {/* <div className={styles.header}>
            From layout
            <Link href='/pulse-a/about'>About</Link>
            <Link href='/pulse-a/details'>Details</Link>
        </div> */}
