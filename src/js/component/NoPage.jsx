import React from 'react';
import {Link} from "react-router-dom";

function NoPage() {
    return (
        <>
            <div className="relative">
                <img src={require('../../images/universe.jpg')} className="w-[100%] h-[100vh]"/>
                <div className="absolute top-[30%] left-[15%]">
                    <div className="flex flex-col">
                        <h2>Oh man!</h2>
                        <h4>We think that You are lost on Cyberspace</h4>
                        <Link to="/"
                              className="rounded-[8px] mt-[50px] ml-[50px] px-[32px] py-[24px] bg-gradient-to-r from-[#27F9E5] to-[#2FFFCD] w-[288px] h-[72px] shadow-lg text-[#0A1482] text-center text-[20px]">Go
                            home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoPage;