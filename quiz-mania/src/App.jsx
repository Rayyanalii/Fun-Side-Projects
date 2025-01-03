import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router'
import QuizLevel from './components/QuizLevel/QuizLevel';

function App() {
  const navigate = useNavigate();

  function handleOptionsButton() {
    navigate("/options")
  }

  function handleStartButton() {
    navigate("/level")
  }

  return (
    <>
      <div className='background'>
        <div className='flex flex-col items-center max-w-[50rem] text-center gap-10  mx-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-5xl drop-shadow-2xl'>Quiz Mania</h1>
            <p className="lg:text-2xl text-xl drop-shadow-2xl">Ready to get your noggins tested? Hit Start and win the jackpot!</p>
          </div>
          <div className='flex justify-between md:gap-10 gap-4 font-bold text-lg'>
            <div>
              <button className=' bg-green-500 py-2 px-8 rounded-lg hover:bg-green-600 transition-all drop-shadow-xl' onClick={handleStartButton}>Start</button>
            </div>
            <div>
              <button className=' bg-sky-600 py-2 px-8 rounded-lg hover:bg-sky-700 transition-colors drop-shadow-xl' onClick={handleOptionsButton}>Options</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
