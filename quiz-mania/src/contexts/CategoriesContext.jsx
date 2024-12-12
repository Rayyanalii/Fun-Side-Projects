import React, { createContext, useContext, useState } from 'react';

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [selectedCategories, setSelectedCategories] = useState(["All"]);

    const handleCategoryClick = (cat) => {
        if (cat === 'All') {
            setSelectedCategories(["All"]);
        } else {
            const isSelected = selectedCategories.includes(cat);
            if (selectedCategories.includes('All')) {
                setSelectedCategories([cat]);
            } else {

                setSelectedCategories(
                    isSelected && selectedCategories.length > 1
                        ? selectedCategories.filter((category) => category !== cat)
                        : [...selectedCategories, cat]
                );
            }
        }

    };

    return (
        <CategoriesContext.Provider value={{ selectedCategories, handleCategoryClick }}>
            {children}
        </CategoriesContext.Provider>
    );
};

export const useCategories = () => useContext(CategoriesContext);
