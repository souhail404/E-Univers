import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineDown} from 'react-icons/ai'


const HeaderCategoriesLinks = () => {
  return (
    <div className="categories">
        <div className="links-wrapper-small">
            <div className="drop-btn">
                Categories <AiOutlineDown className='icon' />
            </div>
            <div className="drop-menu">

            </div>
        </div>
        <ul className='links-wrapper-big'>
            <li><Link className='link'>Phones</Link></li>
            <span className='separator'></span>
            <li><Link className='link'>Laptops</Link></li>
            <span className='separator'></span>
            <li><Link className='link'>Audio</Link></li>
            <span className='separator'></span>
            <li><Link className='link'>Photography</Link></li>
            <span className='separator'></span>
            <li><Link className='link'>Accessories</Link></li>
            <span className='separator'></span>
            <li><Link className='link'>Office</Link></li>
            <span className='separator'></span>
        </ul>
    </div>
  )
}

export default HeaderCategoriesLinks