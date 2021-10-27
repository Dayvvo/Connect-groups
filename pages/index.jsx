import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { StyledBall, StyledLine } from "../components/widgets"
import { RiHeartsFill } from "react-icons/ri"
import { BiCodeAlt } from "react-icons/bi"
import { GiClapperboard } from "react-icons/gi"
import Link from 'next/link'
import { HiOutlineLightBulb } from "react-icons/hi"



const Index = ({className})=>{


    return (
        <>
            <Navbar whitenavbar/>

            <div className={className + ' witeBg nav-offset'}>

                <div className="align hero flex  relative">

                    <div className='flex1 flexAl'>

                        <div className='blueC'>
                            <h2 className="header blueC">Lorem ipsum dolor sit amet</h2>

                            <div className="middleM hero-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Officiis fugiat quo debitis ad non cum voluptatem 

                            </div>

                            <div className="section doubleflex" >
                                <div>  
                                    <button className='orangebg herobtn'>Explore</button>
                                </div>

                                <div>  
                                    <button className='herobtn orangeout'>Register</button>
                                </div>


                            </div>
                        </div> 

                        

                    </div>

                    <div className='flex1 landing_page '> 
                        <img src="/hero_2.png/" className='fullW' alt="landing-page" />

                    </div>

                    <StyledBall bg='#2BCCF4' className='absolute balls liteBlue' width='12px' height='12px'  />
                    <StyledBall bg= '#F42B67' className='absolute balls red' width='10px' height='10px'  />
                    <StyledBall bg= '#532BF4' className='absolute balls purple' width='17px' height='17px'  />
                    <StyledBall bg= '#CCF42B' className='absolute balls green' width='10px' height='10px'  />

                    <img src="/elipse-home.svg/" className="elipse absolute" />

                </div>


                <div className="nestM align about_page home_about relative flexC  flexRM">
                    
                    <img src="/circle2.svg/" className='absolute circle2' alt="" />
                    <img src="/elipse_mobile.svg/" className='absolute elipse_mobile' alt="" />

                    <div className="">
                        <h2 className="header blueC center">About us</h2>

                        <div className="nestM flexC">

                            <div className='headText txt'>

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Provident animi deleniti tempore odit, aliquam rerum id natus 
                                pariatur ut officia tenetur corrupti in dignissimos dolores, consequuntur amet sit vel harum!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Similique blanditiis nesciunt perferendis ad corporis quo repudiandae consectetur ducimus 
                                reiciendis ut iste temporibus,cum obcaecati sint harum aliquid exercitationem unde iusto.
                                
                            </div>

                        </div>
                    </div>




                </div>


                <div className='home_about relative long align wytBg '>
                    <StyledBall bg= 'var(--orange)' className='absolute balls red1' width='14px' height='14px'  />
                    <StyledBall bg= '#0A275B' className='absolute balls purple1' width='14px' height='14px'  />

                    <div className="grid4">

                        <div>
                            <h2 className="headBrief blueC">Take a look at some of your groups</h2>

                        </div>


                        <div className="paddBoth card ">
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

                        <div className="paddBoth card ">
                            <div className="flex">
                                <div className='circle orangebg fullFlex'>
                                    <div className="absolute">v</div>
                                    <RiHeartsFill/>
                                </div>
                            </div>

                            <h4 className='smallM minHeader blueC'> Love Nest </h4>
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

                            <h4 className='smallM minHeader blueC'> Creatives </h4>
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



                <div className="relative fullW  home_about align    padB2-5">
                    <StyledBall bg= 'var(--orange)' className='absolute balls red3' width='25px' height='25px'  />
                    <img src="/blue_elipse.svg" alt="" className="blueEl  absolute" />
                    <img src="/orange_elipse.svg" alt="" className="yellowEl absolute" />
                    <div className="coordinators flexC">
                        <div className=''>
                            <h2 className="header center blueC">Meet our Coordinators</h2>
                            <div className='coordinateGrid middleM'>
                                <div>
                                    <img src="/gov.png/" className='fullW' alt="" />
                                    <div className="nestM  midW flexC">Susan Adetola</div>
                                </div>

                                <div className='middle fullFlex'>

                                    <div className=''>a</div>

                                </div>

                                <div>
                                    <img src="/dept.png/" className='fullW' alt="" />
                                    <div className="nestM midW flexC">Adetola Thomas</div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="home_about register_intro blueBg align ">

                    <div className='flexAl'>

                        <div>
                            <StyledLine bg='var(--orange)' width='120px' thickness='3px' >a</StyledLine>

                            <div className="header nestM">
                                Register for August Semester now.
                            </div>

                            <div className="middleM">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Nam officiis eveniet explicabo quibusdam adipisci sint cupiditate libero repellat, 
                            </div>

                            <div className='section'>  <button style={{paddingTop:'1.1em',paddingBottom:'1.1em'}} className='orangebg herobtn'>Explore</button> </div>




                        </div>

                    </div>


                    <div>
                        <img src="/Rectangle_47.png" className='fullW' alt="" />

                    </div>

                </div>

                <div className="wytBg home_about align">
                    <h2 className="header">Upcoming events</h2>

                    <div className="nestM grid3">
                        <div>
                            <img src="/Rectangle37.png/" alt="" className="fullW" />
                            <div className="nestM">
                                Movie Night | Yaba Centre
                            </div>
                        </div>

                        <div>
                            <img src="/Rectangle38.png/" alt="" className="fullW" />
                            <div className="nestM">
                                Picnic | National Theatre
                            </div>
                        </div>

                        <div>
                            <img src="/Rectangle37.png/" alt="" className="fullW" />
                            <div className="nestM">
                                Worship Session | Yaba Centre
                            </div>
                        </div>



                    </div>
                </div>

                <div className="home_about align flexC">

                    <div style={{maxWidth:'500px'}}>
                        <h2 className="header center">Newsletter</h2>

                        <div className="nestM center newsL">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis doloribus fugit, deserunt voluptate 
                            libero corporis voluptatibus adipisci necessitatibus maxime accusantium, 
                            nobis exercitationem atque incidunt animi! Dolores, ipsa dolorem. Iure, delectus.
                        </div>

                        <div className="flex newElbutton middleM">
                            <input type="text" />

                            <button className="orangebg">Subscribe now</button>
                            

                        </div>
                    </div>

                </div>

                <Footer className='footer'/>


            </div>

        </>
    )



}

