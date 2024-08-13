import styles from '@/app/rocketry/page.module.css';
import Inverted from '../components/invertedTexts';

function Rocketry() {

    let inverted_data = [
        {
            title: "High Power Rocketry",
            image: "block",
            subTitle: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
            imageWidth: "",
            special: true,
            left: true,
        }, 
        {
            title: "Spaceport America",
            image: "block",
            subTitle: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos...",
            imageWidth: "",
            special: false,
            left: false,
        }, 
      ]

    return (
        <>
            <div className={styles.rocketry}>
                <h1 className={styles.title}>Rocketry Laboratory</h1>
                <div className={styles.greyBlock}></div> 

                <p className={styles.subDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. </p>

                <div className={styles.block}></div>
                <div className={styles.block}></div>

                <div className={styles.block} id={styles.spaces} style={{marginTop: '-3rem'}}>
                    <h1 className={styles.subTitle}>Projects</h1>
                    <div className={styles.inverted}>
                        <Inverted data={inverted_data} border={false} width='100vw' imgChange={{width: '200vw', round: '0rem', bold: '800', mbottom: '4rem'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rocketry;