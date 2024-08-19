'use client'
import Cards from '@/app/components/cards';
import Inverted from '@/app/components/invertedTexts';
import styles from '@/app/page.module.css';
import Image from 'next/image';
import pulseAimg from '../../public/PULSE-A_PATCH.svg';
import home_background from '../../public/PULSE_Render_enlarged2.png';
import highPowerback from '../../public/highPowerback.svg';
import highPowerimg from '../../public/highpower.svg';
import pulseAback from '../../public/pulseAback.svg';
import spacePortimg from '../../public/spaceport.svg';
import spacePortback from '../../public/spaceportback.svg';
import { Poppins } from 'next/font/google';

const pop = Poppins({ subsets: ['latin'], weight: ['600', '700'], style: ['italic', 'normal']});


export default function Home() {

  let card_data = [
    {  
        page: "home",
        title: "PULSE-A Cubesat",
        img: pulseAimg, 
        backImg: pulseAback,
        subtitle: "",
        details: "",
        link: false
    }, 
    {
        page: "home",
        title: "High Power Rocketry",
        img: highPowerimg, 
        backImg: highPowerback,
        subtitle: "",
        details: "",
        link: false
    }, 
    {
        page: "home",
        title: "Spaceport America",
        img: spacePortimg, 
        backImg: spacePortback,
        subtitle: "",
        details: "",
        link: false
    }, 
  ]

  let inverted_data = [
    {
        title: "Event Name 1",
        image: "block",
        subTitle: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
        imageWidth: "",
        special: false,
        left: true,
    }, 
    {
        title: "Event Name 2",
        image: "block",
        subTitle: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
        imageWidth: "",
        special: false,
        left: false,
    }, 
    {
        title: "Event Name 3",
        image: "block",
        subTitle: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
        imageWidth: "",
        special: false,
        left: true,
    }
  ]

  return (
    <>
        <div className={styles.title}>
            <h1 className={`${styles.main} ${pop.className}`}>PULSE-A</h1>
            <h4 className={styles.sub}>UCHICAGO'S FIRST SATELLITE</h4>
            <button className={styles.button}>^</button>
            <div className={styles.imgContainer}>
                <Image 
                    src = {home_background}
                    alt = "Satellite"
                    className={styles.backImg}
                />
            </div>
            <div className={styles.titleDiv}>
                <div className={styles.titlesRight}>
                    <div>
                        <h1 className={`${styles.subTitle} ${pop.className}`}>We are the</h1>
                        <h1 className={`${styles.subMain} ${pop.className}`}>UChicago Space Program</h1>
                    </div>
                    <h1 className={`${styles.subTwo} ${pop.className}`}>A SEDS Chapter</h1>
                </div>
            </div>
            <div className={styles.line}></div>
            <p className={styles.para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <h1 className={styles.cardTitle}>Current Projects</h1>
            <Cards cards={card_data}/>
            <div className={styles.line}></div>

            <h1 className={styles.cardTitle}>Outreach</h1>
            <div className={styles.details}>
                <p>Community outreach is core to UCSP's mission.</p>
                <p style={{marginTop:'-1.6rem'}}>Read about our recent events below.</p>
            </div>
            <Inverted data={inverted_data} border={true} more={true} imgChange={{width: '80vw', round: '2rem'}}/>
        </div>
    </>
  );
}


// For the cubesat cards: 
// {
//     page: "cubesat",
//     title: "PULSE-A",
//     img: false, 
//     backImg: false,
//     subtitle: "Launching NET 2026",
//     details: "PULSE-A is a 2U CubeSat intended to demonstrate 10 Mbps polarization-modulated space-to-ground optical communications.",
//     link: true
// },     
// {
//     page: "cubesat",
//     title: "PULSE-A",
//     img: false, 
//     backImg: false,
//     subtitle: "Launching NET 2026",
//     details: "PULSE-A is a 2U CubeSat intended to demonstrate 10 Mbps polarization-modulated space-to-ground optical communications.",
//     link: true
// }