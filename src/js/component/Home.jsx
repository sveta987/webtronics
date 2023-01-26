import React from 'react';

function Home() {
    return (
        <div id="home" className="bg-[url('../../images/home-bg.png')] h-[800px]">

            <div className="inner !mt-0 max-md:!mx-[2%]">
                <div className="flex pt-[190px] justify-evenly max-md:justify-center max-md:gap-[50px] max-md:justify-between">
                    <h1 className="mr-[150px] !max-2lg:text-[80px] !max-[1670px]:text-[90px] !max-sm:text-[60px]">Front-End</h1>
                    <p className="pt-[50px]">Make UIs and websites beautiful, functional,<br/> and fast. Cover all the topics that expensive <br/> bootcamps teach (and more). </p>
                </div>
                <div className="flex justify-evenly max-xl:flex-row-reverse max-sm:flex-col-reverse">
                    <button className="rounded-[8px] mr-[150px] max-xl:ml-[35%] mt-[50px] text-[#0A1482] px-[32px] py-[24px] bg-gradient-to-r from-[#27F9E5] to-[#2FFFCD] w-[288px] h-[72px]">Start my career change</button>
                    <h1 >
                        Developer
                    </h1>
                </div>
                <h3 className="flex justify-end mr-[100px]">Courses</h3>
            </div>
        </div>
    );
}
export default Home;