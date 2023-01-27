import React from 'react';

function About() {
    return (
        <div id="about">
            <div className="inner">
                <h2 className="!pb-[50px]"> About Us</h2>
                <div className="flex flex-row justify-center text-white max-xl:flex-col">
                    <div className="flex flex-col justify-center max-xl:mb-[50px]">
                        <h3 className="font-semibold text-[32px] leading-[120%] text-center max-xl:mb-[40px]">
                            Mentors
                        </h3>
                        <img src={require('../../images/mentors/line.png')} className="max-xl:hidden"/>
                        <div className="flex justify-center gap-[100px] max-xl:flex-col">
                            <div className="cart">
                                <img src={require("../../images/mentors/WadeWarren.png")}
                                     className="rounded-[100%] border-gradient max-xl:ml-[40%] max-sm:ml-[30%]"/>
                                <h4 className="max-xl:text-center">Wade Warren</h4>
                                <p className="max-xl:text-center">Front-end engineers work <br
                                    className="hidden max-sm:inline"/> closely with designers</p>
                            </div>
                            <div className="cart ">
                                <img src={require("../../images/mentors/KristinWatson.png")}
                                     className="rounded-[100%] border-gradient max-xl:ml-[40%] max-sm:ml-[30%]"/>
                                <h4 className="max-xl:text-center">Kristin Watson</h4>
                                <p className="max-x:text-center">Front-end engineers work <br
                                    className="hidden max-sm:inline"/> closely with designers</p>
                            </div>
                            <div className="cart">
                                <img src={require("../../images/mentors/RobertFox.png")}
                                     className="rounded-[100%] border-gradient max-xl:ml-[40%] max-sm:ml-[30%]"/>
                                <h4 className="max-xl:text-center">Robert Fox</h4>
                                <p className="max-xl:text-center">Front-end engineers work <br
                                    className="hidden max-sm:inline"/> closely with designers</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col custom-gradient">
                        <p className="text-4xl px-[50px]">Front-end engineers work closely with designers to make
                            websites beautiful, functional, and fast. <br/> This Career Path will teach you not only the
                            necessary languages and technologies, but how to think like a front-end engineer, too.</p>
                        <img src={require("../../images/frontImg.png")}
                             className="py-[70px] w-[80%] flex justify-end max-md:justify-center"/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;