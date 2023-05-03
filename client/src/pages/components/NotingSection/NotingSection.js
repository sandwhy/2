import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import "./styles.css"
import * as api from "../../../api"

const NotingSection = () => {
  const dispatch = useDispatch()
  const {currentNote} = useSelector((state) => state.notes)
  const [noteDat, setNoteDat] = useState({title:"", note:""})

  useEffect(() => {
    console.log("currentNote", currentNote)
  }, [])

  const handleSubmit = (async(event) => {
    event.preventDefault()
    // const dat = {"title": noteDat.title, "note": noteDat.note}
    // await api.saveCreateNote(dat)
    console.log("boop")
  })

  return (
    <div className='noting-section col l8 offset-l2'>
      <form onSubmit={handleSubmit}>
        <input type='text' className='title_input' onChange={(e) => setNoteDat({...noteDat, title:e.target.value})} value={currentNote.title} placeholder='Title'/>
        <textarea autoCapitalize='on' onChange={(e) => setNoteDat({...noteDat, note:e.target.value})} value={currentNote.note} placeholder="Note" spellCheck="false" style={{resize:"none"}}/>
        <div className='buttons'>
          <button className='button btn' type="submit" value="Submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NotingSection