import { BrowserRouter, Routes, Route } from 'react-router-dom'


import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import Navbar from './Navbar/Navbar'
import Home from './pages/Home/Home'
import Places from './pages/Places/Places'
import Footer from './Footer/Footer'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      {isOpen && <div className='overlay'></div>} 
      <Navbar setIsOpen={setIsOpen}/>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='places' element={<Places/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App