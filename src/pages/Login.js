import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook , AiFillGoogleCircle  } from 'react-icons/ai'

const Login = () => {
  return (
    <section className='m-sec login-page-sec bg-sec-light'>
      <div className="sec-container">
        <div className="header">
          <div className="mini-logo">
            <img className='mini-logo-img' src="/logo/red.png" alt="" />
          </div>
          <div className="welcm-txt">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quibusdam quidem animi quasi quo officiis!</p>
          </div>
        </div>
        <form action="" className='lgin-form-wrpr'>
          <div className='form-line'>
            <input type="text" id='lgin-username' name='lgin-username' placeholder='Your Email or Phone number'/>
          </div>
          <div className='form-line'>
            <input type="password" id='lgin-password' name='lgin-password' placeholder='Your Password' />
          </div>
          <div className='form-line'>
            <input type="submit" className='submit-input'  />
          </div>
        </form>
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