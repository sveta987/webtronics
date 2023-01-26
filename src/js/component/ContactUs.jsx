import React, { useState} from 'react';
import axios from "axios";

function ContactUs() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    function getInputData(event) {
        let inputName = event.target.id;
        switch (inputName) {
            case 'name':
                setName(event.target.value)
                break;
            case 'phone':
                setPhone(event.target.value)
                break;
            case 'email':
                setEmail(event.target.value)
                break;
        }
    }

    function sendFeedback() {
        let newContact = {
            name,
            phone,
            email
        };
        axios.post(
            "http://localhost:3000/feedback", newContact
        ).then(() => {
                alert("Done!");
                setEmail('');
                setPhone('');
                setName('')
            }
        )
    }

    return (
        <div id="contactUs">
            <div className="inner">
                <div className="border-gradient mx-[20%] max-md:mx-0">
                    <div className="bg-[#1A203F] z-30 rounded-xl">
                        <h2 className="!pt-[56px] max-md:!m-0">
                            Contact us
                        </h2>
                        <p>
                            Do you have any kind of help please contact with us.
                        </p>
                        <div className="text-white p-[100px]">
                            <div className="flex flex-col justify-center mx-[25%] max-md:mx-[5%] max-md:text-[2xl]">
                                <div className="border-gradient my-[5px] max-md:my-[15px]">
                                    <input type="text " id="name" placeholder="Name"
                                           className="py-[10px] pl-[10px] rounded-xl z-[30] bg-[#252842] w-[100%] max-md:py-[20px]"
                                           value={name}
                                           onChange={getInputData}/>
                                </div>
                                <div className="border-gradient my-[5px] max-md:my-[15px]">
                                    <input type="phone" id="phone" placeholder="Phone"
                                           className="py-[10px] pl-[10px] rounded-xl z-[30] bg-[#252842] w-[100%] max-md:py-[20px]"
                                           value={phone} onChange={getInputData}/>
                                </div>

                                <div className="border-gradient my-[5px] max-md:my-[15px]">
                                    <input type="email" id="email" placeholder="E-mail"
                                           className="py-[10px] pl-[10px] rounded-xl z-[30] bg-[#252842] w-[100%] max-md:py-[20px]"
                                           value={email} onChange={getInputData}/>
                                </div>

                                <button
                                    className="mt-[10px] rounded-md px-[32px] py-[10px] bg-gradient-to-r from-[#27F9E5] to-[#2FFFCD] max-md:py-[20px]"
                                    onClick={sendFeedback}>Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}
export default ContactUs;