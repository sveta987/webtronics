import React from 'react';

function Home() {
    return (
        <div id="home" className="bg-[url('../../images/home-bg.png')] h-[800px]">
            <div className="inner !mt-0 max-md:!mx-[2%]">
                <div
                    className="flex pt-[190px] justify-evenly max-lg:justify-center max-lg:gap-[50px] max-lg:flex-col-reverse">
                    <h1 className="mr-[150px] max-2lg:text-[80px] max-[1024px]:text-[60px] max-[1670px]:text-[90px] max-sm:text-[60px] max-lg:text-center max-lg:mr-0">Front-End</h1>
                    <p className="pt-[50px] max-[1024px]:pt-[40px] max-lg:text-center">Make UIs and websites beautiful,
                        functional,<br/> and fast. Cover all the topics that expensive <br/> bootcamps teach (and more).
                    </p>
                </div>
                <div className="flex justify-evenly max-lg:flex-col-reverse max-[1280px]:mt-[20px]">
                    <button
                        className="rounded-[8px] mr-[150px] max-xl:ml-[35%] max-lg:ml-[25%] max-[1024px]:ml-[5%] max-sm:ml-[17%] mt-[50px] text-[#0A1482] px-[32px] py-[24px] bg-gradient-to-r from-[#27F9E5] to-[#2FFFCD] w-[288px] h-[72px]">Start
                        my career change
                    </button>
                    <h1 className="max-lg:text-center max-[1280px]:mt-[50px]">
                        Developer
                    </h1>
                </div>
                <h3 className="flex justify-end mr-[100px] max-lg:mr-0 max-lg:justify-center max-lg:mt-[25px]">Courses</h3>
            </div>
        </div>
    );
}

export default Home;