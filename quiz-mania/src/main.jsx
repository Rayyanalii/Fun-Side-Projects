import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import QuizOptions from './pages/QuizOptions.jsx';
import { CategoriesProvider } from './contexts/CategoriesContext';
import hoverSound from './assets/hover-sound.wav';
import clickSound from './assets/select-sound.wav';
import soundManager from './utility/sounds.js';
import { DifficultyProvider } from './contexts/DifficultyContext.jsx';
import { QuestionTypeProvider } from './contexts/QuestionTypeContext.jsx';
import QuizStart from './pages/QuizStart.jsx';
import QuizLevelMenu from './pages/QuizLevelMenu.jsx';
import { QuestionNumberProvider } from './contexts/QuestionNumberContext.jsx';
import { AllQuestionsProvider } from './contexts/AllQuestionsContext.jsx';
import GameOver from './pages/GameOver.jsx';


soundManager.load('hover', hoverSound);
soundManager.load('click', clickSound);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QuestionNumberProvider>
      <CategoriesProvider>
        <DifficultyProvider>
          <QuestionTypeProvider>
            <AllQuestionsProvider>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/options" element={<QuizOptions />} />
                <Route path="/start" element={<QuizStart />} />
                <Route path="/level" element={<QuizLevelMenu />} />
                <Route path="/gameover" element={<GameOver />} />
              </Routes>
            </AllQuestionsProvider>
          </QuestionTypeProvider>
        </DifficultyProvider>
      </CategoriesProvider>
    </QuestionNumberProvider>
  </BrowserRouter>
)
