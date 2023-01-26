import React, {useState} from 'react';

function SingleQuestion({question}) {

    const [active, setActive] = useState(false)

    function openAccordion() {
        setActive(!active)
    }
    return (
        <>
            <div className="border-gradient my-[24px] cut-two-angles" onClick={openAccordion}>
                <div className="!bg-[#1B2241] z-30 py-[15px] border-gradient relative pl-[10px]">
                    <h4 className="!m-0">{question.title}</h4>
                    {active &&
                        <p className="pt-[14px]">{question.content}</p>}
                    <button className="text-white absolute top-[15px] right-[29px]"
                            onClick={openAccordion}>{active ? '+' : '-'}</button>
                </div>
            </div>

        </>
    );
}
export default SingleQuestion;