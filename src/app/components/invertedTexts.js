import '@/app/components/invertedTexts.css';
import Image from 'next/image';

function Inverted(props) {
    const imgGreywidth = props.imgChange.width;
    const imgGreyRound = props.imgChange.round;
    console.log(imgGreyRound);
    console.log(imgGreywidth);

    return (
        <>
            <div className={props.border ? 'block' : 'nonblock'} style={{width: props.width}}>
                {
                    props.data.map((each, i) => {
                        return (
                            each.special ? (
                                <div className='seg' key={i}>
                                    <div className={each.left ? "left" : "right"}>
                                        {each.image == "block" ? 
                                            <div className='grid-display'>
                                                <div className='greyBlock' style={{width: '100%', borderRadius: 0, height: '40vh'}}></div> 

                                                <div className='grid-row'>
                                                    <div className='greyBlock' style={{width: '60%', borderRadius: 0}}></div> 
                                                    <div className='greyBlock' style={{width: '60%', borderRadius: 0}}></div> 
                                                </div>

                                                <div className='grid-row'>
                                                    <div className='greyBlock' style={{width: '60%', borderRadius: 0}}></div> 
                                                    <div className='greyBlock' style={{width: '60%', borderRadius: 0}}></div> 
                                                </div>
                                            </div>
                                            :
                                            <Image 
                                        
                                            />
                                        }

                                        <div className='text' style={{marginLeft: '2rem'}}>
                                            <p className='segtitle' style={{fontWeight: props.imgChange.bold, marginBottom: props.imgChange.mbottom}}>{each.title}</p>
                                            {each.subTitle ? 
                                                <p className='segsub' style={{fontSize: props.imgChange.subtitleSize, fontStyle: props.imgChange.subtitleIt, fontWeight: props.imgChange.subWeight, whiteSpace:'pre-line'}}>{each.subTitle}</p> 
                                                :
                                                <></>
                                            }
                                            {each.description ? 
                                                <p className='segdescrip' style={{marginTop:props.imgChange.detailTop}}>{each.description}</p> 
                                                :
                                                <></>
                                            }

                                            <p className='launchT'>Upcoming Launch Schedule</p>
                                            <p className='each'>MM/DD/YYYY Time @ LaunchLocation</p>
                                            <p className='each'>MM/DD/YYYY Time @ LaunchLocation</p>
                                            <p className='each'>MM/DD/YYYY Time @ LaunchLocation</p>
                                        </div>
                                    </div>
                                </div>


                            ) : ( 
                                // if not special 
                                <div className='seg' key={i}>
                                    <div className={each.left ? "left" : "right"}>
                                        {each.image == "block" ? 
                                            <div className='greyBlock' style={{width: imgGreywidth, borderRadius: imgGreyRound}}></div> 
                                            :
                                            <Image 
                                        
                                            />
                                        }

                                        <div className='text'>
                                            <p className='segtitle' style={{fontWeight: props.imgChange.bold, marginBottom: props.imgChange.mbottom}}>{each.title}</p>
                                            {each.subTitle ? 
                                                <p className='segsub' style={{fontSize: props.imgChange.subtitleSize, fontStyle: props.imgChange.subtitleIt, fontWeight: props.imgChange.subWeight, whiteSpace:'pre-line'}}>{each.subTitle}</p> 
                                                :
                                                <></>
                                            }
                                            {each.description ? 
                                                <p className='segdescrip' style={{marginTop:props.imgChange.detailTop}}>{each.description}</p> 
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