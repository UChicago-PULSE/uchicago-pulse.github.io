import styles from '@/app/about/page.module.css';
import Image from 'next/image';
import argonneLab from '../../../public/Argonnelablogo.svg';
import W from '../../../public/W.svg';
import ball from '../../../public/ballAero.svg';
import blueOr from '../../../public/blueOrigin.svg';
import bof from '../../../public/bof.svg';
import caltech from '../../../public/caltech.svg';
import fermi from '../../../public/fermilab.svg';
import jpl from '../../../public/jpl.svg';
import nasa from '../../../public/nasa.svg';
import pgs from '../../../public/pgs.svg';
import spaceDy from '../../../public/spaceDy.svg';
import spacex from '../../../public/spaceX.svg';

function About() {
    return (
        <>
            <div className={styles.about}>
                <h1 className={styles.title}>About</h1>
                <p className={styles.subDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <h1 className={styles.title} style={{marginTop: '10rem'}}>Officers</h1>
                <div style={{marginBottom: '10rem'}}></div>

                <h1 className={styles.Mtitle}>Members</h1>

                <div className={styles.table}>
                    {/* Header of the table */}
                    <div className={styles.tr_header}>
                        <div className={styles.td}>Name</div>
                        <div className={styles.td}>Project, Team, and Role</div>
                        <div className={styles.td}>Links</div>
                    </div>
                    {/* first row of the body */}
                    <div className={styles.tr} style={{marginTop: '2rem', borderTop: 'solid white 4px', borderBottom: 'solid white 1px', borderLeft: 'solid white 1px', borderRight: 'solid white 1px'}}>
                        <div className={styles.td}>Example Name 1</div>
                        <div className={styles.td} style={{marginLeft:'-8.5rem'}}>Example Role 1</div>
                        <div className={styles.td}>Example Link 1</div>
                    </div>
                    {/* body of the table */}
                    <div className={styles.tr} style={{borderBottom: 'solid white 1px', borderLeft: 'solid white 1px', borderRight: 'solid white 1px'}}>
                        <div className={styles.td}>Example Name 1</div>
                        <div className={styles.td} style={{marginLeft:'-8.5rem'}}>Example Role 1</div>
                        <div className={styles.td}>Example Link 1</div>
                    </div>
                </div>

                <div className={styles.outcomes}>
                    <h1 className={styles.Mtitle}>Outcomes</h1>
                    <p className={styles.msub}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>

                    <div className={styles.table} style={{width:'90%'}}>
                    {/* first row of the body */}
                    <div className={styles.tr_image} style={{marginTop: '2rem'}}>
                        <div className={styles.td}><Image src={jpl}/></div>
                        <div className={styles.td} style={{marginLeft:'-8.5rem'}}><Image src={nasa}/></div>
                        <div className={styles.td}><Image src={blueOr}/></div>
                    </div>
                    {/* body of the table */}
                    <div className={styles.tr_image}>
                        <div className={styles.td}><Image src={spacex}/></div>
                    </div>

                    <div className={styles.tr_image}>
                        <div className={styles.td}><Image src={ball}/></div>
                        <div className={styles.td}><Image src={W}/></div>
                        <div className={styles.td}><Image src={bof}/></div>
                        <div className={styles.td}><Image src={pgs}/></div>
                    </div>

                    <div className={styles.tr_image}>
                        <div className={styles.td}><Image src={spaceDy}/></div>
                        <div className={styles.td}><Image src={caltech}/></div>
                    </div>

                    <div className={styles.tr_image} style={{marginBottom: '5rem'}}>
                        <div className={styles.td}><Image src={argonneLab}/></div>
                        <div className={styles.td}><Image src={fermi}/></div>
                    </div>
                </div>
                </div>

            </div>
        </>
    )
}

export default About;