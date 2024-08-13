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
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.",
            link: false
        },
      ]
    let inverted_data = [
        {
            title: "CubeSat Lab",
            image: "block",
            subTitle: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
            imageWidth: "",
            special: false,
            left: true,
        }, 
        {
            title: "Zhong Lab",
            image: "block",
            subTitle: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
            imageWidth: "",
            special: false,
            left: true,
        }, 
        {
            title: "Michael Lembeck",
            image: "block",
            subTitle: "Clinical Associate Professor in Aerospace Engineering\r\n University of Illinois at Urbana Champaign",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
                Sed  dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas
                eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.</p>

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