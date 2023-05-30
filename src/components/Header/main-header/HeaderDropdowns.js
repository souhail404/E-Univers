import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import SearchField from '../../SearchFields.js/SearchField'

const HeaderDropdowns = () => {
  return (
    <div className="dropdown-actions">
        <SearchField classNames='elem header-search-field' />
        <div className="elem fav">
            <Link className='link'><AiOutlineHeart /></Link>
        </div>
        <div className="elem cart">
            <Link className='link'><AiOutlineShoppingCart /></Link>
        </div>
        <div className="elem account">
            <Link className='link'><AiOutlineUser /></Link>
        </div>
    </div>
  )
}

export default HeaderDropdowns