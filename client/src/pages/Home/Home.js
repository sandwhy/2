import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import { NotesList, Loading, NotingSection, Navbar } from '../components'

const Home = () => {
  return (
    <div className='row light-blue lighten-5'>
      <Navbar />
      <NotesList />
      <NotingSection />
    </div>
  )

  // const checknotes = () => {
  //   console.log("useeffect")
  //   console.log(notes)
  // }
}

export default Home