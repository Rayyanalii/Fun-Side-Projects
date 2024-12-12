import React from 'react'
import { prizes } from './AllQuizPrizes';

const QuizLevel = () => {
    let varr = 20;
    return (
        <>
            <div className=' '>
                <div className='flex flex-col  items-center'>
                    {prizes.map((prize, index) => (
                        <div key={index} className={`text-center py-[2px] bg-gradient-to-l from-purple-950 to-pink-500 border border-purple-900 rounded-md text-white font-semibold text-lg drop-shadow-xl`} style={{ width: `${varr = varr - 1.5}rem` }}>
                            ${prize}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default QuizLevel
