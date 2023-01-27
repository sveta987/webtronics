import React from 'react';

function EvenStep({step}) {
    return (
        <>
            <div className="border-gradient-for-steps-2 mt-[175px] max-xl:mb-[40px]">
                <div className="relative bg-[#0C102D] z-[30] h-[191px] w-[475px] rounded-xl">
                    <div
                        className="absolute h-[100%] w-[20%] bg-[#0C102D] top-0 rounded-xl right-0 flex justify-center"/>
                    <div
                        className="relative bg-[#191D39] pl-[5%] h-[90%] w-[90%] top-[5%] left-[5%] z-[30] border-gradient rounded-md text-left flex flex-col justify-evenly">
                        <h4>Step {step.step}</h4>
                        <h3>{step.heading}</h3>
                        <p>{step.content}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EvenStep;