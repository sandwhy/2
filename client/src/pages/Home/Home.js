import React, { useState } from 'react'

const Home = () => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("hello there")
    console.log(title, note)
  }

  // const handleChange = (e, val) => {
  //   console.log(val)
  //   console.log(e.target.value)
  // }

  return (
    <div>
      <div>
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