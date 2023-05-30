import React from 'react'
import { Link } from 'react-router-dom'


const HeaderLogo = () => {
  return (
    <div className="logo">
        <Link className='link-img'>
            <div className="icon">
                <img src="logo/red.png" alt="" />
            </div>
        </Link>
    </div>
  )
}

export default HeaderLogo