import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./styles.css"
import { getNotes, getNote } from '../../../actions/notes'
import { Loading } from '..'

function NotesList() {
    console.log("LIST RENDER")

    const dispatch = useDispatch()
    const {notes} = useSelector((state) => state.notes)

    const newnoteclk = () => {
        dispatch({type:"RESET_NOTE"})
    }
    const checklist = () => {
        console.log("notes here,", notes)
    }

    const sidenav_click = () => {
        const section = document.getElementById("section")

        if(section.classList.contains("inactive")) {
            section.classList.remove('inactive')
        } else {
            section.classList.add("inactive")
        }
    }

    useEffect(() => {
        dispatch(getNotes())
        console.log("deploying effect")
      },[])

    const click = (id) => {
        dispatch(getNote(id))
        const selct2 = document.getElementsByClassName("side-nav__container__button")
        var arr = Array.prototype.slice.call(selct2)
        arr.forEach(element => {
            element.classList.remove("highlight")
        });
        const selct = document.getElementById(id)
        selct.classList.add("highlight")
    }
    
    if(notes) {
        return(
            <div className='side-nav'>
                <div id="section" className='side-nav__body'>
                    <div className='side-nav__container'>
                        <div className='side-nav__container__header'>Existing notes:</div>
                        <li key="newnotebtn" className='side-nav__container__li'>
                            <button className='btn-flat side-nav__container__button new-note-button' onClick={newnoteclk}>+</button>
                        </li>
                        {notes.map((item) => 
                            <li key={item._id} className='side-nav__container__li'>
                                <button className='btn-flat side-nav__container__button' id={item._id} onClick={() => click(item._id)}>{item.title.trim()}</button>
                            </li>
                        )}
                        <li key="newn" className='side-nav__container__li'>
                            <button className='btn-flat side-nav__container__button new-note-button' onClick={checklist}>+</button>
                        </li>
                    </div>
                </div>
                <div className='side-nav__toggle-button' onClick={sidenav_click}></div>
            </div>
        )
    } else {
        return(
            <div className='side-nav'>
                <div className='side-nav__body'>
                    <div className='side-nav__convainer'>
                        <Loading />
                    </div>
                </div>
            </div>
        )
    }
}

export default NotesList