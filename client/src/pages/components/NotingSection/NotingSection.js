import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import "./styles.css"
import { saveCreateNote, getNotes, delNote } from '../../../actions/notes'
import {Loading, Popups} from ".."

const NotingSection = () => {
  const dispatch = useDispatch()
  const emptyDat = ({_id: "", title:"", note:""})
  const {currentNote} = useSelector((state) => state.notes)
  const [noteDat, setNoteDat] = useState(emptyDat)
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

  const popclick = () => {
    setPops(!pops)
    setTimeout(() => {
      setPops(pops)
    }, 4000);
  }

  const delclick = async () => {
    const dat = noteDat.id
    await dispatch(delNote(dat))
    await dispatch(getNotes())
  }

  const handleSubmit = (async(event) => {
    console.log("handling submit")
    event.preventDefault()
    const dat = {"id": currentNote._id, "title": noteDat.title, "note": noteDat.note}

    await dispatch(saveCreateNote(dos, dat))
    await dispatch(getNotes())
  })

  return (    
    <div className='noting-section col-8'>
      <div className='noting-section click-out'>


      <form onSubmit={handleSubmit}>
        <div className='textinput'>
          <input type='text' className='title_input' onChange={(e) => setNoteDat({...noteDat, title:e.target.value})} value={noteDat.title} placeholder='Title'/>
          <textarea id="text" autoCapitalize='on' onChange={(e) => setNoteDat({...noteDat, note:e.target.value})} value={noteDat.note} placeholder="Note" spellCheck="false" style={{resize:"none"}}/>
        </div>
        <div className='buttons'>
          {currentNote.title === noteDat.title && currentNote.note === noteDat.note ? (
            <button className='button btn sub disabled' type="submit" value="Submit" onClick={popclick}>{dos}</button>
          ):(
            <button className='button btn sub' type="submit" value="Submit" onClick={popclick}>{dos}</button>
          )}
          {currentNote._id == null ?
          (
          <button type="button" className='button btn del disabled' value="Delete" onClick={delclick}>Delete</button>
          ):(
          <button type="button" className='button btn del' value="Delete" onClick={delclick}>Delete</button>
          )}
        </div>
      </form>

      {pops && <Popups
        ver="passive"
        message={`Note ${dos}d`}
        set={popclick}
      />}
      </div>
    </div>
  )
}

export default NotingSection