import React from 'react'

const QuizQuestions = ({ question }) => {
    return (
        <>
            <div className='w-[100vw] md:w-[50rem] bg-indigo-950  px-14 text-center py-10 border-2 border-amber-600'>
                {question}
            </div>
        </>
    )
}

export default QuizQuestions
