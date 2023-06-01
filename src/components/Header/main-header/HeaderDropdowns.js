import React, {useState} from 'react'
import {AiOutlineHeart, AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import SearchField from '../../SearchFields.js/SearchField'
import FastCartMenu from '../../HeaderMenus/FastCartMenu/FastCartMenu';
import FastWishlistMenu from '../../HeaderMenus/FastWishlistMenu/FastWishlistMenu';
import FastAccountMenu from '../../HeaderMenus/FastAccountMenu.js/FastAccountMenu';
import { Link } from 'react-router-dom';

const HeaderDropdowns = () => {
  const [favOpen, setFavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [accOpen, setAccOpen] = useState(false);

  return (
    <div className="dropdown-actions">
        <SearchField classNames='elem header-search-field' />
        {/* WISHLIST */}
        <div className="elem fav"
          onMouseEnter={()=>{setFavOpen(true)} }
          onMouseLeave={()=>{setFavOpen(false)} }>
            <Link to={`/wishlist`} className='fast-menu-btn' onClick={()=>{setFavOpen(false)}}>
              <AiOutlineHeart /> 
              <span className='qte'>5</span> 
            </Link>
            {favOpen && <div className="menu-content"> <FastWishlistMenu />  </div>}
        </div>

        {/* SHOPPING CART */}
        <div className="elem cart"
          onMouseEnter={()=>{setCartOpen(true)} }
          onMouseLeave={()=>{setCartOpen(false)} }>
            <Link to={`/shopping-cart`} className='fast-menu-btn' onClick={()=>{setCartOpen(false)}}>
              <AiOutlineShoppingCart /> 
              <span className='qte'>2</span>
            </Link>
            {cartOpen && <div className="menu-content"> <FastCartMenu /> </div>}
        </div>

        {/* CUSTOMER ACCOUNT */}
        <div className="elem account"
          onMouseEnter={()=>{setAccOpen(true)} }
          onMouseLeave={()=>{setAccOpen(false)} }>
            <Link to={`/account`} className='fast-menu-btn' onClick={()=>{setAccOpen(false)}}>
              <AiOutlineUser />
            </Link>
            {accOpen && <div className="menu-content"> <FastAccountMenu /> </div>}
        </div>
    </div>
  )
}

export default HeaderDropdowns