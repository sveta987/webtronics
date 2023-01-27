import React, {useState, useEffect} from 'react';
import axios from "axios";
import SingleQuestion from "./SingleQuestion";

function Questions() {
    const [FACs, setFACs] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/fac")
            .then((response) => {
                setFACs(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])
    return (
        <div id="questions">
            <div className="inner">
                <h2>Frequently Asked <br/> Questions</h2>
                <div className="flex !justify-center pt-[56px] mx-[25%] max-md:mx-0">
                    <div className="w-[100%] max-xl:hidden">
                        <p> Do you have any kind of questions? <br/>We are here to help.</p>
                        <img src={require("../../images/question.png")} alt="" className="w-[344px] h-[405px]"/>
                    </div>
                    <div className="w-[100%] ">
                        {FACs.map((question, index) => (
                            <SingleQuestion question={question} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;