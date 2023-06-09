import React from 'react'
import { DropDownAtHover, DdBtn, DdMenu } from '../DropDownAtHover/DropDownAtHover'
import {AiOutlineHeart} from 'react-icons/ai'

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
    return (
    <>

    </>
    )
}

export default DdWishlist