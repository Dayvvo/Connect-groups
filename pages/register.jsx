import styled from "styled-components"
import Navbar from "../components/navbar"
import Footer from "../components/footer"



const Registration = ({className})=>{


    return (
        <>
            <Navbar/>

            <div className={className + ' witeBg nav-offset'}>
        
                <div class="oneM align flexC">
                    <div>

                        <h1 class="flexC middleM header orange">Registration</h1>   
                        
                        <div className="nestM center headertext" style={{fontSize:'20px'}}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id explicabo necessitatibus eaque. Mollitia nam ratione ipsam at adipisci 
                            sit ullam magnam inventore commodi! Eos aliquid enim vero impedit culpa! Eum.
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

export default styled(Registration)`



    .dash{

    }


    .headertext{
        @media(min-width:700px){
            width: 80%;
            margin-left:auto;
            margin-right:auto;
        }
    }


`


 



