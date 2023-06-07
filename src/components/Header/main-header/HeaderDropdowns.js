import React, {useState} from 'react'
import SearchField from '../../SearchFields.js/SearchField'
import WishlistDdown from '../WishlistDdown';
import ShoppingCartDdown from '../ShoppingCartDdown';
import AccountDdown from '../AccountDdown';

const HeaderDropdowns = () => {
  return (
    <div className="dropdown-actions">

        <SearchField classNames='elem header-search-field' />

        <WishlistDdown className='elem fav' />
        
        <ShoppingCartDdown className='elem cart' />

        <AccountDdown className='elem account'/>
        
    </div>
  )
}

export default HeaderDropdowns