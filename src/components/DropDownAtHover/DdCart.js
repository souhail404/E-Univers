import React, { useState, useEffect } from 'react'
import { DropDownAtHover, DdBtn, DdMenu } from '../DropDownAtHover/DropDownAtHover'
import { AiOutlineShoppingCart, AiOutlineEye, AiOutlineHeart} from 'react-icons/ai'
import {BsCartX, BsCartPlus} from 'react-icons/bs'

import './DdMenu.css'
import { Link } from 'react-router-dom'
import PrdtCardHoriz from '../ProductCard/PrdtCardHoriz'


const DdCart = (props) => {
  return (
    <DropDownAtHover  className={props.className}>
        <DdBtn qte={2} linkto={props.linkto}> 
            <AiOutlineShoppingCart /> 
        </DdBtn>
        <DdMenu>
            <ShoppingCartMenu/>
        </DdMenu>
    </DropDownAtHover>
  )
}

const ShoppingCartMenu = (props) =>{
  const [data, setData] = useState();
    

  useEffect(()=>{
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://dummyjson.com/products?limit=6`
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
          <h3>your shopping cart</h3>
        </div>

      {!data && <div className="menu empty-menu">
        <div className="m-content">
          <BsCartX className='icon' />
          <p>You didn't add any product to your Shopping cart</p>
        </div>
      </div>}

      {data &&<div className="menu full-menu">
        <div className='m-content'>
          {data &&
              data.map((prd , i)=>{
                return (<PrdtCardHoriz className='mini-menu-el-cards' key={i} product={prd}> 
                            <div className='cart-actions'>
                              <Link className='act'>
                                  <AiOutlineEye />
                              </Link>
                              <div className='act'>
                                  <BsCartPlus />
                              </div>
                              <div className='act'>
                                  <AiOutlineHeart/>
                              </div>
                            </div>
                        </PrdtCardHoriz>)


              })
          }
          <div className="total-overview">
            <p>Total :</p>
            <p>339,00 Dhs</p>
          </div>
          <Link className='page-link'>
            see all
          </Link>
        </div>
      </div>}
      {props.children}
    </div>
    )
}

export default DdCart