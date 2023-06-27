import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";


const ProductCard = (props) => {
    const oldprice = Math.trunc(props.productData.price + (props.productData.price * props.productData.discountPercentage/100));
  return (
    <div className='card-wrpr'>
        <div className="img-wrpr">
            <Link to={`product/${props.productData.id}`} className='link-img'>
                <img src={props.productData.images[0]} alt="product" />
            </Link>
            <div className="links">
                <Link className='link'>
                    <AiOutlineEye />
                </Link>
                <div className='link'>
                    <BsCartPlus />
                </div>
                <div className='link'>
                    <AiOutlineHeart/>
                </div>
            </div>  
            <div className="discount">
                <p>-{props.productData.discountPercentage}%</p>
            </div>
        </div>
        
        <div className="info-wrpr">
            <div className="name">
                <Link to={`product/${props.productData.id}`} className='link-name'>
                    <p className="txt">{props.productData.title}</p>
                </Link>
            </div>
            <div className="price">
                <div className="cur-price">
                    <p className="txt">{props.productData.price} Dhs</p>
                </div>
                <div className="old-price">
                    <p className="txt">{oldprice} Dhs</p>                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard