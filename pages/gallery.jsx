import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import InlineFlex from "../components/widgets/inline-flex"
import {MdOutlineArrowForwardIos} from 'react-icons/md'


const Gallery = ({className})=>{
    return(
        <>
            <Navbar/>
            <div className={`nav-offset witeBg ` + className}>

                <div className="flexAl align techies">
                    <h1 className="wyt">Our Gallery</h1>            
                </div>


                <div className='align'>

                    <div className=" sectM grid3">

                        <div className='relative'>
                            <img className='fullW' src="/Rectangle31.png/" alt="" />
                            <div className='fullW fullH fullFlex absolute'>
                                <button className='downloadBtn btnn'>Download</button>
                            </div>
                        </div>

                        <div><img className='fullW' src="/Rectangle3.png/" alt="" /></div>

                        <div><img className='fullW' src="/Rectangle32.png/" alt="" /></div>

                        <div><img className='fullW' src="/Rectangle33.png/" alt="" /></div>

                        <div>
                            <img className='fullW' src="/Rectangle34.png/" alt="" />
                        </div>


                        <div>
                            <img className='fullW' src="/Rectangle37.png/" alt="" />
                        </div>

                        <div>
                            <img className='fullW' src="/Rectangle38.png/" alt="" />
                        </div>


                        <div>
                            <img className='fullW' src="/Rectangle39.png/" alt="" />
                        </div>



                        <div>
                            <img className='fullW' src="/rectangle40.png/" alt="" />
                        </div>


                    </div>

                    <div className="nestM">
                        <InlineFlex className='inlineflexdiv' spacing='1em'>

                            <button className={'orangebg fullflex pgNate'}> 1 </button>
                            <button className={' fullflex pgNate'}> 2 </button>
                            <button className={' fullflex pgNate'}> <MdOutlineArrowForwardIos/> </button>


                        </InlineFlex>
                    </div>
                </div>


            </div>
            <Footer className='footer'/>
        </>
    )
}



export default styled(Gallery)`

    .techies{
        background-size: cover;
        background-image: url('/techies.png/');
        min-height: 450px;

        h1{
            font-size: 40px;
        }
    }


    .grid3{
        img{
            height: 100%;
        }
    }


    .downloadBtn{
        padding:0.8em 1.8em;
        color: white;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 4px;
        &:hover{
            background: var(--orange);
            border: 1px solid var(--orange);
        }
        
    }

    .inlineflexdiv{
        button{
            width: 30px;
            height:30px;
            border-radius: 3px;

            border: 0.5px solid #0A275B;
            background: white;
        }

        .orangebg{
            background: var(--orange);
            border:1px solid var(--orange);
        }
    }



`
