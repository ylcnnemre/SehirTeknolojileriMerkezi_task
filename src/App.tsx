import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'

const App = () => {
  return (
    <Router>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<ProductPage />} />

      </Routes>
    </Router>
  )
}

export default App