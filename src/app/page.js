import styles from '@/app/page.module.css';
import Image from 'next/image';
import home_background from '../../public/back_home.svg';

export default function Home() {
  return (
    <>
        <div className={styles.title}>
            <h1 className={styles.main}>PULSE-A</h1>
            <h4 className={styles.sub}>UChicago's First Satellite</h4>
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
                        <h1 className={styles.subTitle}>We are the</h1>
                        <h1 className={styles.subMain}>UChicago Space Program</h1>
                    </div>
                    <h1 className={styles.subTwo}>A SEDS Chapter</h1>
                </div>
            </div>
            <p className={styles.para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </div>
    </>
  );
}
