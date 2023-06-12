import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";


const ProductCard = (props) => {
  return (
    <div className='card-wrpr'>
        <div className="img-wrpr">
            <Link className='link-img'>
                <img src="/products/headphone.jpg" alt="product" />
            </Link>
            <div className="links">
                <Link className='link'>
                    <AiOutlineEye />
                </Link>
                <Link className='link'>
                    <BsCartPlus />
                </Link>
                <Link className='link'>
                    <AiOutlineHeart/>
                </Link>
            </div>  
            <div className="discount">
                <p>70%</p>
            </div>
        </div>
        
        <div className="info-wrpr">
            <div className="name">
                <Link className='link-name'>
                    <p className="txt">Studio³ Wireless | Premium Noise Cancelling Over-Ear Headphones - Beats</p>
                </Link>
            </div>
            <div className="price">
                <div className="cur-price">
                    <p className="txt">145.00 Dhs</p>
                </div>
                <div className="old-price">
                    <p className="txt">235.00 Dhs</p>                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard