import { useEffect } from 'react'
import { useQuestion } from '../contexts/QuestionNumberContext'
import { useNavigate } from 'react-router';
import { useAllQuestion } from '../contexts/AllQuestionsContext';


const GameOver = () => {

    const navigate = useNavigate();

    const { setQuestionNumber } = useQuestion();

    const { setQuestions } = useAllQuestion();

    useEffect(() => {
        setQuestionNumber(10);
        setQuestions([]);

    },)

    function handleBackButton() {
        navigate("/")
    }


    return (
        <>
            <div className='background'>
                <div>
                    <h1>Game Over</h1>
                    <button onClick={handleBackButton}>Back To Main Menu</button>
                </div>
            </div>
        </>
    )
}

export default GameOver
