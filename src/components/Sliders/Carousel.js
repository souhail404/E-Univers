import React, {useRef} from 'react'
import './Carousel.css'
import {AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'


const Carousel = (props) => {
    const slider = useRef();

    const handleMoveLeft = () =>{ 
        if(slider.current.clientWidth < 500 ){
            slider.current.scrollLeft = slider.current.scrollLeft - 200;
        }
        else{
            slider.current.scrollLeft = slider.current.scrollLeft - 400;
        }         
    }  

    const handleMoveRight = () =>{
        if(slider.current.clientWidth < 500 ){
            slider.current.scrollLeft = slider.current.scrollLeft + 200;
        }
        else{
            slider.current.scrollLeft = slider.current.scrollLeft + 400;
        }  
    }  
    
    return (
        <div className={'carousel-wrpr ' + props.className}>
            <div className="carousel" ref={slider}>
                {props.children}
            </div>
            
            <div className="move move-left"  onClick={()=>handleMoveLeft()}><AiOutlineArrowLeft /></div>
            <div className="move move-right" onClick={()=>handleMoveRight()}><AiOutlineArrowRight /></div>
        </div>
    )
}

const CarouselElem = (props) => {
    return ( 
        <div key={props.key} className="carousel-elem">
            {props.children}
        </div>
    );
}

export { Carousel , CarouselElem}