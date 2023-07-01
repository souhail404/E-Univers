import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook , AiFillGoogleCircle  } from 'react-icons/ai'

import LoginForm from '../components/Forms/LoginForm'

const Login = () => {
  
  return (
    <section className='m-sec form-page-sec login-page-sec bg-sec-light'>
      <div className="sec-container">
        
        <SecHaeder />
        
        <LoginForm className='page-form login-form'/> 
        
        <SeparatorOr />

        <LoginWithApi />
        
      </div>
    </section>
  )
}

const SecHaeder = () => {
  return (
    <>
      <div className="header">
          <div className="mini-logo">
            <img className='mini-logo-img' src="/logo/red.png" alt="" />
          </div>
          <div className="welcm-txt">
            <p>Welcome to Electro Univers</p>
          </div>
      </div>
    </>
  )
}

const SeparatorOr = () => {
  return (
    <>
      <div className="separator-or">
          <div className="line">
            <span></span>
          </div>
          <p>Or</p>
          <div className="line">
            <span></span>
          </div>
      </div>
    </>
  )
}

const LoginWithApi = () => {
  return (
    <>
      <div className="login-with-api">
          <div className="api-link-wrpr">
            <Link className='api-link facebook'>
              <div className="icon-wrpr">
                <AiFillFacebook  className='icon' />
              </div>
              <div className="txt-wrpr">
                <p>Login using Facebook</p>
              </div>
            </Link>
          </div>
          <div className="api-link-wrpr">
            <Link  className='api-link google'>
              <div className="icon-wrpr">
                <AiFillGoogleCircle className='icon' />
              </div>
              <div className="txt-wrpr">
                <p>Login using Google</p>
              </div>
            </Link>
          </div>
      </div>
    </>
  )
}

export default Login