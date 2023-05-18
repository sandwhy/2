import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import "./styles.css"
import { saveCreateNote, getNotes } from '../../../actions/notes'
import {Loading, Popups} from ".."

const NotingSection = () => {
  const dispatch = useDispatch()
  const {currentNote} = useSelector((state) => state.notes)
  const [noteDat, setNoteDat] = useState({_id: "", title:"", note:""})
  const [dos, setDos] = useState("")
  const [pops, setPops] = useState(false)

  useEffect(() => {
    setNoteDat({"id": currentNote._id?currentNote._id:"", "title": currentNote.title?currentNote.title:"", "note": currentNote.note?currentNote.note:""})

    if (currentNote._id) {
      setDos("Save")
    } else {
      setDos("Create")
    }
  }, [currentNote])

  const click = () => {
    setPops(!pops)
    console.log("click,", pops)
  }

  const handleSubmit = (async(event) => {
    event.preventDefault()
    const dat = {"id": currentNote._id, "title": noteDat.title, "note": noteDat.note}
    click()

    await dispatch(saveCreateNote(dos, dat))
    await dispatch(getNotes())
  })

  return (
    <div className='noting-section col-8'>

      <form onSubmit={handleSubmit}>
        <input type='text' className='title_input' onChange={(e) => setNoteDat({...noteDat, title:e.target.value})} value={noteDat.title} placeholder='Title'/>
        <textarea autoCapitalize='on' onChange={(e) => setNoteDat({...noteDat, note:e.target.value})} value={noteDat.note} placeholder="Note" spellCheck="false" style={{resize:"none"}}/>
        <div className='buttons'>
          <button className='button btn' type="submit" value="Submit">{dos}</button>
        </div>
      </form>

      {pops && <Popups
        ver="passive"
        message={`Note ${dos}d`}
        set={click}
      />}

    </div>
  )
}

export default NotingSection