import React, { createContext, useContext, useState } from 'react';

const AllQuestionsContext = createContext();

export const AllQuestionsProvider = ({ children }) => {
    const [allQuestions, setAllQuestions] = useState([]);

    const setQuestions = (array) => setAllQuestions(array);

    return (
        <AllQuestionsContext.Provider value={{ allQuestions, setQuestions }}>
            {children}
        </AllQuestionsContext.Provider>
    );
};

export const useAllQuestion = () => useContext(AllQuestionsContext);
