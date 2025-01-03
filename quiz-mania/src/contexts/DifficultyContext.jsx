import React, { createContext, useContext, useState } from 'react';

const DifficultyContext = createContext();

export const DifficultyProvider = ({ children }) => {
    const [selectedDifficulty, setSelectedDifficulty] = useState("Any");

    const handleDifficultyChange = (difficulty) => {
        setSelectedDifficulty(difficulty);
    };

    return (
        <DifficultyContext.Provider value={{ selectedDifficulty, handleDifficultyChange }}>
            {children}
        </DifficultyContext.Provider>
    );
};

export const useDifficulty = () => useContext(DifficultyContext);
