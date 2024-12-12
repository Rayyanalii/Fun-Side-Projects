import React from 'react';
import { useCategories } from '../../../contexts/CategoriesContext';
import { categories } from './AllCategories';
import soundManager from '../../../utility/sounds';


const CategoriesOption = () => {
    const { selectedCategories, handleCategoryClick } = useCategories();

    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-bold text-2xl drop-shadow-2xl'>Categories</h2>
                    <div className='h-px bg-slate-300 w-full'></div>
                </div>
                <div>
                    <div className='flex flex-col gap-5 max-h-[20rem] overflow-auto min-w-44' style={{ scrollbarWidth: 'thin', '-ms-overflow-style': 'thin' }}>
                        <div
                            className={`font-semibold text-lg max-w-36 w-full rounded-md cursor-pointer hover:bg-blue-700 ${selectedCategories.includes('All') ? 'bg-blue-700 text-white' : ''
                                }`}
                            onClick={() => {
                                soundManager.play('click');
                                handleCategoryClick('All')
                            }}
                            onMouseEnter={() => {
                                soundManager.play('hover')
                            }}
                        >
                            All Categories
                        </div>

                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className={`font-semibold text-lg max-w-36 w-full rounded-md cursor-pointer hover:bg-blue-700 ${selectedCategories.includes(cat) ? 'bg-blue-700 text-white' : ''
                                    }`}
                                onClick={() => {
                                    soundManager.play('click');
                                    handleCategoryClick(cat)
                                }}
                                onMouseEnter={() => soundManager.play('hover')}
                            >
                                {cat.includes(':') ? cat.split(':')[1] : cat}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoriesOption;
