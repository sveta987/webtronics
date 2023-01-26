import React from 'react';

function Technologies() {
    return (
        <div id="programs">
            <div className="inner">
                <h2>Programming <br/> technologies</h2>
                <p >
                    By the end, you’ll have the portfolio and interview skills
                    <br/>
                    you need to start your new career.
                </p>

                <div className="technologies flex !justify-center mt-[20px] gap-[10px] flex-wrap max-md:flex-col max-md:ml-[30%] max-sm:ml-[25%]">
                    <div className="flex flex-row max-sm:flex-col">
                        <div className="border-gradient cut-angle max-sm:w-[60%] max-md:my-[20px]  ">
                            <div className="technology z-[30] border-gradient py-[24px] px-[10px] rounded-md  backdrop-blur-[5px]  !bg-[rgba(255, 255, 255, 0.05)] max-md:py-[60px] max-md:px-[90px]">
                                <img src={require("../../images/technologies/angular.png")} className="w-[162px] h-[136px] max-sm:w-[100%]"/>
                                <h4 className="text-white text-center">Angular</h4>
                            </div>
                        </div>
                        <div className="border-gradient cut-angle max-sm:w-[60%] max-md:my-[20px]">
                            <div className="technology border-gradient py-[24px] px-[10px] rounded-md backdrop-blur-[5px] bg-[rgba(255, 255, 255, 0.05)] max-md:py-[60px] max-md:px-[90px]">
                                <img src={require("../../images/technologies/react.png")} className="w-[162px] h-[136px] max-sm:w-[100%] "/>
                                <h4 className="text-white text-center">React</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row max-sm:flex-col ">
                        <div className="border-gradient cut-angle max-sm:w-[60%] max-md:my-[20px]">
                            <div className="technology border-gradient py-[24px] px-[10px] rounded-md backdrop-blur-[5px] bg-[rgba(255, 255, 255, 0.05)]  max-md:py-[60px] max-md:px-[90px]">
                                <img src={require("../../images/technologies/vue.png")} className="w-[162px] h-[136px] max-sm:w-[100%]"/>
                                <h4 className="text-white text-center">Vue</h4>
                            </div>
                        </div>
                        <div className="border-gradient cut-angle max-sm:w-[60%] max-md:my-[20px]">
                            <div className="technology border-gradient py-[24px] px-[10px] rounded-md backdrop-blur-[5px] bg-[rgba(255, 255, 255, 0.05)]  max-md:py-[60px] max-md:px-[90px]">
                                <img src={require( "../../images/technologies/js.png")} className="w-[162px] h-[136px] max-sm:w-[100%]"/>
                                <h4 className="text-white text-center">JavaScript</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Technologies;