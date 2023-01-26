import React from 'react';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Technologies from "./Technologies";
import Steps from "./Steps";
import Questions from "./Questions";
import Review from "./Review";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function Landing() {
    return (
        <div>
            <div className="!bg-[#0C102D]">
                <Header/>
                <div className="relative w-[100%]">
                    {/*<div className="absolute top-0 left-0 w-[100%]">*/}
                    {/*    <img src={require('../../images/background.png')} className="pt-[50px] w-[100%] z-[1000]"/>*/}
                    {/*</div>*/}
                    {/**/}
                    <img src={require('../../images/background.png')} className="pt-[50px] w-[100%]"/>
                    <div className="absolute top-0 left-0 ">
                        <Home />
                        <About />
                        <Technologies/>
                        <Steps/>
                        <Questions/>
                        <Review/>
                        <Gallery/>
                        <ContactUs/>
                        <Footer/>
                    </div>
                </div>



                {/*<NoPage />*/}

            </div>
        </div>
    );
}

export default Landing;