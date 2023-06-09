import React, {useState} from 'react'

import "./styles.css"
import { NotesList, NotingSection } from '../components'

const Home = () => {
  const notsec = document.getElementById("textarra")
  // console.log("check notsec", notsec)
  // var isFocused = (document.activeElement === notsec);
  // console.log(isFocused)
  const [notif, setNotif] = useState(true)
  return (
      <div className='page'>
        {/* {notif ? (
          <div className='notif active'>
            <div></div>
          </div>
        ) : (
          <div className='notif unactive'>
            <div></div>
          </div>
        )} */}

          <NotesList />
          <NotingSection />
        {/* <div className='components'>
        </div> */}
      </div>
  )
}

export default Home