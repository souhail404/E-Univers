import React from 'react'
import {BsStarFill , BsStarHalf , BsStar} from 'react-icons/bs'

const Rating = (props) => {
    const rate= props.rate;
    
    const x = ()=>{
        if(0 < rate &&  rate < 0.25){
            return  <div className="rating">
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(0.25 <= rate &&  rate < 0.75){
            return  <div className="rating">
                        <span className="star"><BsStarHalf/></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(0.75 <= rate &&  rate < 1.25){
            return  <div className="rating">
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(1.25 <= rate &&  rate < 1.75){
            return  <div className="rating">
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarHalf /></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(1.75 <= rate &&  rate < 2.25){
            return  <div className="rating">
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStar/></span>
                        <span className="star"><BsStar/></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(2.25 <= rate &&  rate < 2.75){
            return  <div className="rating">
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarHalf /></span>
                        <span className="star"><BsStar/></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(2.75 <= rate &&  rate < 3.25){
            return  <div className="rating">
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStar/></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(3.25 <= rate &&  rate < 3.75){
            return  <div className="rating">
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarHalf /></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if( 3.75 <= rate   && rate < 4.25){
            return  <div className="rating">
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>
                        <span className="star"><BsStarFill /></span>  
                        <span className="star"><BsStar/></span>
                    </div>
        }
        else if(4.25 <= rate  && rate < 4.75){
            return  <div className="rating">
                        <span className="star"><BsStarFill/></span>
                        <span className="star"><BsStarFill/></span>
                        <span className="star"><BsStarFill/></span>
                        <span className="star"><BsStarFill/></span>  
                        <span className="star"><BsStarHalf /></span>
                    </div>
        }
        else if(4.75 <= rate){
            
            return <div className="rating">
                        <span className="star"><BsStarFill/></span>
                        <span className="star"><BsStarFill/></span>
                        <span className="star"><BsStarFill/></span>
                        <span className="star"><BsStarFill/></span>  
                        <span className="star"><BsStarFill/></span>
                    </div>
        }
    }
    

    return (
        <>
            {x()}
        </>
  )
}

export default Rating