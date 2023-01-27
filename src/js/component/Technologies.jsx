import React from 'react';

function Technologies() {
    return (
        <div id="programs">
            <div className="inner">
                <h2 className="!pb-[50px]">Programming <br/> technologies</h2>
                <p className="!pb-[30px]">
                    By the end, you’ll have the portfolio and <br className="hidden max-sm:inline"/> interview skills
                    you need to start your <br className="hidden max-sm:inline"/> new career.
                </p>

                <div
                    className="technologies flex !justify-center mt-[20px] gap-[10px] max-sm:flex-col max-sm:ml-[20%] max-sm:mr-[20%]">
                    <div className="flex flex-row gap-[10px] max-sm:flex-col">
                        <div className="border-gradient cut-angle">
                            <div
                                className="technology z-[30] border-gradient py-[24px] px-[10px] rounded-md  backdrop-blur-[5px]  !bg-[rgba(255, 255, 255, 0.05)]">
                                <img src={require("../../images/technologies/angular.png")}
                                     className="w-[162px] h-[136px] max-sm:ml-[20%]"/>
                                <h4 className="text-white text-center !text-[24px]">Angular</h4>
                            </div>
                        </div>
                        <div className="border-gradient cut-angle">
                            <div
                                className="technology border-gradient py-[24px] px-[10px] rounded-md backdrop-blur-[5px] bg-[rgba(255, 255, 255, 0.05)]">
                                <img src={require("../../images/technologies/react.png")}
                                     className="w-[162px] h-[136px] max-sm:ml-[20%]"/>
                                <h4 className="text-white text-center !text-[24px]">React</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-[10px] max-sm:flex-col">
                        <div className="border-gradient cut-angle">
                            <div
                                className="technology border-gradient py-[24px] px-[10px] rounded-md backdrop-blur-[5px] bg-[rgba(255, 255, 255, 0.05)]">
                                <img src={require("../../images/technologies/vue.png")}
                                     className="w-[162px] h-[136px] max-sm:w-[100%]"/>
                                <h4 className="text-white text-center !text-[24px]">Vue</h4>
                            </div>
                        </div>
                        <div className="border-gradient cut-angle">
                            <div
                                className="technology border-gradient py-[24px] px-[10px] rounded-md backdrop-blur-[5px] bg-[rgba(255, 255, 255, 0.05)]">
                                <img src={require("../../images/technologies/js.png")}
                                     className="w-[162px] h-[136px] max-sm:ml-[20%]"/>
                                <h4 className="text-white text-center !text-[24px]">JavaScript</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;