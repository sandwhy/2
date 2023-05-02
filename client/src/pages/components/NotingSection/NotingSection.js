import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

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
    const dat = {"title": noteDat.title, "note": noteDat.note}
    await api.saveCreateNote(dat)
  })

  return (
    <div className='card-panel light-blue lighten-4 col l7 offset-l1'>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setNoteDat({...noteDat, title:e.target.value})} value={currentNote.title} placeholder='Title'/>
        <textarea onChange={(e) => setNoteDat({...noteDat, note:e.target.value})} value={currentNote.note} placeholder="Note" spellCheck="false" style={{resize:"none"}} class="materialize-textarea" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default NotingSection