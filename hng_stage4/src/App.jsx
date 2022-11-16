import { BrowserRouter, Routes, Route } from 'react-router-dom'


import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home/Home'
import Places from './pages/Places/Places'
import Footer from './Footer/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='places' element={<Places/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App