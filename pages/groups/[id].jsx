import styled from "styled-components"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"



const Techies = ({className})=>{


    return (
        <>
            <Navbar/>

            <div className={className + ' witeBg nav-offset'}>

                <div className="fullFlex techies">
                    <h1 className="wyt">Techies</h1>            
                </div>


                <div className="oneM align home_about flexRM">

                    <div className="halfOne">
                        <div className="smallM smallflex buttondiv">
                            <div>
                                <div className="sqr orangebg"> b </div>
                            </div>
                            <div className="txt">Techies</div>
                        </div>

                        <h2 className="headM header lineHD">
                            What is Techies About
                        </h2>


                        <div className="middleM">

                            <div>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, quod ea 
                                aliquid adipisci repellat quam, doloremque labore ut quis quidem libero possimus minus quas magni 
                                praesentium? Ad laboriosam cumque voluptate!
                            </div>

                            <div className="middleM">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, quod ea 
                                aliquid adipisci repellat quam, doloremque labore ut quis quidem libero possimus minus quas magni 
                                praesentium? Ad laboriosam cumque voluptate!
                            </div>
                            
                        </div>



                        <div className="sectM">
                            <button className="outlineO">Register</button>
                        </div>
                        

                    </div>

                    <div >
                        <img className="fullW" src="/home_amout.png/" alt=""/>

                    </div>
                
                </div>

                <div className="blueBg  oneM align grid2 meet  padB2-5">
                    <div className="grid2 flex1 ">
                        <div>
                            <img src="/gov.png/" alt=""/>

                            <div className="smallM txt">Governor</div>

                        </div>

                        <div>
                            <img src="/dept.png" alt=""/>

                            <div className="smallM txt">Deputy Governor</div>
                        </div>

                    </div>

                    <div className="flexCD flex1 flexAl">


                        <div className="flexC ">
                            <div className="headC">
                                <h2 className="header center">
                                    <span className="orange">"</span>
                                    Lorem Lorem ipsum dolor sit amet
                                    <span className="orange">"</span>

                                </h2>
                                
                                <div className="smallflex nestM">
                                    <div> - </div>
                                    <div className="dash txt">
                                        <div>John Doe</div>
                                        <div>Group governor</div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>

                <div className="oneM align witeBg">
                    <h1 className="header center">Register for Techies</h1>
                    
                    <form className="middleM wytBg sectPad form">
                        <div className="flexC">
                            <div className="paddBoth register-home ">
                                
                                <div className="formFlex">
                                    
                                    <div className="formRow">
                                        <label htmlFor="">
                                            <span>First Name</span>
                                            <span className="orange">*</span>
                                        </label>
                                        <div>
                                            <input type="text" className=""/>
                                        </div>
                                    </div>

                                    <div className="formRow">
                                        <label htmlFor="">
                                            <span>Last Name</span>
                                            <span className="orange">*</span>
                                        </label>
                                        <div>
                                            <input type="text" className=""/>
                                        </div>
                                    </div>


                                </div>


                                <div className="formFlex full">
                                    
                                    <div className="formRow">
                                        <label htmlFor="">
                                            <span>Group</span>
                                            <span className="orange">*</span>
                                        </label>
                                        <div>
                                            <input type="text" className="fullW"/>
                                        </div>
                                    </div>

                                </div>


                                <div className="formFlex full">
                                    
                                    <div className="formRow">
                                        <label htmlFor="">
                                            <span>Email Address</span>
                                            <span className="orange">*</span>
                                        </label>
                                        <div>
                                            <input type="text" className="fullW"/>
                                        </div>
                                    </div>

                                </div>


                                <div className="formFlex">
                                    
                                    <div className="formRow">
                                        <label htmlFor="">
                                            <span>Whatsapp Phone Number</span>
                                            <span className="orange">*</span>
                                        </label>
                                        <div>
                                            <input type="text" className="fullW white-out"/>
                                        </div>
                                    </div>

                                </div>


                                

                            </div>
                        </div>

                        <div className="flexEnd">
                            <button className="orangebg wyt submit-btnn">Submit</button>

                        </div>



                    </form>

                </div>


                <Footer className='footer'/>


            </div>

        </>
    )



}

export default styled(Techies)`

    .meet{
        img{
            max-width: 290px;
        }

        @media(max-width:700px){
            .flexCD{
                display:none;
            }
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





`


 

