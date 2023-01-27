import React, {useState, useEffect} from 'react';
import OddStep from "./OddStep";
import EvenStep from "./EvenStep";

function Steps() {
    const [steps, setSteps] = useState([]);
    useEffect(() => {
        let allSteps = [];
        for (let i = 0; i < 6; i++) {
            allSteps.push(
                {
                    step: i + 1,
                    heading: 'Introduction to Front-End',
                    content: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.'
                }
            )
        }
        setSteps(allSteps)
    }, [])
    return (
        <div id="steps">
            <div className="inner">
                <h2 className="!pb-[50px]">Steps</h2>
                <div className="flex justify-evenly max-xl:justify-center">
                    <div className="left-side">
                        {steps.map((step, index) => {
                            if (step.step % 2 === 1) {
                                return (<OddStep step={step} key={index}/>)
                            } else {
                                return (
                                    <div className="hidden max-xl:inline">
                                        <EvenStep step={step}/>
                                    </div>
                                )
                            }
                        })}
                    </div>

                    <div className="center mt-[8%] max-xl:hidden">
                        <div className="relative">
                            <img src={require('../../images/line.png')}/>
                            <div
                                className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-0 right-[-100%] left-[-100%]">
                                <div className="absolute right-0 w-[76px]">
                                    <img src={require('../../images/lineArrowL.png')} alt=""/>
                                </div>
                            </div>
                            <div
                                className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[20%] right-[-100%] left-[-100%]">
                                <div className="absolute left-0 w-[76px]">
                                    <img src={require('../../images/lineArrowR.png')} alt=""/>
                                </div>
                            </div>
                            <div
                                className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[40%] right-[-100%] left-[-100%]">
                                <div className="absolute right-0 w-[76px]">
                                    <img src={require('../../images/lineArrowL.png')} alt=""/>
                                </div>
                            </div>
                            <div
                                className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[60%] right-[-100%] left-[-100%]">
                                <div className="absolute left-0 w-[76px]">
                                    <img src={require('../../images/lineArrowR.png')} alt=""/>
                                </div>
                            </div>
                            <div
                                className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[85%] right-[-100%] left-[-100%]">
                                <div className="absolute right-0 w-[76px]">
                                    <img src={require('../../images/lineArrowL.png')} alt=""/>
                                </div>
                            </div>
                            <div
                                className="circle w-[15px] h-[15px] rounded-[100%] bg-[#3B48D0] absolute top-[99%] right-[-100%] left-[-100%]">
                                <div className="absolute left-0 w-[76px]">
                                    <img src={require('../../images/lineArrowR.png')} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightSide max-xl:hidden">
                        {steps.map((step, index) => {
                            if (step.step % 2 === 1) {
                                return (<EvenStep step={step} key={index}/>)
                            }
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Steps;