import React from 'react'

import "./styles.css"

const SignIn = () => {
  return (
    <div className='page'>
      <div className='block col-4'>
        <form>
          <div className='switch'>

          </div>
          <input placeholder='Username' />
          <input placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirm Password' />
          <button>SignIn</button>
          <button className='disabled'>Google</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn