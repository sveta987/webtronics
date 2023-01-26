import React from 'react';

function Steps() {
    return (
        <div id="steps">
            <div className="inner">
                <h2>Steps</h2>
                <div className="flex justify-evenly max-md:justify-center">
                    <div className="left-side ">
                        <div className="border-gradient-for-steps mb-[181px]">
                            <div className="relative bg-inherit z-[30] h-[191px] w-[475px] rounded-xl ">
                                <div className="absolute h-[100%] w-[20%] bg-[#0C102D] top-0 rounded-xl right-0 flex justify-center" />
                                {/*<div className="pl-[5%]">*/}
                                    <div className="relative  pl-[5%] h-[90%] w-[90%] top-[5%] left-[5%] z-[30] border-gradient rounded-md text-left flex flex-col justify-evenly ">
                                        <h4>Step 1</h4>
                                        <h3>Introduction to Front-End </h3>
                                        <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                                    </div>
                                {/*</div>*/}

                            </div>
                        </div>

                        <div className="border-gradient-for-steps mb-[181px]">
                            <div className="relative bg-inherit z-[30] h-[191px] w-[475px] rounded-xl ">
                                <div className="absolute h-[100%] w-[20%] bg-[#0C102D] top-0 rounded-xl right-0 flex justify-center" />
                                <div className="relative bg-[#191D39] pl-[5%] h-[90%] w-[90%] top-[5%] left-[5%] z-[30] border-gradient rounded-md text-left flex flex-col justify-evenly ">
                                    <h4>Step 3</h4>
                                    <h3>Introduction to Front-End </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-gradient-for-steps mb-[181px]">
                            <div className="relative bg-inherit z-[30] h-[191px] w-[475px] rounded-xl ">
                                <div className="absolute h-[100%] w-[20%] bg-[#0C102D] top-0 rounded-xl right-0 flex justify-center" />
                                <div className="relative bg-[#191D39] pl-[5%] h-[90%] w-[90%] top-[5%] left-[5%] z-[30] border-gradient rounded-md text-left flex flex-col justify-evenly ">
                                    <h4>Step 5</h4>
                                    <h3>Introduction to Front-End </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="center h-[877px] w-10 border-l-[3px] border-l-[#27F9E5] mt-[8%] relative max-md:hidden">
                        <div className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-0 left-[-20%]" >
                            <div className="absolute right-0 w-[76px]">
                                <img src={require('../../images/lineArrowL.png')} alt=""/>
                            </div>
                        </div>
                        <div className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[20%] left-[-20%]" >
                            <div className="absolute left-0 w-[76px]">
                                <img src={require('../../images/lineArrowR.png')} alt=""/>
                            </div>
                        </div>
                        <div className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[40%] left-[-20%]" >
                            <div className="absolute right-0 w-[76px]">
                                <img src={require('../../images/lineArrowL.png')} alt=""/>
                            </div>
                        </div>
                        <div className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[60%] left-[-20%]" >
                            <div className="absolute left-0 w-[76px]">
                                <img src={require('../../images/lineArrowR.png')} alt=""/>
                            </div>
                        </div>
                        <div className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[85%] left-[-20%]" >
                            <div className="absolute right-0 w-[76px]">
                                <img src={require('../../images/lineArrowL.png')} alt=""/>
                            </div>
                        </div>
                        <div className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[100%] left-[-20%]" >
                            <div className="absolute left-0 w-[76px]">
                                <img src={require('../../images/lineArrowR.png')} alt=""/>
                            </div>
                        </div>

                    </div>

                    <div className="rightSide mt-[15%]">
                        <div className="border-gradient-for-steps-2 mb-[175px]">
                            <div className="relative bg-[#0C102D] z-[30] h-[191px] w-[475px] rounded-xl">
                                <div className="absolute h-[100%] w-[20%] bg-[#0C102D] top-0 rounded-xl right-0 flex justify-center" />
                                <div className="relative bg-[#191D39] pl-[5%] h-[90%] w-[90%] top-[5%] left-[5%] z-[30] border-gradient rounded-md text-left flex flex-col justify-evenly">
                                    <h4 >Step 2</h4>
                                    <h3>Introduction to Front-End </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-gradient-for-steps-2 mb-[175px]">
                            <div className="relative bg-[#0C102D] z-[30] h-[191px] w-[475px] rounded-xl">
                                <div className="absolute h-[100%] w-[20%] bg-[#0C102D] top-0 rounded-xl right-0 flex justify-center" />
                                <div className="relative bg-[#191D39] pl-[5%] h-[90%] w-[90%] top-[5%] left-[5%] z-[30] border-gradient rounded-md text-left flex flex-col justify-evenly">
                                    <h4>Step 4</h4>
                                    <h3>Introduction to Front-End </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-gradient-for-steps-2 mb-[175px]">
                            <div className="relative bg-[#0C102D] z-[30] h-[191px] w-[475px] rounded-xl">
                                <div className="absolute h-[100%] w-[20%] bg-[#0C102D] top-0 rounded-xl right-0 flex justify-center" />
                                <div className="relative bg-[#191D39] pl-[5%] h-[90%] w-[90%] top-[5%] left-[5%] z-[30] border-gradient rounded-md text-left flex flex-col justify-evenly">
                                    <h4>Step 6</h4>
                                    <h3>Introduction to Front-End </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Steps;