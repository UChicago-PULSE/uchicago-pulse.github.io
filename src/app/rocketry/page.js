import styles from '@/app/rocketry/page.module.css';
import Inverted from '../components/invertedTexts';
import Image from 'next/image';
import rocketry_banner from '../../../public/rocketry/rocketrybanner.jpg';

import hpr1 from '../../../public/rocketry/hprrocketry1.jpg';
import hpr2 from '../../../public/rocketry/hprrocketry2.jpg';
import hpr3 from '../../../public/rocketry/hprrocketry3.jpg';
import hpr4 from '../../../public/rocketry/hprrocketry4.jpg';
import hpr5 from '../../../public/rocketry/hprrocketry5.jpg';

import sac1 from '../../../public/rocketry/sacrocketry1.png'

function Rocketry() {

    let inverted_data = [
        {
            title: "High Power Rocketry",
            image: [hpr2, hpr1, hpr3, hpr4, hpr5],
            subTitle: "",
            description: "In partnership with the Northern Illinois Rocketry Association (NIRA) and the National Association of Rocketry (NAR), students learn about, design, and build L1 and L2 class high-powered rockets. Students then test fly these rockets at launch sites across rural Illinois, where they receive a certification upon completion. This dually enables them to buy and fly larger rocket engines while providing the invaluable pedigree to be applied to other rocketry laboratory projects.",
            imageWidth: "",
            special: true,
            left: true,
        }, 
        {
            title: "Spaceport America",
            image: sac1,
            subTitle: "",
            description: "From June 9 - 14th 2025, UCSP will be competing in the intercollegiate rocketry competition in the 10k off the shelf category. The team is split into three primary subteams: Payload, Avionics/Recovery, and Structure/Propulsion. Under the guidance of NIRA a L3 class high power rocket will be built for the competition.",
            imageWidth: "",
            special: false,
            left: false,
        }, 
      ]

    return (
        <>
            <div className={styles.rocketry}>
                <h1 className={styles.title}>Rocketry Laboratory</h1>
                <Image
                    src={rocketry_banner}
                    alt="UCSP Rocketry 2024"
                    className={styles.banner}
                ></Image>

                <p className={styles.subDescription}>
                The UChicago Space Program’s Rocketry Laboratory is split into two projects: High Powered Rocketry certification and Spaceport America Cup Launch Competition. Developed and led entirely by UChicago undergraduates with advisors from the Northern Illinois Rocketry Association and alums, this pipeline ensures students gain the hands-on rocketry experience they need to compete competitively in launch competitions. 
                </p>

                <div className={styles.block}></div>
                <div className={styles.block}></div>

                <div className={styles.block} id={styles.spaces} style={{marginTop: '-3rem'}}>
                    <h1 className={styles.subTitle}>Projects</h1>
                    <div className={styles.inverted}>
                        <Inverted data={inverted_data} border={false} imgChange={{width: '200vw', round: '0rem', bold: '800', mbottom: '4rem'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rocketry;