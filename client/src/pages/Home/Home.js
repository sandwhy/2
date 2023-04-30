import React, { useState, useEffect } from 'react'
import * as api from "../../api"

const Home = () => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [notesList, setNotesList] = useState([])
  useEffect(() => {
    const getData = async () => {
      const {data} = await api.fetchNotes()
      const dat = data.data
      // console.log(data)
      // console.log(dat)
      setNotesList(dat)
      // console.log("why")
      // console.log(notesList)
    }
    getData()
  }, [])
  
  const checknotes = () => {
    console.log("click")
    console.log(notesList)
  }

  const handleSubmit = (async(event) => {
    event.preventDefault()
    const dat = {"title": title, "note": note}
    await api.saveCreateNote(dat)
  })

  const Ok = () => {
    if(notesList) {
      console.log('oke')
      console.log(notesList)
      return(
        <div>
          {/* {JSON.stringify(notesList)} */}
          {notesList.map((item) => 
            <p>{item.title}</p>
          )}
        </div>
      )
    } else {
      console.log('there')
      return(
        <div>
          <p>hello</p>
          <p>The list of notes have not loaded yet</p>
        </div>
      )
    }
  }
  
  return (
    <div className='card-panel row'>
      <div className='card-panel blue-grey darken-1 col l3'>
        <h6>Existing notes:</h6>
        <div className='col l3'> 
          <button onClick={checknotes}>ok</button>
          {/* {notesList?.map((not) => {
            <p>{not.title}</p>
          })} */}
          <Ok />
        </div>
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