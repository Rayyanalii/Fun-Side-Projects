import React, { createContext, useContext, useState } from 'react';

const QuestionTypeContext = createContext();

export const QuestionTypeProvider = ({ children }) => {
    const [selectedQuestionType, setSelectedQuestionType] = useState("Any");

    const handleQuestionTypeChange = (type) => {
        setSelectedQuestionType(type);
    };

    return (
        <QuestionTypeContext.Provider value={{ selectedQuestionType, handleQuestionTypeChange }}>
            {children}
        </QuestionTypeContext.Provider>
    );
};

export const useQuestionType = () => useContext(QuestionTypeContext);
