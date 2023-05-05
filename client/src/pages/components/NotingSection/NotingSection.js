import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import "./styles.css"
import { saveCreateNote } from '../../../actions/notes'

const NotingSection = () => {
  const dispatch = useDispatch()
  const {currentNote} = useSelector((state) => state.notes)
  const [noteDat, setNoteDat] = useState({title:"", note:""})
  

  useEffect(() => {
    setNoteDat(currentNote)
  }, [currentNote])

  const handleSubmit = (async(event) => {
    event.preventDefault()
    const dat = {"id": currentNote._id, "title": noteDat.title, "note": noteDat.note}

    var dos = ""

    if (currentNote._id) {
      dos = "save"
    } else {
      dos = "create"
    }

    dispatch(saveCreateNote(dos, dat))
  })

  return (
    <div className='noting-section'>
      <form onSubmit={handleSubmit}>
        <input type='text' className='title_input' onChange={(e) => setNoteDat({...noteDat, title:e.target.value})} value={noteDat.title} placeholder='Title'/>
        <textarea autoCapitalize='on' onChange={(e) => setNoteDat({...noteDat, note:e.target.value})} value={noteDat.note} placeholder="Note" spellCheck="false" style={{resize:"none"}}/>
        <div className='buttons'>
          <button className='button btn' type="submit" value="Submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NotingSection