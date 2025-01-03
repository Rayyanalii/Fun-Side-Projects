import React, { createContext, useContext, useState } from 'react';

const QuestionContext = createContext();

export const QuestionNumberProvider = ({ children }) => {
    const [questionNumber, setQuestionNumber] = useState(10);

    const incrementQuestion = () => setQuestionNumber((prev) => prev + 1);
    const decrementQuestion = () => setQuestionNumber((prev) => Math.max(1, prev - 1));

    return (
        <QuestionContext.Provider value={{ questionNumber, incrementQuestion, decrementQuestion, setQuestionNumber }}>
            {children}
        </QuestionContext.Provider>
    );
};

export const useQuestion = () => useContext(QuestionContext);
