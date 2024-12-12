import React from 'react'
import CategoriesOption from '../components/QuizOptions/Categories/CategoriesOption';
import { Link } from 'react-router';
import DifficultyOption from '../components/QuizOptions/Difficulty/DifficultyOption';
import QuestionTypeOption from '../components/QuizOptions/QuestionType/QuestionTypeOption';

const QuizOptions = () => {
    return (
        <>
            <div className='background'>
                <div className='flex flex-col items-center text-center gap-10 px-10 py-5 rounded-lg bg-gradient-to-bl from-blue-950 to-blue-800 shadow-2xl'>
                    <div className='flex relative w-full justify-center'>
                        <div className='absolute left-0 text-gray-200'>
                            <Link to={"/"}><button className='bg-cyan-700 hover:bg-cyan-800 transition-colors px-4 py-1 rounded-lg font-semibold text-white'>Back</button></Link>
                        </div>
                        <h1 className='font-bold text-5xl drop-shadow-2xl'>Options</h1>

                    </div>
                    <div className='flex justify-center gap-28'>
                        <CategoriesOption />
                        <DifficultyOption />
                        <QuestionTypeOption />
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizOptions
