import React, { useEffect, useState } from 'react';
import QuizLevel from '../components/QuizLevel/QuizLevel';


const QuizStart = () => {
    const [timer, settimer] = useState(3);

    useEffect(() => {
        if (timer > -1) {
            const interval = setInterval(() => {
                settimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    return (
        <div className='background'>
            <div className='flex gap-48'>

                <div>
                    {timer > 0 ? timer : <>
                        Hello World
                    </>}
                </div>
                <QuizLevel />
            </div>
        </div>
    );
};

export default QuizStart;
