import styles from '@/app/about/page.module.css';
import '@/app/styles/globals.css';
import Image from 'next/image';
import argonneLab from '../../../public/Argonnelablogo.svg';
import W from '../../../public/W.svg';
import profile from '../../../public/about/profile.svg';
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
import swab from '../../../public/swab.webp';
import Members from '../components/members';

export default async function About() {

    let officers = [
        {
            name: "Lucas Glickman",
            role: "President",
            sect: "ucsp"
        },
        {
            name: "Graydon Schulze-Kalt",
            role: "Vice President",
            sect: "ucsp"
        },
        {
            name: "Sebastien Ludwig",
            role: "Comms Head",
            sect: "ucsp"
        }, 
        {
            name: "Vidya Suri",
            role: "Operations Head",
            sect: "ucsp"
        }, 
        {
            name: "Geralyn Chong",
            role: "Webmaster",
            sect: "ucsp"
        }, 
        {
            name: "Joseph Ferrari",
            role: "SAC Directior",
            sect: "rocketry"
        },
        {
            name: "Zane Ebel",
            role: "HPR Director",
            sect: "rocketry"
        },
        {
            name: "Unknown",
            role: "Fudning Head",
            sect: "rocketry"
        }, 
        {
            name: "Logan Hanssler",
            role: "PULSE-A Director",
            sect: "cubesat"
        },
        {
            name: "Seth Knights",
            role: "PULSE-A Chief Eng.",
            sect: "cubesat"
        },
        {
            name: "Parth Bhandari",
            role: "PULSE-A Funding Head",
            sect: "cubesat"
        }
    ]

    const api_key = 'AIzaSyD9OqzyCeZAZ0bgmNFjUaFsvnyFaoOycRU';
    const spreadsheetId = '1qVzwNK-eEVm0lt8zsQQx6KHtbB8b5Na_8X-H4MCM9s0';
    const spreadsheetName = 'members';

    const members = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${spreadsheetName}?key=${api_key}`, {cache: `force-cache`}).then((res) => {return res.json();});

    return (
        <>
            <div className={styles.about}>
                <h1 className={styles.title}>About</h1>
                <p className={styles.subDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <h1 className={styles.title} style={{marginTop: '10rem'}}>Officers</h1>
                <div style={{marginBottom: '10rem'}} className={styles.grid}>
                    <div className={styles.separator} style={{marginBottom:'-2vh',fontWeight:'100'}}>UCSP</div>
                    <div className={styles.row1}>
                        {officers.map((memDict, i) => {
                            return(
                                memDict.sect == "ucsp" ? 
                                    (<div key={i} className={styles.memCard}>
                                        <Image 
                                            src={profile}
                                            alt="profile"
                                            className={styles.pImage}
                                        />
                                        <p className={styles.mName}>{memDict.name}</p>
                                        <p className={styles.mRole}>{memDict.role}</p>
                                    </div>) : 
                                    (
                                        <div key={i}></div>
                                    )
                            )}
                        )}
                    </div>
                    <div className={styles.row2}>
                        <div style={{width: '48%', alignItems:'center', marginTop:'2rem'}}>
                            <div className={styles.separator} style={{marginBottom:'-3vh', fontWeight:'100'}}>Rocketry Lab</div>
                            <div className={styles.colrow1}>
                                {officers.map((memDict, i) => {
                                        return(
                                            memDict.sect == "rocketry" ? 
                                                (<div key={i} className={styles.memCard}>
                                                    <Image 
                                                        src={profile}
                                                        alt="profile"
                                                        className={styles.pImage}
                                                    />
                                                    <p className={styles.mName}>{memDict.name}</p>
                                                    <p className={styles.mRole}>{memDict.role}</p>
                                                </div>) : 
                                                (
                                                    <div key={i}></div>
                                                )
                                        )
                                    }
                                )}
                            </div>
                        </div>
                        <div style={{width: '48%', alignItems:'center', marginTop:'2rem'}}>
                            <div className={styles.separator} style={{marginBottom:'-3vh', fontWeight:'100'}}>CubeSat Lab</div>
                            <div className={styles.colrow2}>
                                {officers.map((memDict, i) => {
                                    return(
                                        memDict.sect == "cubesat" ? 
                                            (<div key={i} className={styles.memCard}>
                                                <Image 
                                                    src={profile}
                                                    alt="profile"
                                                    className={styles.pImage}
                                                />
                                                <p className={styles.mName}>{memDict.name}</p>
                                                <p className={styles.mRole}>{memDict.role}</p>
                                            </div>) : 
                                            (
                                                <div key={i}></div>
                                            )
                                    )}
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className={styles.Mtitle}>Members</h1>

                {/* <div className={styles.bigTable}>
                    <table className={styles.table}>

                        <tr className={styles.tr_header} id={styles.headRow}>
                            <th className={styles.td}>Name</th>
                            <th className={styles.td}>Project, Team, and Role</th>
                            <th className={styles.td} style={{textAlign:'right'}}>Links</th>
                        </tr>
                    </table>

                    <div style={{height:'50vh', overflowY:'auto', paddingBottom:'1.8em'}}>
                        <table className={styles.table}>
                            
                            {members.values.map((each, i) => {
                                    return(
                                        i != 0 ? (
                                            // style={{borderBottom: 'solid white 1px', borderLeft: 'solid white 1px', borderRight: 'solid white 1px'}}
                                            <tr key={i} id={styles.row}>
                                                {each[0] ? (
                                                    <td className={styles.td} id={styles.tdName}>{each[0]}</td>
                                                ): (
                                                    <></>
                                                )} 
                                                {each[3] ? (
                                                    <td className={styles.td}>
                                                        PULSE-A: {each[3]} {each[4]}
                                                    </td>
                                                ): each[4] ? (
                                                    <td className={styles.td}>
                                                        PUSLE-A: {each[4]}
                                                    </td>
                                                ): each[5] ? (
                                                    <td className={styles.td}>
                                                        Rocketry: {each[5]} {each[6]}
                                                    </td>
                                                ):(
                                                    <td className={styles.td}>
                                                        Member
                                                    </td>
                                                )} 
                                                <td className={styles.td} id={styles.memLinks} style={{textAlign:'right'}}>
                                                    <Image 
                                                        src={github}
                                                        alt="Linkedin"
                                                        className={styles.memLogo}
                                                    />
                                                    <Image 
                                                        src={linkedin}
                                                        alt="Linkedin"
                                                        className={styles.memLogo}
                                                    />
                                                </td>
                                            </tr>)
                                        :
                                            (<tr key={i}></tr>)
                                    )
                                }
                            )}

                        </table>
                    </div>
                </div> */}

                <Members />

                <div className={styles.outcomes} style={{marginTop:'5em'}}>
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

                    <div className={styles.tr_image}>
                        <div className={styles.td}><Image src={argonneLab}/></div>
                        <div className={styles.td}><Image src={fermi}/></div>
                    </div>

                    <div className={styles.tr_image} style={{marginBottom: '5rem'}}>
                        <div className={styles.td}><Image src={swab}/></div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
};