import React from 'react'
import { LinkDropDown, LinkDropDownBtn, LinkDropDownMenu } from '../general/DdownIcon/LinkDropDown'
import {AiOutlineHeart} from 'react-icons/ai'

const WishlistDdown = (props) => {
  return (
    <LinkDropDown  className={props.className}>
        <LinkDropDownBtn qte={4}>
            <AiOutlineHeart /> 
        </LinkDropDownBtn>
        <LinkDropDownMenu>
            <WishlistMenu />
        </LinkDropDownMenu>
    </LinkDropDown>
  )
}

const WishlistMenu = () =>{
    return (
    <>

    </>
    )
}

export default WishlistDdown