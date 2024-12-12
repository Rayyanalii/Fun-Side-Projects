import React from 'react';
import { useQuestionType } from '../../../contexts/QuestionTypeContext';
import soundManager from '../../../utility/sounds';

const QuestionTypeOption = () => {
    const { selectedQuestionType, handleQuestionTypeChange } = useQuestionType();

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
                <h2 className='font-bold text-2xl drop-shadow-2xl'>Type</h2>
                <div className='h-px bg-slate-300 w-full'></div>
            </div>
            <div className='flex flex-col gap-5 min-w-44 items-center'>
                <div
                    className={`font-semibold text-lg max-w-36 w-full rounded-md cursor-pointer hover:bg-blue-700 ${selectedQuestionType === 'Any' ? 'bg-blue-700 text-white' : ''}`}
                    onClick={() => {
                        soundManager.play('click');
                        handleQuestionTypeChange('Any')
                    }}
                    onMouseEnter={() => soundManager.play('hover')}
                >
                    Any
                </div>
                <div
                    className={`font-semibold text-lg max-w-36 w-full rounded-md cursor-pointer hover:bg-blue-700 ${selectedQuestionType === 'multiple' ? 'bg-blue-700 text-white' : ''}`}
                    onClick={() => {
                        soundManager.play('click');
                        handleQuestionTypeChange('multiple')
                    }}
                    onMouseEnter={() => soundManager.play('hover')}
                >
                    MCQ
                </div>
                <div
                    className={`font-semibold text-lg max-w-36 w-full rounded-md cursor-pointer hover:bg-blue-700 ${selectedQuestionType === 'boolean' ? 'bg-blue-700 text-white' : ''}`}
                    onClick={() => {
                        soundManager.play('click');
                        handleQuestionTypeChange('boolean')
                    }}
                    onMouseEnter={() => soundManager.play('hover')}
                >
                    True/False
                </div>
            </div>
        </div>
    );
};

export default QuestionTypeOption;
