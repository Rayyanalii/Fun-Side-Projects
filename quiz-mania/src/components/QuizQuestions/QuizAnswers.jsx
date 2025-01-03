/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuestion } from '../../contexts/QuestionNumberContext';

const QuizAnswers = ({ type, correct, incorrect, answerClicked, setAnswerClicked }) => {
    const [answerVerified, setAnswerVerified] = useState(false);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [clickedAnswerID, setclickedAnswerID] = useState(-1)

    const { decrementQuestion } = useQuestion();
    const navigate = useNavigate();

    const handleAnswerClick = (answer, id) => {
        if (!answerClicked) {
            setAnswerClicked(true);
            setclickedAnswerID(id)

            let isCorrect = answer == correct;

            setTimeout(() => {
                setAnswerVerified(true)
            }, 3000);

            setTimeout(() => {
                decrementQuestion();
                navigate(isCorrect ? "/level" : "/gameover");
            }, 6000);
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    };

    useEffect(() => {
        if (type !== "boolean") {
            const allAnswers = [correct, ...incorrect];

            setShuffledAnswers(shuffleArray(allAnswers));
        }
    }, [correct, incorrect, type]);
    console.log("🚀 ~ QuizAnswers ~ correct:", correct)

    return (
        <>
            {type === "boolean" ? (
                <div className="mt-5 flex flex-wrap md:max-w-[50rem] justify-between gap-5">
                    {["True", "False"].map((option, index) => (
                        <div
                            key={index}
                            className={`w-[100%] lg:w-[48%] bg-indigo-950 px-14 text-center py-10 border-2 border-amber-600 ${answerClicked
                                && index == clickedAnswerID ? "cursor-default bg-black"
                                : "cursor-pointer hover:bg-indigo-900"
                                } ${answerVerified ? (option == correct ? "bg-green-500 font-semibold" : "bg-red-600 font-semibold") : ""
                                }`}
                            onClick={() => handleAnswerClick(option, index)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="mt-5 flex flex-wrap md:max-w-[50rem] justify-between gap-5">
                    {shuffledAnswers.map((answer, index) => (
                        <div
                            key={index}
                            className={`w-[100%] lg:w-[48%]  px-14 text-center py-10 border-2 border-amber-600 
                                ${index == clickedAnswerID ? "bg-indigo-900" : "bg-indigo-950"}
                                ${answerVerified && answer == correct ? "bg-green-600" : ""}
                                ${answerVerified && index == clickedAnswerID && incorrect.includes(answer) ? "bg-red-600" : ""}

                                ${answerClicked ? "cursor-default" : "hover:bg-indigo-900 cursor-pointer"}
                                `}
                            onClick={() => handleAnswerClick(answer, index)}
                        >
                            {answer}

                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default QuizAnswers;
