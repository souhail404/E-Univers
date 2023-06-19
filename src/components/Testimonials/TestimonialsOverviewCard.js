import React from 'react'
import './TestimonialsOverviewCard.css';
import Rating from './Rating';

const TestimonialsOverviewCard = (props) => {
  return (
    <div className="testimonials-overview">
        <div className="rating-v">
            <p className='rate-num'>{props.rate} / 5</p>
            <div className="rate-stars">
                <Rating rate={props.rate} />
            </div>
            <p className='rate-count'>Reviews (32)</p>
        </div>
    </div>
  )
}

export default TestimonialsOverviewCard