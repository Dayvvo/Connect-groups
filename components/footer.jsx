import styled from "styled-components"
import Link from 'next/link'
import {BsFacebook,BsInstagram} from 'react-icons/bs'

const Footer = ({className})=>{


    return (

        <div className={className+' blueBg align'}>
            
            <div className=''>

                <object id="svg2" className='logo' data="/orange_logo.svg/" type="image/svg+xml"></object>

                <div className="flexBtw footerEl ">
                    <div> <Link href=''>About</Link>  </div>
                    <div> <Link href=''>Groups</Link>  </div>
                    <div> <Link href=''>Gallery</Link>  </div>
                    <div> <Link href=''>Registration</Link>  </div>

                </div>


                <div className="socials flexBtw">
                    <div>
                        <Link href='home'> 
                            <div>
                                <BsFacebook/> 
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link href='about'> 
                            <div> 
                                <BsInstagram/>  
                            </div> 
                        </Link>

                    </div>

                    <div>
                        <Link href='about'> 
                            <div> 
                                <BsInstagram/>  
                            </div> 
                        </Link>

                    </div>




                </div>

            </div>


            

        </div>
    )



}

export default styled(Footer)`

    padding-top:2.5em;
    padding-bottom:2.5em;

    .footerEl{

        @media(min-width:700px){
            min-width: 40%;
        }


        @media(min-width:900px){
            min-width: 38%;
        }

    }

    .socials{
        width: 140px;
        
        svg{
            color:var(--orange);
        }
    }


    #svg2{
        width: 130px;
    
    }

    >div{
        svg{
            font-size:20px;
        }
        @media(max-width:700px){
            .footerEl{
                max-width: 300;
            }
        }

        display: grid;
        grid-row-gap: 1.5em;
        @media(min-width:700px){
            display: flex;
            justify-content: space-between
        }
    }

`


 

