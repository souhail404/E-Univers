import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook , AiFillGoogleCircle  } from 'react-icons/ai'

import LoginForm from '../components/Forms/LoginForm'

const Login = () => {
  
  return (
    <section className='m-sec login-page-sec bg-sec-light'>
      <div className="sec-container">
        <div className="header">
          <div className="mini-logo">
            <img className='mini-logo-img' src="/logo/red.png" alt="" />
          </div>
          <div className="welcm-txt">
            <p>Welcome to Electro Univers</p>
          </div>
          <div className="todo-txt">
            <p>Enter your email address or phone number to sign in or create an account.</p>
          </div>
        </div>
        <LoginForm />
        <div className="separator-or">
          <div className="line">
            <span></span>
          </div>
          <p>Or</p>
          <div className="line">
            <span></span>
          </div>
        </div>
        <div className="lgin-with-api">
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
      </div>
    </section>
  )
}

export default Login