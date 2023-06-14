import React, {useState} from 'react'

import "./styles.css"
import { NotesList, NotingSection, Notif } from '../components'

const Home = () => {
  const notsec = document.getElementById("textarra")
  // console.log("check notsec", notsec)
  var isFocused = (document.activeElement === notsec);
  // console.log(isFocused)
  const [notif, setNotif] = useState(false)
  return (
      <div className='page'>
          <Notif set={notif} setNotif={setNotif} />
          <NotesList />
          <NotingSection />
      </div>
  )
}

export default Home