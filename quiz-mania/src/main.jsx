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

soundManager.load('hover', hoverSound);
soundManager.load('click', clickSound);

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <CategoriesProvider>
        <DifficultyProvider>
          <QuestionTypeProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/options" element={<QuizOptions />} />
              <Route path="/start" element={<QuizStart />} />
            </Routes>
          </QuestionTypeProvider>
        </DifficultyProvider>
      </CategoriesProvider>
    </StrictMode>
  </BrowserRouter>
)
