import React from 'react'

import "./styles.css"
import { NotesList, NotingSection} from '../components'

const Home = () => {
  return (
      <div className='page'>
        <NotesList />
        <NotingSection />
      </div>
  )
}

export default Home