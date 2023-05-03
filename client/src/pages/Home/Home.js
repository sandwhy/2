import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import "./styles.css"
import { NotesList, Loading, NotingSection, Navbar } from '../components'

const Home = () => {
  return (
    <div className='bg'>
      <Navbar />
      <div className='row page1'>
        <NotingSection />
      </div>
    </div>
  )

  // const checknotes = () => {
  //   console.log("useeffect")
  //   console.log(notes)
  // }
}

export default Home