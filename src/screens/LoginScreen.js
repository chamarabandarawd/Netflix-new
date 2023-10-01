import React, { useState } from 'react';
import "./LoginScreen.css";
import SignUpScreen from './SignUpScreen';

export default function LoginScreen() {

  const [signIn, setSignIn] = useState(false)

  return (
    <div
      className='loginScreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
          alt='netflix logo'
        />
        <button
          onClick={() => setSignIn(true)}
          className='loginScreen_button'>
          Sign In
        </button>
        <div className='loginScreen__gradient' />
      </div>
      <div className='loginScreen__body'>
        {signIn ? (
        <SignUpScreen />
        ) : (
          <>
            <h1> Unliited films, TV prgrammes and more.</h1>
            <h2> Watch anywhere. Cancle at any time.</h2>
            <h3>Ready to watch? Enter your email
              to create or restart your membership.</h3>
            <div className='loginScreen_input'>
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className='loginScreen_getStarted'>
                  Get STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
