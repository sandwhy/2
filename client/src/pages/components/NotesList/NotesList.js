import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./styles.css"
import { getNotes, getNote } from '../../../actions/notes'
import { Loading } from '..'

function NotesList() {
    const dispatch = useDispatch()
    const {notes, currentNote} = useSelector((state) => state.notes)

    useEffect(() => {
        dispatch(getNotes())
      },[])

    const click = (id) => {
        // console.log(id)
        dispatch(getNote(id))
        // console.log("note", currentNote )
    }
    
    if(notes) {
        return(
        <div className='card light-blue lighten-5 col l2 offset-l1'>
            <div className='card-content'>
                <span className='card-title'>Existing notes:</span>
                {notes.map((item) => 
                    <button className='btn-flat waves-effect waves-black' key={item._id} onClick={() => click(item._id)}>{item.title.trim()}</button>
                )}
            </div>
        </div>
        )
    } else {
        return(
            <div className='card light-blue lighten-5 col l2 offset-l1'>
                <Loading />
            </div>
        )
    }
}

export default NotesList