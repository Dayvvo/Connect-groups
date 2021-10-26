import styled from 'styled-components'
import Link from 'next/link'
import useActiveLink from '../hooks/useActiveLink'
import {GoThreeBars} from 'react-icons/go'
import {AiOutlineClose} from 'react-icons/ai'
import { useRef } from 'react'


const Navbar= ({className,whitenavbar})=>{

    const activeLink  =useActiveLink();

    const slideNavBar = (e)=>{
        e && e.stopPropagation();
        navbarRef.current.classList.toggle('slide');
    }

    const navbarRef = useRef()

    return(

        <nav className={`${!whitenavbar?'blueBg':'wytBg'} align nav flexBtw relaticw ` +className}>

            <div className='flexAl bars'>
                <GoThreeBars className='output div relative' style={{zIndex:100}} onClick={()=>slideNavBar()} />            
            </div>

            <div className='logobar'>
                <object id="svg1" className='logo' data={`/${whitenavbar?'orange_':''}logo.svg/`} type="image/svg+xml"></object>
                <object id="svg2" className='logo' data="/orange_logo.svg/" type="image/svg+xml"></object>
            </div>
            
            
            <div className="flexBtw flexAl els">

                <div className={`${activeLink('/')}`} >
                    <Link href="/">Home</Link>
                </div>


                <div className={`${activeLink('/groups')}`}  >
                    <Link href="/groups">Groups</Link>
                </div>


                <div className={`${activeLink('/wallpapers')}`} >
                    <Link href="/wallpapers">Wallpapers</Link>
                </div>

                <div className={`${activeLink('/gallery')}`} >
                    <Link href="/gallery">Gallery</Link>
                </div>

                <div className={`${activeLink('/register')}`} >
                    <Link href="/register">Register</Link>
                </div>


            </div>


            <div onClick={(e)=>e.target.classList.contains('rwd') && slideNavBar()} className="rwd" ref={navbarRef}>

                <div className='blueBg' 
                //  onClick={e=>e.stopPropagation()} 
                 >
                    <div className='orangebg  toprwdBar flexBtw' >

                        <object id="svg2" className='logo' data="/71.svg/" type="image/svg+xml"></object>
                        
                        <div className=' flexAl'> 
                            <AiOutlineClose onClick={slideNavBar}
                             className={{fontsize:'32px'}} />  
                        </div>
                    </div>

                    <div className='navs'>

                        <div className={`${activeLink('/')}`} >
                            <Link href="/">Home</Link>
                        </div>


                        <div className={`${activeLink('/groups')}`}  >
                            <Link href="/groups">Groups</Link>
                        </div>


                        <div className={`${activeLink('/wallpapers')}`} >
                            <Link href="/wallpapers">Wallpapers</Link>
                        </div>

                        <div className={`${activeLink('/gallery')}`} >
                            <Link href="/gallery">Gallery</Link>
                        </div>

                        <div className={`${activeLink('/register')}`} >
                            <Link href="/register">Register</Link>
                        </div>



                    </div>

                </div>

            </div>

        </nav>
        


    )

}


export default styled(Navbar)`

    position: fixed;
    top:0;
    left:0;
    width: 100%;
    padding-top: 1.1em;
    padding-bottom: 1.1em;
    box-sizing: border-box;
    min-height:69px;
    z-index:100;
    ${props=>props.whitenavbar?'box-shadow:0px 1px 10px 3px rgb(0 0 0 / 7%);':''}

    .rwd{
        position:fixed;
        top:0;
        width:100%;
        height:100%;
        left:-1500px;
        transition:1s;
        z-index: 100;
        &.slide{
            left:0
        }




        >div{
            width:85%;
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
            height:100%;

        }

        .toprwdBar{
            border-top-right-radius: 15px;
            padding:0.5em 1em;

            .logo{
                min-width: 120px;
            }
        }

        svg{
            font-size:25px;
        }
    }

    .bars{


        svg{
            font-size:25px;
        }


        @media(min-width:700px){
            display:none
        }
    }

    .logobar{
        @media(max-width:700px){
            position:absolute;
            top:0;
            left:0;
            height: 100%;
            width:100%;
            display:flex;
            justify-content: center;

            #svg1{
                display: none;
            }

        }

        @media(min-width:700px){
            #svg2{
                display: none;
            }
        }


        .logo{
            max-width: 120px;
        }


        
    }

    .toprwdBar{

    }

    >.els{
        font-size: 16px;
        display: none;

        ${props=>props.whitenavbar && 
            `a{ color:var(--blue1) };`
        }
        
        @media(min-width: 700px){
            min-width: 45%;       
            display: flex;
        }

        @media(min-width: 900px){
            min-width: 40%;            
        }


        @media(min-width: 1000px){
            min-width: 35%;            
        }





    }

    .navs{
        padding:0 1.5em;
        display: grid;

        a{
            color:var(--white2);
            width:85%;
            font-size:17px;
            margin-top: 2em;
            padding-bottom: 1em;
            border-bottom: 1px solid var(--white2);
            display: block;
        }
    }








`