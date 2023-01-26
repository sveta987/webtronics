import React from 'react';

function Gallery() {
    return (
        <div id='gallery'>
            <div className="inner">
                <h2>Gallery</h2>
                <div className="flex justify-center my-[50px] max-md:flex-col">
                    <div className="max-md:flex max-md:justify-evenly max-md:px-[150px] max-md:mb-[25px]">
                        <p className="mb-[90px] text-justify ml-[250px] max-md:ml-0 max-md:mb-0 max-md:text-center max-md:pt-[150px]">
                            By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.
                        </p>
                        <img src={require('../../images/gallery/developer4.png')} className="rounded-md ml-[250px] max-md:ml-[50px]"/>
                    </div>
                    <div>
                        <div className="flex ">
                            <img src={require('../../images/gallery/developer1.png')} className="rounded-md m-[20px] !mt-[0]"/>
                            <div className="">
                                <img src={require('../../images/gallery/developer2.png')} className="rounded-md mb-[20px]"/>
                                <img src={require('../../images/gallery/developer3.png')} className="rounded-md"/>
                            </div>
                        </div>
                        <p className="mt-[100px] ml-[20px] !text-justify max-md:mt-[45px] max-md:mb-[100px]">
                            If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Gallery;

