import '@/app/components/invertedTexts.css';
import Image from 'next/image';

function Inverted(props) {
    return (
        <>
            <div className={props.border ? 'block' : 'nonblock'}>
                {
                    props.data.map((each, i) => {
                        return (
                            each.special ? (
                                <div className='seg' key={i}>
                                    <div className={each.left ? "left" : "right"}>
                                        <p>{each.title}</p>
                                    </div>
                                </div>
                            ) : ( 
                                // if not special 
                                <div className='seg' key={i}>
                                    <div className={each.left ? "left" : "right"}>
                                        {each.image == "block" ? 
                                            <div className='greyBlock'></div> 
                                            :
                                            <Image 
                                        
                                            />
                                        }

                                        <div className='text'>
                                            <p className='segtitle'>{each.title}</p>
                                            {each.subTitle ? 
                                                <p className='segsub'>{each.subTitle}</p> 
                                                :
                                                <></>
                                            }
                                            {each.description ? 
                                                <p className='segdescrip'>{each.description}</p> 
                                                :
                                                <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    })
                }
                <a href="" className='linkend'>{props.more ? "Read previous.." : ""}</a> 
            </div>
        </>
    )
}

export default Inverted;