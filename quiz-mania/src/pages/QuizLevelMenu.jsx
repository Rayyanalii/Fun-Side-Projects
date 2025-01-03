import { useEffect, useState } from 'react'
import QuizLevel from '../components/QuizLevel/QuizLevel'
import { useQuestion } from '../contexts/QuestionNumberContext'
import { useNavigate } from 'react-router';
import { useDifficulty } from '../contexts/DifficultyContext'
import { useQuestionType } from '../contexts/QuestionTypeContext'
import { useCategories } from '../contexts/CategoriesContext';
import { categories } from '../components/QuizOptions/Categories/AllCategories';
import { useAllQuestion } from '../contexts/AllQuestionsContext';

const QuizLevelMenu = () => {
    const navigate = useNavigate();
    const { questionNumber, setQuestionNumber } = useQuestion();
    const { selectedDifficulty } = useDifficulty();
    const { selectedQuestionType } = useQuestionType();
    const { selectedCategories } = useCategories();


    const { allQuestions, setQuestions } = useAllQuestion()

    const [fetchingQuestions, setfetchingQuestions] = useState(false)
    const [error, seterror] = useState("")


    function handleContinueClick() {
        if (allQuestions.length > 0) {
            navigate("/start", { state: { question: allQuestions[questionNumber - 1] } })
        }
        else {
            console.error("No questions found")
        }
    }

    function handleExitClick() {
        if (window.confirm("Are you sure you want to exit the game?")) {
            setQuestions([])
            setQuestionNumber(10)
            navigate("/")
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    }

    async function fetchQuestions() {
        setfetchingQuestions(true)
        let url = `https://opentdb.com/api.php?${selectedDifficulty == "Any" ? `` : selectedDifficulty == "Easy" ? `&difficulty=easy` : selectedDifficulty == "Medium" ? `&difficulty=medium` : `&difficulty=hard`}${selectedQuestionType == "Any" ? `` : selectedQuestionType == "multiple" ? `&type=multiple` : `&type=boolean`}`
        let fetchedQuestions = [];

        if (selectedCategories.length > 1) {
            let categoryLength = selectedCategories.length;
            let remainingQuestions = 10;
            let questionPerCategory = Math.floor(10 / selectedCategories.length);


            selectedCategories.forEach(async cat => {
                if (categoryLength > 1) {
                    remainingQuestions -= questionPerCategory;
                }
                else {
                    questionPerCategory = remainingQuestions;
                }

                const foundCat = categories.find((c) => c.name == cat);

                const response = await fetch(url + `&amount=${questionPerCategory}&category=${foundCat.id}`)
                if (response.ok) {
                    const data = await response.json();
                    console.log(data.results);
                    fetchedQuestions = [...fetchedQuestions, ...data.results];

                }
                else {
                    seterror("An error occured while fetching questions. Please try again later")

                    console.error(`Failed to fetch data for category: ${cat}`);
                }
                categoryLength--;

                await new Promise((resolve) => setTimeout(resolve, 5000));
            });
        }
        else {

            const foundCat = categories.find((c) => c.name == selectedCategories[0]);
            let response;
            if (selectedCategories[0] == "All") {
                response = await fetch(url + `&amount=10`)
            }
            else {
                response = await fetch(url + `&amount=10&category=${foundCat.id}`)
            }
            if (response.ok) {
                const data = await response.json();
                console.log(data.results);
                fetchedQuestions = [...fetchedQuestions, ...data.results];
            }
            else {
                seterror("An error occured while fetching questions. Please try again later")
                console.error(`Failed to fetch data`);
            }
        }
        setQuestions(shuffleArray(fetchedQuestions));
        setfetchingQuestions(false)
    }

    useEffect(() => {
        if (questionNumber == 10) {

            fetchQuestions();
        }

    },)


    return (
        <>
            <div className='background'>
                <div className='flex flex-col items-center gap-8'>
                    {allQuestions && !fetchingQuestions && !error ? <><h1 className='text-3xl font-bold'>Quiz Level</h1>
                        <QuizLevel questionNumber={questionNumber} />
                        <div className='flex gap-5'>
                            <div>
                                <button className='bg-red-500 py-2 px-6 rounded-lg hover:bg-red-600 transition-all drop-shadow-xl font-bold text-lg' onClick={handleExitClick}>Exit</button>
                            </div>
                            <div>
                                <button className='bg-green-500 py-2 px-6 rounded-lg hover:bg-green-600 transition-all drop-shadow-xl font-bold text-lg' onClick={handleContinueClick}>Continue</button>
                            </div>
                        </div></> : error ? <><h1 className='text-xl'>{error}</h1></> : <><h1 className='text-xl'>Please wait while the questions are loading...</h1></>}


                </div>
            </div>
        </>
    )
}

export default QuizLevelMenu
