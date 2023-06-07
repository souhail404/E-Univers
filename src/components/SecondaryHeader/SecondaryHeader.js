import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'

const SecondaryHeader = () => {
  return (
    <div className="top-header">
        <div className="container inline-p">
          <div className='hero--h'>
            <p className='txt'>Welcome to your Electronics Univers !</p>
          </div>

          <div className='store-links'>
            <>
              <Link className='link'>Support</Link>
              <span className='separator'></span>
              <Link className='link'>Help</Link>
              <span className='separator'></span>
            </>
            <div className='social-media'>
              <Link className='link'> <AiOutlineInstagram className='icon'/> </Link>
              <Link className='link'> <AiOutlineFacebook className='icon'/> </Link>
              <Link className='link'> <AiOutlineTwitter className='icon' /> </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SecondaryHeader