import React, {useRef} from 'react'
import './Banner.css'
import {AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'


const Banner = (props) => {
    const slider = useRef();

    const handleMoveLeft = () =>{ 
        if(slider.current.scrollLeft < 50){
            slider.current.scrollLeft = slider.current.scrollWidth - slider.current.clientWidth ; 
        }     
        else{
            slider.current.scrollLeft = slider.current.scrollLeft - slider.current.clientWidth;
        }       
    }  

    const handleMoveRight = () =>{
        if( slider.current.scrollLeft + slider.current.clientWidth > slider.current.scrollWidth - 50 ){
            slider.current.scrollLeft = 0;
        }
        else{
            slider.current.scrollLeft = slider.current.scrollLeft + slider.current.clientWidth;
        }  
    }  
    
    return (
        <div className={'slider-wrpr ' + props.className}>
            <div className="slider" ref={slider}>
                {props.children}
            </div>
            
            <div className="move move-left"  onClick={()=>handleMoveLeft()}><AiOutlineArrowLeft /></div>
            <div className="move move-right" onClick={()=>handleMoveRight()}><AiOutlineArrowRight /></div>
        </div>
    )
}

const BannerElem = (props) => {
    return(
        <div className="slide-wrpr">
            <img src={`/banner/${props.smimg}`} alt="small banner" className='img small-img' />
            <img src={`/banner/${props.laimg}`} alt="large banner" className='img large-img' />
        </div>
    );
}


export { Banner, BannerElem }