import React, {useEffect, useState} from 'react';
import axios from "axios";

function Review() {
    const [reviews, setReviews] = useState([])
    const [selected, setSelected] = useState({})
    useEffect(() => {
        axios
            .get("http://localhost:3000/reviews")
            .then((response) => {
                setReviews(response.data)
            })
            .catch(err => console.log(err.message))
    }, [])
    useEffect(() => {
        setSelected(reviews[0])
    }, [reviews])

    function getSelected(id) {
        setSelected(reviews.find(review => review.id === id))
    }

    function next() {
        if (reviews.indexOf(reviews.find(review => review.id === selected.id)) + 1 < reviews.length) {
            setSelected(reviews[reviews.indexOf(reviews.find(review => review.id === selected.id)) + 1])
        }
    }

    function previus() {
        if (reviews.indexOf(reviews.find(review => review.id === selected.id)) - 1 >= 0) {
            setSelected(reviews[reviews.indexOf(reviews.find(review => review.id === selected.id)) - 1])
        }
    }

    return (
        <div id="Rreview">
                <div className="inner max-md:px-[10px]">
                    <h2 className="max-md:pb-[350px]">Review</h2>
                    <div className="flex justify-between !my-[30px] h-[400px] max-md:flex-col-reverse relative">
                        <div className="mt-[15%] mr-[20px] max-md:text-center">
                            <h4>
                                {selected?.heading}
                            </h4>
                            <p className="text-left max-md:text-center">{selected?.content}</p>
                        </div>
                        <div>
                            <div className="flex flex-row justify-between mb-[16px]">
                                <p>{selected?.id} / {reviews.length} </p>
                                <div className="flex flex-row justify-center gap-[10px]">
                                    <img src={require("../../images/arrowL.png")} className="cursor-pointer" onClick={previus}/>
                                    <img src={require("../../images/arrowR.png")} className="cursor-pointer" onClick={next}/>
                                </div>
                            </div>
                            <div className="flex h-[100%] max-md:w-[100%]">
                                <div className="cut-angle border-gradient mr-[20px] rounded-xl w-[300px] max-md:w-[50%]">
                                    {reviews.length && <img src={require( '../../images/review/'+ (selected?.img || reviews[0].img))} className="rounded-xl w-[100%] h-[100%]"/> }
                                </div>
                                    {reviews.map((review, index) => {
                                        if (review.id !== selected?.id) {
                                            return (
                                                <div key={index} onClick={() => getSelected(review.id)}
                                                     className="cut-angle border-gradient mr-[20px] !rounded-xl w-[150px] h-[100%] max-md:w-[25%]">
                                                    <img src={require('../../images/review/' + review.img)} className="rounded-xl h-[100%] "/>
                                                </div>
                                            )
                                        }
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Review;