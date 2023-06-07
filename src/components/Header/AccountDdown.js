import React from 'react'
import { LinkDropDown, LinkDropDownBtn, LinkDropDownMenu } from '../general/DdownIcon/LinkDropDown'
import { AiOutlineShoppingCart} from 'react-icons/ai'

const AccountDdown = (props) => {
  return (
    <LinkDropDown  className={props.className}>
        <LinkDropDownBtn qte={2}>
            <AiOutlineShoppingCart /> 
        </LinkDropDownBtn>
        <LinkDropDownMenu>
            <AccountMenu />
        </LinkDropDownMenu>
    </LinkDropDown>
  )
}

const AccountMenu = () =>{
    return (
    <>

    </>
    )
}

export default AccountDdown