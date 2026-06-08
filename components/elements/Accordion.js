import { useState } from "react";

const faqs = [
    {
        key: 1,
        question: "What is your speciality in goods?",
        answer: "Imported goods from all major foreign countries.",
    },
    {
        key: 2,
        question: "Can you deliver goods or clear it on the same day?",
        answer: "Yes, we clear it on the same day.",
    },
    {
        key: 3,
        question: "Do you provide transportation service?",
        answer: "Yes, we do provide transportation to keep you worry-free.",
    },
];

export default function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className="accordion" id="accordionFAQ">
                {faqs.map(({ key, question, answer }) => (
                    <div key={key} className="accordion-item wow animate__animated animate__fadeIn">
                        <h5 className="accordion-header" onClick={() => handleToggle(key)}>
                            <button className={isActive.key == key ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}>{question}</button>
                        </h5>
                        <div className={isActive.key == key ? "accordion-collapse" : "accordion-collapse collapse"}>
                            <div className="accordion-body">{answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
