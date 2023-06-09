import React , {useState} from 'react'
import {AiOutlineMenu , AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import HeaderSearchField from '../SearchFields/HeaderSearchField'
import DdCart from '../DropDownAtHover/DdCart';
import DdWishlist from '../DropDownAtHover/DdWishlist';
import DdAccount from '../DropDownAtHover/DdAccount';
import { DropDownAtClick, DdcBtn , DdcMenu } from '../DropDownAtClick/DropDownAtClick';

// Layout Main Component
const MainHeader = () => {
  return (
    <div className="main-header">
        <div className="container inline-p">

            <BurgerMenu />

            <Logo />

            <Categories />

            <div className="right-side--header">
                <HeaderSearchField classNames='ls-elem search-field--header' />
                <DdWishlist className='ls-elem fav' linkto='/wishlist/ '/>
                <DdCart className='ls-elem cart' linkto='/shopping-cart/' />
                <DdAccount className='ls-elem account' linkto='account'/>
            </div>

        </div>
    </div>
  )
}


const BurgerMenu = () => {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="phone-menu--header">
        <div className="burger-btn" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <AiOutlineMenu className='burger-icon'/>
        </div>
        {menuOpen && <div className="menu-wrpr"></div>}
    </div>
  )
}

const Logo = () => {
  return (
    <div className="logo--header">
        <Link to={`/`} className='link-img'>
            <div className="icon">
                <img src="logo/red.png" alt="" />
            </div>
        </Link>
    </div>
  )
}

const Categories = () => {
  return (
    <div className="categories--header">
        
        <DropDownAtClick className="categories-dd--header">
          <DdcBtn>
              <p>Categories</p>  
              <AiOutlineDown className='icon open-icon' />
              <AiOutlineUp className='icon close-icon' />
          </DdcBtn>
          <DdcMenu>
            <div className="categories-dd-menu">
              test
            </div>
          </DdcMenu>
        </DropDownAtClick>

        <ul className='links-wrapper'>
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



export default MainHeader