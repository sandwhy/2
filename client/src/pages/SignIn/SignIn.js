import React, {useState} from 'react'

import "./styles.css"

const SignIn = () => {
  const [isSignup, setIsSignup] = useState(true)
  const switcher = () => {
    setIsSignup(!isSignup)
  }
  return (
    <div className='page'>
      <div className='block col-4'>
        <form>
          <div className='switch' onClick={switcher}>
            <div className='switch_buttonhold'>
              <div className='switch_button'></div>
            </div>
            <div className='switch_labels'>
              <div className='switch_label'>Sign In</div>
              <div className='switch_label'>Log In</div>
            </div>
          </div>
          { isSignup && <input placeholder='Username' />}
          <input placeholder='Email' />
          <input type='password' placeholder='Password' />
          {isSignup &&<input type='password' placeholder='Confirm Password' />}
          <button>SignIn</button>
          <button className='disabled'>Google</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn