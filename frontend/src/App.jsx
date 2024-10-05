import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import Planet from './pages/Planet.jsx'
import Planets from './pages/Planets.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import QuizSelection from './pages/QuizSelection.jsx'
import Quiz from './pages/Quiz.jsx'
import Landing from './pages/Landing.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/planet/:id" element={<Planet />} />
        <Route path="/exoplanets" element={<Planets />} />
        <Route path="/quiz" element={<QuizSelection />} />
        <Route path="/quiz/:planetName" element={<Quiz />} />
      </Routes>
    </>
  )
}

export default App