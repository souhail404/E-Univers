import React from 'react'
import './PrdtCardHoriz.css'
import { Link } from 'react-router-dom'

const PrdtCardHoriz = (props) => {
  return (
    <div className={'horizontal-card-wrpr ' + props.className}>
        <Link to={`http://localhost:3000/product/${props.product.id}`} className="img">
            <img src={props.product.images[0]} alt="" />
        </Link>
        <div className="infos">
            <Link to={`http://localhost:3000/product/${props.product.id}`} className="name">
                <p className="txt">{props.product.title} Samsung horizontal test</p>
            </Link>
            <div className="price">
                <p className='cur-price'>{props.product.price} Dhs</p>
                <p className="old-price">{ Math.trunc(props.product.price + (props.product.price * props.product.discountPercentage/100))} Dhs</p>
            </div>
        </div>
    </div>
  )
}
export default PrdtCardHoriz