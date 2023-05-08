import React from 'react'

import "./styles.css"

const Popups = () => {
    console.log("popups props",)
    return (
    <div className='popups'>
        <div className='popups__card'>
            <div className='popups__card__message'>
                {/* {props.message} */}
            </div>
        </div>
    </div>
    )
    // if (props.ver == "passive") {
    //     return (
    //         <div className='popups'>
    //             <div className='popups__card'>
    //                 <div className='popups__card__message'>
    //                     {props.message}
    //                     <p>checking</p>
    //                 </div>
    //             </div>
    //         </div>
    //       )
    // } else if (props.ver == "active") {
    //     return (
    //         <div className='popups'>
    //             <div className='popups__bg'>
    //                 <div className='popups__card'>

    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }

}

export default Popups