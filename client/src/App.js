import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home/Home"
import SignIn from './pages/SignIn/SignIn'
import { Navbar } from './pages/components'
// import dotenv from "dotenv"



const App = () => {
  // dotenv.config()

  return (
    <BrowserRouter>
      <div className='bg'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App