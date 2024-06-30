import '@/app/components/cards.css';
import Image from 'next/image';

function Cards (props){
    return (
        <>
            <div className="cards" id={props.grid ? 'grid_gap': ''}>
                {
                    props.cards.map((dict, i) => {
                        return (
                            dict.page == 'home' ? (
                                <div key={i} className="card" >
                                    <Image
                                        src= {dict.backImg}
                                        alt= "background"
                                        style = {{
                                            filter: 'blur(54px)',
                                            objectFit: 'cover',
                                            width: '22vw',
                                        }}
                                        className='backImg'
                                    />
                                    <div className='upper'>
                                        <Image
                                            src={dict.img}
                                            alt="circle Image"
                                            style={{
                                                width: '20vw',
                                            }}
                                            className='topImage'
                                        />
                                        <h2 className='title'>{dict.title}</h2>
                                    </div>
                                </div>  
                            ) : (
                                <div key={i} className="border_card">
                                    <h1 className='ctitle'>{dict.title}</h1>
                                    <h3 className='csubtitle'>{dict.subtitle}</h3>
                                    <p className="details">{dict.details}</p>
                                    {dict.link ? 
                                        <a href="" style={{textDecoration:'underline', fontStyle:'italic', marginBottom: '1rem'}}>
                                            Read More
                                        </a>
                                        :
                                        <></>
                                    }
                                </div>
                            )
                        )
                    })
                }
            </div>
        </>
    )
}

export default Cards; 


                        // <div key={i} style={{ backgroundImage: `url(${dict.backImg.src})`, backgroundSize: 'cover', lightgray: "-111.5px -52px / 163.38% 127.753% no-repeat"}}>
                        //     <div className="card" >
                        //         <h2>{dict.title}</h2>
                        //         <p>{dict.page}</p>
                        //     </div>
                        // </div>