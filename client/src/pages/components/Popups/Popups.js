import React from 'react'

import "./styles.css"

const Popups = (props) => {
    // return (
    // <div className='popups'>
    //     <div className='popups__card'>
    //         <div className='popups__card__message'>
    //             {props.message}
    //         </div>
    //     </div>
    // </div>
    // )
    console.log("props", props)
    if (props.ver == "passive") {
        console.log("its passive")
        return (
            <div className='popups back_passive '>
                <div className='popups__card'>
                    <div className='popups__card__message'>
                        ✔ {props.message}
                    </div>
                </div>
                <div className='popups__close'>
                    <div className='popups__card_message' onClick={props.set}>
                        ✖
                    </div>
                </div>
            </div>
          )
    } else if (props.ver == "active") {
        return (
            <div className='popups back_active'>
                <div className='popups__bg'>
                    <div className='popups__card'>

                    </div>
                </div>
            </div>
        )
    }

}

export default Popups