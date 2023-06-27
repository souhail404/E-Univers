import React, { useState, useEffect } from 'react'
import { DropDownAtHover, DdBtn, DdMenu } from '../DropDownAtHover/DropDownAtHover'
import {AiOutlineHeart} from 'react-icons/ai'
import {IoHeartDislikeOutline} from 'react-icons/io5'

import './DdMenu.css'
import { Link } from 'react-router-dom'
import PrdtCardHoriz from '../ProductCard/PrdtCardHoriz'

const DdWishlist = (props) => {
  return (
    <DropDownAtHover  className={props.className}>
        <DdBtn qte={4} linkto={props.linkto}>
            <AiOutlineHeart /> 
        </DdBtn>
        <DdMenu>
            <WishlistMenu />
        </DdMenu>
    </DropDownAtHover>
  )
}

const WishlistMenu = () =>{
  const [data, setData] = useState();
  const [menuFull , setMenuFull] = useState(true);  

  useEffect(()=>{
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://dummyjson.com/products/category/laptops`
        )
      ).json();

    // set state when the data received
    setData(data.products);
  };

  dataFetch();
  }, [])

  return (
    <div className='mini-menu-wrpr'>
      <div className="header">
        <h3>your wishlist</h3>
      </div>

      {!data && <div className="menu empty-menu">
        <div className="m-content">
          <IoHeartDislikeOutline className='icon' />
          <p>You didn't add any product to your wishlist</p>
        </div>
      </div>}

      {data &&<div className="menu full-menu">
        <div className='m-content'>
          {data &&
              data.map((prd , i)=>{
                return <PrdtCardHoriz className='mini-menu-el-cards' key={i} product={prd} />
              })
          }
          <Link className='page-link'>
            Go to Wishlist Page
          </Link>
        </div>
      </div>}
    </div>
    )
}

export default DdWishlist