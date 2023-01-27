import React from 'react';

function Gallery() {
    return (
        <div id='gallery'>
            <div className="inner">
                <h2 className="mb-[50px]">Gallery</h2>

                <div className="flex justify-center max-xl:flex-col">
                    <div className="xl:flex-[0.5] max-xl:flex max-xl:mx-[10%] max-xl:flex-row max-sm:flex-col">
                        <p className="pb-[90px] max-xl:mt-[20%]">
                            By the end of this course, you will be able to develop and publish your very own Google
                            Chrome extension! In this course we will focus on coding exercises and projects.
                        </p>
                        <img src={require('../../images/gallery/developer4.png')} className="rounded-md"/>
                    </div>

                    <div className="flex-initial">
                        <div className="flex max-xl:flex-col max-xl:mx-[8%]">
                            <img src={require('../../images/gallery/developer1.png')}
                                 className="rounded-md m-[20px] xl:!mt-[0]"/>
                            <div className="max-xl:flex max-xl:mx-[3%] gap-[25px]">
                                <img src={require('../../images/gallery/developer2.png')}
                                     className="rounded-md max-xl:w-[50%]"/>
                                <img src={require('../../images/gallery/developer3.png')}
                                     className="rounded-md max-xl:w-[50%]"/>
                            </div>
                        </div>
                        <p className="mt-[100px] max-xl:mx-[10%] max-xl:mt-[50px]">
                            If you would like to learn web development and get a job in the tech industry, you are going
                            to LOVE this course!<br/> Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours
                            of HD video tutorials! This course was<br/> designed to be extremely beginner friendly. We
                            will begin with the very basics of HTML and build a simple web page.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Gallery;