export default styled(Index)`

    .meet{
        img{
            max-width: 290px;
        }



        .headC{
            @media(min-width: 700px){
                max-width: 85%;


            }


            @media(min-width: 900px){
                max-width: 80%;


            }
            font-size: 35px;
        }

    }   


    .techies{
        background-size: cover;
        background-image: url('/techies.png/');
        min-height: 450px;

        h1{
            font-size: 40px;
        }
    }


    .dash{

    }

    .landing_page{

        img{

        }
        @media(min-width:700px){
            margin-top: 1.5em;
            
            img{
                max-width: 90%;
                margin: auto;
                max-height: 460px;
            }
        }

        
    }


    .hero-text{
        line-height: 30px;
        max-width: 90%;
    }


    .hero{

        .elipse{
            right:0;
            top:75%;
            max-height: 250px;
            @media(min-width:700px){
                top:18%;

            }
        }
        @media(max-width:700px){
            display: grid;
            grid-row-gap: 2.5em;

            >div:nth-child(1){
                margin-top:4.5em
            }
        }

        .hero-text{
            margin-top:3.5em;
        }

        .lite-blue-ball{

        }
        

    }


    .balls{
            @media(max-width:700px){
                display:none;

                &.green{
                    display:unset;
                    top:4%;
                    right:10%;
                    width:18px;
                    height:18px;
                }

                &.red{                    
                    display:unset;
                    top:23%;
                    width:14px;
                    height:14px;
                    left:15%;
                }
                &.liteBlue{
                    /* display:unset; */
                    top:58%;
                    right:15%;
                    width:14px;
                    height:14px;
                }

            }

            @media(min-width:1000px){
                &.liteBlue{
                    top:15%;
                    left:2%
                }

                &.red{
                    top:20%;
                    left:45%

                    
                }

                &.red3{
                    top:20%;
                    left:7%
                }

                &.purple{
                    top:85%;
                    left:35%;
                }

                &.green{
                    top:40%;
                    left:94%;
                }

                &.red1{
                    top:40%;
                    left:2%

                }

                &.purple1{
                    top: 95%;
                    left:90%
                }

                &.ball1{

                }

            }
    }
    

    .herobtn{
        border-radius: 3px;
        padding:0.8em 3em;
    }


    .headText{
        margin: auto;
        text-align:left;
        line-height: 30px;

        @media(min-width:700px){
            max-width: 80%; 
            line-height:27px;
            text-align: center;
        }
    }

    

    .home_about{
        padding-top: 4.5em;
        padding-bottom: 4.5em;
        box-sizing: border-box;

        &.long{
            padding-top: 4.5em;
            padding-top: 4.5em;

        }

        .blueEl{
            right:0;
            top:40%;
            height:160px;

        }

        .yellowEl{
            right:0;
            top:48%;
            height:260px;

        }

        @media(max-width:700px){
            .blueEl,.yellowEl{
                display:none;
            }
        }

        .header.center{
            @media(max-width:700px){
                text-align:left;
                position:relative;
                font-weight:700;
            }
        }

    } 

    .circle2{
        left:0;
        max-height: 300px;
        display: none;
    }

    .elipse_mobile{
        left:0;
        max-height: 250px;
        top:-30px;
        font-weight:600;
    }

    @media(min-width:700px){

        .circle2{
            left:0;
            max-height: 300px;
            display: none;
        }

        .elipse_mobile{
            display:none;
        }


    }

    .card{
        border: 0.5px solid #0A275B;
        box-sizing: border-box;
        border-radius: 8px;


        h2{
            color:#0A275B;
        }
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


    .headBrief{
        font-size: 27px;
        @media(min-width:700px){
            font-size: 35px;
        }
    }

    .coordinators{
        /* h2{
            font-size: 32px;    
            font-weight:500;
            @media(min-width:700px){
                font-size: 35px;

            }
        } */
        div{
            @media(min-width:700px){
                min-width: 60%;
            }
        }
    }

    .coordinateGrid{
        margin-top:2.5em;
        img{
            max-height: 320px;
        }
        .middle{
            @media(max-width:700px){
                display:none;
            }

            div{
                font-size: 1px;
                color:transparent;
                height: 80px;
                min-width: 0px;
                border-right: 3px solid black;
            }
        }
        display: grid;
        grid-row-gap: 2.5em;

        @media(min-width:700px){
            margin-left:auto;
            margin-right:auto;

            grid-template-columns: 40% 20% 40%;
            

        }

        
        @media(min-width:900px){


        }

        >div{
            div.nestM{
                @media(max-width:700px){
                    text-align: left;
                    margin-top:1em;
                }               
            }
        }
    }


    .register_intro{
        grid-row-gap: 3.5em;
        display: grid;
        @media(min-width:800px){
            grid-template-columns: 45% 55%;


            >div:nth-child(1){
                max-width: 90%;
            }        

            
        }
    }


    .newsL{
        line-height:30px;
    }

    .newElbutton{
        display: grid;
        grid-row-gap:1.5em;
        button,input{
            min-height: 40px;
            border-radius:5px;
        }
        input{
            border:1px solid var(--orange);
            padding:0.4em 1em;
            box-sizing:border-box;
            outline:none
            
        }
        
        @media(min-width:700px){
            grid-template-columns: 70% 30%;

            input{
                border-right: none;

                border-top-right-radius: 0px;
                border-bottom-right-radius: 0px;
            }
            button{
                border-top-left-radius: 1px;
                border-bottom-left-radius: 1px;

            }
        
        }
    }


    .about_page{
        @media(max-width:700px){
            margin-top: 7em;
        }
    }

`


 

