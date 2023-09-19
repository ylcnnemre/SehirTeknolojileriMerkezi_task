import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import ProductPage from './pages/ProductPage/ProductPage'
import { Provider } from "react-redux"
import { store } from './redux/Store'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />

        </Routes>
        <ToastContainer />
      </Router >
    </Provider>

  )
}

export default App