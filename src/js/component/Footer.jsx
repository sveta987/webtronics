import React from 'react';
import {Link, Outlet} from "react-router-dom";

function Footer() {
    return (
        <>
            <footer >
                <div className="inner !mb-0">
                    <div className="flex justify-evenly text-white max-md:flex-col max-md:text-center max-md:text-[30px]">
                        <div className="max-md:mb-[15px]">
                            <Link to="/">
                                <img src={require('../../images/logo.png')} className="max-md:ml-[25%] max-md:w-[450px]"/>
                                <address className="text-white">
                                    Wisconsin Ave, Suite 700 <br/>
                                    Chevy Chase, Maryland 20815
                                </address>
                            </Link>
                        </div>

                        <div className="flex flex-col max-md:mb-[15px]">
                            <h4>Company</h4>
                            <Link to="/about" >About Us</Link>
                            <Link to="/steps" >Steps</Link>
                            <Link to="/question" >FAQs</Link>
                        </div>

                        <div className="flex flex-col max-md:mb-[15px]">
                            <Link to="/" >Review</Link>
                            <Link to="/" >Gallery</Link>
                        </div>
                        <div className="flex flex-col max-md:mb-[15px]">
                            <h4>Social media</h4>
                            <div className="icons flex flex-row justify-center gap-[5px]">
                                <a href="www.facebook.com">
                                    <img src={require('../../images/footer/facebook.png')} className="max-md:w-[25px] max-md:mx-[25px]"/>
                                </a>
                                <a href="www.discord.com">
                                    <img src={require('../../images/footer/discord.png')} className="max-md:w-[35px] max-md:mx-[25px]"/>
                                </a>
                                <a href="www.twitter.com">
                                    <img src={require('../../images/footer/twitter.png')} className="max-md:w-[35px] max-md:mx-[25px]"/>
                                </a>
                                <a href="www.linkedin.com">
                                    <img src={require('../../images/footer/linkedin.png')} className="max-md:w-[35px] max-md:mx-[25px]"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Outlet/>
        </>
);
}

export default Footer;