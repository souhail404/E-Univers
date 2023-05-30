import React from 'react'
import {Link} from 'react-router-dom'

const MoreInfoLinks = () => {
  return (
    <>
        <Link className='link'>Support</Link>
        <span className='separator'></span>
        <Link className='link'>Help</Link>
        <span className='separator'></span>
    </>
    
  )
}

export default MoreInfoLinks