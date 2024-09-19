'use client'
import Footer from '@/app/components/Footer';
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

    const showAlert = true;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UCSP</title> 
      </head>
      <body className={inter.className} id={color}>
        {showAlert ? 
                <div className={styles.alert}>Site still under construction... 🚀</div> 
            : ''}
        <Navbar/>
        <div className={styles.root} >
            <div>
            {children}
            </div>
        </div>
        <Footer/>
      </body>
    </html>) 
}

