import React from 'react'
import './TestimonialCard.css';
import Rating from './Rating';

const TestimonialCard = (props) => {
  return (
    <div className={'testimonial-card-wrpr ' + props.className } >
        <div className="client-rate">
            <Rating rate={props.rate} />
        </div>
        <div className="comment-title">
            <p className='txt'>{props.title}</p>
        </div>
        <div className="comment-content">
            <p className='txt'>{props.comment}</p>
        </div>
        <div className="client-details">
            <p className='txt'> <span>{props.date}</span> </p>
            <p className='txt'>par  <span>{props.name}</span> </p>
        </div>
    </div>  
  )
}

export default TestimonialCard