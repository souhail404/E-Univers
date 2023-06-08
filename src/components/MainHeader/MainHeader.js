import React , {useState} from 'react'
import {AiOutlineMenu , AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import SearchField from '../SearchFields/HeaderSearchField'
import DdCart from '../DropDownAtHover/DdCart';
import DdWishlist from '../DropDownAtHover/DdWishlist';
import DdAccount from '../DropDownAtHover/DdAccount';

// Layout Main Component
const PrimaryHeader = () => {
  return (
    <div className="main-header">
        <div className="container inline-p">

            <BurgerMenu />

            <Logo />

            <Categories />

            <div className="dropdown-actions">
                <SearchField classNames='elem header-search-field' />
                <DdAccount className='elem fav' />
                <DdCart className='elem cart' />
                <DdWishlist className='elem account'/>
            </div>

        </div>
    </div>
  )
}


const BurgerMenu = () => {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="phone-menu">
        <div className="phone-menu-btn" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <AiOutlineMenu/>
        </div>
        {menuOpen && <div className="phone-menu-container"></div>}
    </div>
  )
}

const Logo = () => {
  return (
    <div className="logo">
        <Link to={``} className='link-img'>
            <div className="icon">
                <img src="logo/red.png" alt="" />
            </div>
        </Link>
    </div>
  )
}

const Categories = () => {
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



export default PrimaryHeader