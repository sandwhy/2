import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./styles.css"
import { getNotes, getNote } from '../../../actions/notes'
import { Loading } from '..'

function NotesList() {
    const dispatch = useDispatch()
    const {notes, currentNote} = useSelector((state) => state.notes)

    // const click2 = (id) => {
    //     console.log("checking the id", id)
    //     const elmnt = document.getElementById(id)
    //     console.log(elmnt,elmnt.id)
    // }

    const click3 = () => {
        const section = document.getElementById("section")

        if(section.classList.contains("inactive")) {
            section.classList.remove('inactive')
        } else {
            section.classList.add("inactive")
        }
    }

    useEffect(() => {
        dispatch(getNotes())
      },[])

    const click = (id) => {
        dispatch(getNote(id))
    }
    
    if(notes) {
        return(
            <div className='system'>
                <div id="section" className='back inactive'>
                    <div className='contain'>
                        <h6 className=''>Existing notes:</h6>
                        {notes.map((item) => 
                            <li key={item._id} className='button_container'>
                                <button className='btn-flat' id={item._id} onClick={() => click(item._id)}>{item.title.trim()}</button>
                            </li>
                        )}
                    </div>
                </div>
                <div className='sidenav_button' onClick={click3}></div>
            </div>
        )
    } else {
        return(
            <div className='back '>
                <Loading />
            </div>
        )
    }
}

export default NotesList