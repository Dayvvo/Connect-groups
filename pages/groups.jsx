import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {BiCodeAlt,} from 'react-icons/bi'
import {RiHeartsFill} from 'react-icons/ri'
import {GiClapperboard} from 'react-icons/gi'
import {HiOutlineLightBulb} from 'react-icons/hi'
import Link from 'next/link'

const Gallery = ({className})=>{
    return(
        <>
            <Navbar/>
            <div className={`nav-offset witeBg ` + className}>

                <div className="flexAl align techies">
                    <h1 className="wyt">Connect groups</h1>            
                </div>

                <div className='oneM align'>

                    <h1 className="flexC orange">Connect Groups</h1>   

                    <div className="nestM center midW headerBrief" style={{fontSize:'18px'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id explicabo necessitatibus eaque. Mollitia nam ratione ipsam at adipisci 
                        sit ullam magnam inventore commodi! Eos aliquid enim vero impedit culpa! Eum.
                    </div>         

                    <div className="oneM grid4">

                        <div className="paddBoth card blueC">
                            <div className="flex">
                                <div className='circle orangebg fullFlex'>
                                    <div className="absolute">v</div>
                                    <BiCodeAlt/>
                                </div>
                            </div>

                            <h4 className='smallM minHeader'> Techies </h4>
                            <div className="nestM small1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, necessitatibus? 
                                Omnis impedit eveniet, magnam similique eius 
                                error quisquam at quod ipsam quis accusantium! Rem iste in voluptatum officia illum atque.
                            </div>
                            <div className="middleM orange"> <Link href=''>View</Link> </div>
                        </div>

                        <div className="paddBoth card blueC">
                            <div className="flex">
                                <div className='circle orangebg fullFlex'>
                                    <div className="absolute">v</div>
                                    <RiHeartsFill/>
                                </div>
                            </div>

                            <h4 className='smallM minHeader'> Love Nest </h4>
                            <div className="nestM small1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, necessitatibus? 
                                Omnis impedit eveniet, magnam similique eius 
                                error quisquam at quod ipsam quis accusantium! Rem iste in voluptatum officia illum atque.
                            </div>
                            <div className="middleM orange"> <Link href=''>View</Link> </div>
                        </div>

                        <div className="paddBoth card blueC">
                            <div className="flex">
                                <div className='circle orangebg fullFlex'>
                                    <div className="absolute">v</div>
                                    <GiClapperboard/>
                                </div>
                            </div>

                            <h4 className='smallM minHeader'> Creatives </h4>
                            <div className="nestM small1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, necessitatibus? 
                                Omnis impedit eveniet, magnam similique eius 
                                error quisquam at quod ipsam quis accusantium! Rem iste in voluptatum officia illum atque.
                            </div>
                            <div className="middleM orange"> <Link href=''>View</Link> </div>
                        </div>



                    </div>

                    <div className="section secondGrid">
    
                        <div className="paddBoth card blueC">
                            <div className="flex">
                                <div className='circle orangebg fullFlex'>
                                    <div className="absolute">v</div>
                                    <HiOutlineLightBulb/>
                                </div>
                            </div>

                            <h4 className='smallM minHeader'> Masterminds </h4>
                            <div className="nestM small1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, necessitatibus? 
                                Omnis impedit eveniet, magnam similique eius 
                                error quisquam at quod ipsam quis accusantium! Rem iste in voluptatum officia illum atque.
                            </div>
                            <div className="middleM orange"> <Link href=''>View</Link> </div>
                        </div>


                        <div className="paddBoth card blueC">
                            <div className="flex">
                                <div className='circle orangebg fullFlex'>
                                    <div className="absolute">v</div>
                                   <img src="/target_repo.svg" alt="" style={{width:'30px'}} />
                                </div>
                            </div>

                            <h4 className='smallM minHeader'> Tycoons </h4>
                            <div className="nestM small1">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, necessitatibus? 
                                Omnis impedit eveniet, magnam similique eius 
                                error quisquam at quod ipsam quis accusantium! Rem iste in voluptatum officia illum atque.
                            </div>
                            <div className="middleM orange"> <Link href=''>View</Link> </div>
                        </div>



                        <div className="paddBoth card register_for fullFlex blueC">
                            <div>
                                <h3 className="minHeader blueC midHe" style={{maxWidth:'240px',lineHeight:'35px'}}>Register for August Semeseter</h3>

                                <div className="flexC middleM">
                                    <button className='submit-btnn smallP orangebg'>Register</button>

                                </div>

                            </div>

                        </div>



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
        background-image: url('/groups.png/');
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

    .card{
        border: 0.5px solid #0A275B;
        box-sizing: border-box;
        border-radius: 8px;

        .absolute{
            top: 0x;
            left:unset;
            right: 9px;
            font-size: 1px;
            width: 9px;
            height: 9px;
            border-radius: 50%;

            color: transparent;
            background:#0A275B;
        }

        padding:1.2em;
        .circle{
            padding:1.2em;
            position: relative;

            svg{
                font-size: 30px;
            }
        }
    }


    .secondGrid{
        display:grid;
        grid-column-gap: 1.5em;

        @media(min-width:700px){
            grid-template-columns:1fr 1fr 2fr;

        }
        grid-row-gap: 1.5em;

    }




`
