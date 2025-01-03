import { useEffect, useState } from 'react';
import QuizQuestions from './../components/QuizQuestions/QuizQuestions';
import QuizAnswers from '../components/QuizQuestions/QuizAnswers';
import { useNavigate } from 'react-router';
import { useLocation } from "react-router";



const QuizStart = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const questionObject = location.state?.question;

    const [timer, settimer] = useState(30);
    const [countDown, setCountDown] = useState(3);
    const [answerClicked, setAnswerClicked] = useState(false);

    function gameOverOnTime() {
        navigate("/gameover")
    }


    useEffect(() => {
        if (countDown > -1) {
            const interval = setInterval(() => {
                setCountDown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
        if (timer > -1 && !answerClicked) {
            const interval = setInterval(() => {
                settimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }

    }, [countDown, timer]);

    return (
        <div className='background'>
            <div className=''>
                <div className=''>
                    {countDown > 0 ? <><div className='text-2xl'>{countDown}</div></> : <>
                        <p className='text-center'>{timer > 0 ? <><p>Time</p><p>{timer}</p></> : gameOverOnTime}</p>
                        <br></br>
                        <QuizQuestions question={questionObject.question} />
                        <QuizAnswers type={questionObject.type} correct={questionObject.correct_answer} incorrect={questionObject.incorrect_answers} answerClicked={answerClicked} setAnswerClicked={setAnswerClicked} />
                    </>}
                </div>
            </div>
        </div>
    );
};

export default QuizStart;
