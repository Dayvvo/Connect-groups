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

                <div class=" align techies flexC">
                    <div>

                        <h1 class="flexC headers middleM orange">Wallpapers</h1>   
                        
                        <div className="nestM center headertext" style={{fontSize:'20px'}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id explicabo necessitatibus eaque. Mollitia nam ratione ipsam at adipisci 
                            sit ullam magnam inventore commodi! Eos aliquid enim vero impedit culpa! Eum.
                        </div>         


                    </div>
                </div>



                <div className='align'>

                    <div className=" sectM grid3">

                        <div className='relative'></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>


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


    .grid3{
        img{
            height: 100%;
        }
        >div{
            background: #E7E7E7;
            border-radius: 4px;
            width: 100%;
            min-height: 280px;
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


    .headertext{

        @media(min-width:700px){
            max-width: 80%;
            margin: auto;
            margin-top: 1em;
        }

    }

`
