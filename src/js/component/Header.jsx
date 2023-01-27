import React, {useState} from 'react'
import {Outlet, Link} from "react-router-dom";

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleClickScroll = (componentName) => {
        setToggleMenu(false);
        const element = document.getElementById(componentName);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
    return (<>
            <header className="fixed w-[100%] z-[1000]">
                <div className="inner !mt-4">
                    <nav className="font-[Inter] text-[16px] leading-[140%]">
                        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                            <Link to="#home"
                                  onClick={() => handleClickScroll("home")}
                            ><img src={require('../../images/logo.png')}
                                  className="cursor-pointer max-md:w-[300px] max-sm:w-[150px]"/>

                            </Link>
                            <button
                                className="navbar-burger flex items-center text-white p-3 lg:hidden"
                                onClick={() => setToggleMenu(!toggleMenu)}>
                                <svg className="block w-[50px] max-sm:w-[30px] fill-current" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                            <div
                                className={`justify-between items-center max-md:bg-[#0C102D] text-white w-full lg:flex lg:w-auto lg:order-1 !text-white ${toggleMenu ? "" : "hidden"}`}
                                id="mobile-menu-2">
                                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                    <li>
                                        <Link to="#about"
                                              onClick={() => handleClickScroll("about")}
                                              className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 !text-white cursor-pointer"
                                              aria-current="page">About</Link>
                                    </li>
                                    <li>
                                        <Link to="#programs"
                                              onClick={() => handleClickScroll("programs")}
                                              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer">
                                            Programs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#steps"
                                              onClick={() => handleClickScroll("steps")}
                                              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer">
                                            Steps
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#questions"
                                              onClick={() => handleClickScroll('questions')}
                                              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer">
                                            Questions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#contactUS"
                                              onClick={() => handleClickScroll('contactUs')}
                                              className="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 cursor-pointer">
                                            Get in touch
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Outlet/>
            </header>
        </>
    )
}