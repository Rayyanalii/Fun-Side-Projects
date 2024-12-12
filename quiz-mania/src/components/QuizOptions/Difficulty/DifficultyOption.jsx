import React from 'react';
import { useDifficulty } from '../../../contexts/DifficultyContext';
import soundManager from '../../../utility/sounds';


const DifficultyOption = () => {
    const { selectedDifficulty, handleDifficultyChange } = useDifficulty();

    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-2xl drop-shadow-2xl'>Difficulty</h2>
                    <div className='h-px bg-slate-300 w-full'></div>
                </div>
                <div className='flex flex-col gap-5 min-w-44 items-center'>
                    {['Any', 'Easy', 'Medium', 'Hard'].map((difficulty, index) => (
                        <div
                            key={index}
                            className={`font-semibold w-full text-lg rounded-md cursor-pointer hover:bg-blue-700 ${selectedDifficulty === difficulty ? 'bg-blue-700 text-white' : ''
                                }`}
                            onClick={() => {
                                soundManager.play('click');
                                handleDifficultyChange(difficulty)

                            }}
                            onMouseEnter={() => soundManager.play('hover')}
                        >
                            {difficulty}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DifficultyOption;
