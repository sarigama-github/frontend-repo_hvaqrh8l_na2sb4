import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Agenda from './pages/Agenda'
import Parceiros from './pages/Parceiros'
import FAQ from './pages/FAQ'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
