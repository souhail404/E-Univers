import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'

const SocialmediaLinks = () => {
  return (
    <div className='social-media'>
        <Link className='link'> <AiOutlineInstagram className='icon'/> </Link>
        <Link className='link'> <AiOutlineFacebook className='icon'/> </Link>
        <Link className='link'> <AiOutlineTwitter className='icon' /> </Link>
    </div>
  )
}

export default SocialmediaLinks