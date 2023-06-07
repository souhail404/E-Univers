import React from 'react'
import { LinkDropDown, LinkDropDownBtn, LinkDropDownMenu } from '../general/DdownIcon/LinkDropDown'
import { AiOutlineUser } from 'react-icons/ai'

const ShoppingCartDdown = (props) => {
  return (
    <LinkDropDown  className={props.className}>
        <LinkDropDownBtn qte={2}>
            <AiOutlineUser /> 
        </LinkDropDownBtn>
        <LinkDropDownMenu>
            <ShoppingCartMenu />
        </LinkDropDownMenu>
    </LinkDropDown>
  )
}

const ShoppingCartMenu = () =>{
    return (
    <>

    </>
    )
}

export default ShoppingCartDdown