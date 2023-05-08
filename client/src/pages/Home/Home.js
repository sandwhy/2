import React from 'react'

import "./styles.css"
import { NotesList, NotingSection, Navbar } from '../components'

const Home = () => {
  return (
    <div className='bg'>
      <Navbar />
      <div className='page1'>
        <NotesList />
        <NotingSection />
      </div>
    </div>
  )
}

export default Home