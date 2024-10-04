'use client'
import styles from '@/app/cubesat/page.module.css';
import { useEffect, useState } from 'react';
import Cards from '../components/cards';
import Inverted from '../components/invertedTexts';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

function CubeSat() {

    let card_data = 
    [
        {  
            page: "cubesat",
            title: "PULSE-A",
            img: "", 
            backImg: "",
            subtitle: "Launching NET 2026",
            details: "PULSE-A is a 2U CubeSat intended to demonstrate 10 Mbps polarization-modulated space-to-ground optical communications.",
            link: true
        }, 
        {  
            page: "cubesat",
            title: "PULSE-Q",
            img: "", 
            backImg: "",
            subtitle: "Early Concept Development",
            details: "PULSE-Q is the future of UCSP’s CubeSat Laboratory. The intended mission objective is to use polarization of light to encrypt data streams.",
            link: false
        },
      ]
    let inverted_data = [
        {
            title: "CubeSat Lab",
            image: "block",
            subTitle: "",
            description: "Thanks to the generosity of the UChicago Department of Physics, the PULSE-A team has an official CubeSat Laboratory workspace in the Kersten Physics Teaching Center. The Cubesat Laboratory is the first laboratory managed entirely by undergraduates at the University of Chicago, representing a huge milestone for UCSP and the University in providing opportunities to undergraduates.",
            imageWidth: "",
            special: false,
            left: true,
        }, 
        {
            title: "Zhong Lab",
            image: "block",
            subTitle: "",
            description: "The PULSE-A Payload department has been utilizing the Zhong Lab in LL2 of Eckhardt Research Center for the development and testing of our payload system, thanks to our advisor Prof. Tian Zhong. As part of this arrangement, PULSE-A can use loaned optical hardware from the lab and lab funds to acquire equipment useful to both the Zhong lab’s research and our own.",
            imageWidth: "",
            special: false,
            left: false,
        }, 
      ]
    let inverted_ad =
    [
        {
            title: "Tian Zhong",
            image: "block",
            subTitle: 'Assistant Professor of Molecular Engineering\r\nUniversity of Chicago, Pritzker School of Molecular Engineering',
            description: "Tian Zhong’s research focuses on developing enabling nanophotonic and molecular technologies for building an efficient, global-scale Quantum Internet. As a primary advisor to the PULSE-A Payload Department, Professor Zhong has been indispensable in our understanding, development, and testing of the CubeSat’s optical payload. We are incredibly grateful for our partnership with the Zhong Lab in the Eckhardt Research Center.",
            imageWidth: "",
            special: false,
            left: true,
        }, 
        {
            title: "Michael Lembeck",
            image: "block",
            subTitle: "Clinical Associate Professor in Aerospace Engineering\r\n University of Illinois at Urbana Champaign",
            description: "Dr. Lembeck is a Clinical Associate Professor of Aerospace Engineering at UIUC and the head of the Laboratory for Advanced Space Sciences at Illinois (LASSI). As Requirements Division Director for the Exploration Systems Mission Directorate at NASA, Dr. Lembeck managed the development of requirements for the Constellation/Orion program. Dr. Lembeck’s experience has been invaluable towards our development of PULSE-A’s Systems Requirements across our engineering departments.",
            imageWidth: "",
            special: false,
            left: false,
        }, 
    ]

    const size = useWindowSize();

    return (
        <>
            <div className={styles.cubesat}>
                <h1 className={styles.title}>CubeSat Laboratory</h1>
                <div className={styles.greyBlock}></div> 

                <p className={styles.subDescription}>
                The UChicago Space Program’s CubeSat Laboratory is currently centered around the PULSE-A mission. Developed by UCSP undergraduates, this entirely student led initiative intends to demonstrate 10 Mbps polarization-modulated space-to-ground optical communications in a 3U CubeSat form factor. The mission has received endorsement and launch support from NASA through the CubeSat Launch Initiative (CSLI).</p>

                <div className={styles.block}></div>

                <div className={styles.block} id={styles.spaces}>
                    <h1 className={styles.subTitle}>Our Spaces</h1>
                    <div className={styles.inverted}>
                        <Inverted data={inverted_data} border={false} width='100vw' imgChange={{width: '180vw', round: '0rem', bold: '700', mbottom: '4rem'}}/>
                    </div>
                </div>

                <div className={styles.block} style={{marginTop: '-2rem'}}>
                    <h1 className={styles.subTitle}>Projects</h1>
                    <Cards cards={card_data} grid={true} />
                </div>

                <div className={styles.block} style={{marginTop: '3rem'}}>
                    <h1 className={styles.subTitle}>Advisors</h1>
                    {size.width <= 1300 ? 
                        size.width <= 768 ? 
                        <Inverted data={inverted_ad} width='90vw' imgChange={{width: '40vw', round: '1rem', bold: '500', mbottom: '-0.3rem', detailTop: '1rem', subtitleSize: '1.3rem', subtitleIt: 'italic', subWeight: '300'}}/> 
                        : 
                            <Inverted data={inverted_ad} width='95vw' imgChange={{width: '40vw', round: '1rem', bold: '500', mbottom: '-0.3rem', detailTop: '1rem', subtitleSize: '1.3rem', subtitleIt: 'italic', subWeight: '300'}}/>
                    :
                        <Inverted data={inverted_ad} width='100vw' imgChange={{width: '40vw', round: '1rem', bold: '500', mbottom: '-0.3rem', detailTop: '1rem', subtitleSize: '1.3rem', subtitleIt: 'italic', subWeight: '300'}}/>
                    }
                </div>
            </div>
        </>
    )
}

export default CubeSat;