import React from 'react'

import "./styles.css"

const Notif = (props) => {
    console.log("checking notif", props)
    const bouton = () => {
        props.setNotif(!props.set)
    }
  return (
    <div className='notif'>
        {props.set ? (
            <div className='notif__bg'>
                <div className='notif__content'>
                    <button type="button" className='bouton' onClick={bouton}>button</button>
                </div>
            </div>
        ):(
            <div className='notif__bg disabler'>
                <div className='notif__content'>
                    <button type="button" className='bouton' onClick={bouton}>button</button>
                </div>
            </div>
        )}

    </div>
  )
}

export default Notif