import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 

import * as api from "../../api"
import { getNotes } from '../../actions/notes'

const Home = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [notesList, setNotesList] = useState([])
  
  const {notes} = useSelector((state) => state.notes)

  // useEffect(() => {
  //   const getData = async () => {
  //     const {data} = await api.fetchNotes()
  //     const dat = data.data
  //     // console.log(data)
  //     // console.log(dat)
  //     setNotesList(dat)
  //     // console.log("why")
  //     // console.log(notesList)
  //   }
  //   getData()
  // }, [])
  
  useEffect(() => {
    dispatch(getNotes("check"))
  },[])
  
  const checknotes = () => {
    console.log("useeffect")
    console.log(notes)
  }

  const handleSubmit = (async(event) => {
    event.preventDefault()
    const dat = {"title": title, "note": note}
    await api.saveCreateNote(dat)
  })

  const Ok = () => {
    if(notes) {
      // console.log('oke')
      // console.log(notesList)
      return(
        <div className='col l3'>   
          {notes.map((item) => 
            <p>{item.title}</p>
          )}
        </div>
      )
    } else {
      // console.log('there')
      return(
        <div className='col l3'>
          <p>hello</p>
          <p>The list of notes have not loaded yet</p>
        </div>
      )
    }
  }
  
  return (
    <div className='row'>
      <div className='card-panel blue-grey darken-1 col l3'>
        <h5 className='card-title'>Existing notes:</h5>
          <button onClick={checknotes}>ok</button>
          <Ok />
      </div>
      <div className='card-panel blue-grey lighten-1 col l9'>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
          <textarea onChange={(e) => setNote(e.target.value)} placeholder="Note" spellCheck="false" style={{resize:"none"}} class="materialize-textarea" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Home