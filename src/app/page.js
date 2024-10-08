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

import ucw_carnival from '../../public/ucwsteamcarnival.jpg';
import urs from '../../public/urs.png';
import sedsspaceforall from '../../public/sedsspaceforall.png';

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
        link: "/pulse-a"
    }, 
    {
        page: "home",
        title: "High Power Rocketry",
        img: highPowerimg, 
        backImg: highPowerback,
        subtitle: "",
        details: "",
        link: "/rocketry"
    }, 
    {
        page: "home",
        title: "Spaceport America",
        img: spacePortimg, 
        backImg: spacePortback,
        subtitle: "",
        details: "",
        link: "/rocketry"
    }, 
  ]

  let inverted_data = [
    {
        title: "UCW Campus STEAM Carnival",
        image: ucw_carnival,
        subTitle: "",
        description: "On April 18th, members of UCSP hosted a booth at the Woodlawn Campus of the University of Chicago Charter Schools. There, we presented and engaged with 6th-12th grade students about the various aspects of PULSE-A’s mission, engaging with students to familiarize and inspire them towards considering STEAM education.",
        imageWidth: "",
        imageHeight: "200px",
        special: false,
        left: true,
    }, 
    {
        title: "UChicago Research Symposium",
        image: urs,
        subTitle: "",
        description: "Two groups of PULSE-A members presented at the 2024 Undergraduate Research Symposium hosted by the UChicago College Center for Research and Fellowships. Seth Knights, Vincent Redwine, and Graydon Schulze-Kalt, presented on the Optical Payload and the mission ConOps. Logan Hanssler, Juan Prieto, and Alex Dennis, presented on the Optical Ground Station. ",
        imageWidth: "",
        imageHeight: "200px",
        special: false,
        left: false,
    }, 
    {
        title: "SEDS-USA Space for All Challenge",
        image: sedsspaceforall,
        subTitle: "",
        description: "We are excited to share that PULSE-A won second place in the challenge, earning $7.5k towards R&D for the project. As part of the challenge, UCSP will further our outreach efforts on the south side of Chicago, using our telescope to hold observation nights and host space-related events.",
        imageWidth: "",
        imageHeight: 200,
        special: false,
        left: true,
    }
  ]

  return (
    <>
        <div className={styles.title}>
            <h1 className={`${styles.main} ${pop.className}`}>PULSE-A</h1>
            <h4 className={styles.sub}>UCHICAGO'S FIRST CUBESAT</h4>
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
                We are The University of Chicago’s premier undergraduate aerospace organization, dedicated to promoting space education and engineering both within the University and beyond. As a chapter of the Students for the Exploration and Development of Space (SEDS), we believe that providing students with an opportunity to work on interdisciplinary, hands-on, and team-based projects is key to fostering the development of future leaders in and around the space industry. 
            </p>
            <h1 className={styles.cardTitle}>Current Projects</h1>
            <Cards cards={card_data}/>
            <div className={styles.line}></div>

            <h1 className={styles.cardTitle}>Outreach</h1>
            <div className={styles.details}>
                <p>Community outreach is core to UCSP's mission.</p>
                <p style={{marginTop:'-1.6rem'}}>Read about our recent events below.</p>
            </div>
            <Inverted data={inverted_data} border={true} more={true} imgHeight={400} imgStyles={{aspectRatio: '4/3', }} imgChange={{width: '80vw', round: '2rem'}}/>
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