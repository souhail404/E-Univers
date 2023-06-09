import React from 'react'
import { DropDownAtHover, DdBtn, DdMenu } from '../DropDownAtHover/DropDownAtHover'
import { AiOutlineShoppingCart} from 'react-icons/ai'

const DdCart = (props) => {
  return (
    <DropDownAtHover  className={props.className}>
        <DdBtn qte={2} linkto={props.linkto}> 
            <AiOutlineShoppingCart /> 
        </DdBtn>
        <DdMenu>
            <ShoppingCartMenu />
        </DdMenu>
    </DropDownAtHover>
  )
}

const ShoppingCartMenu = () =>{
    return (
    <>

    </>
    )
}

export default DdCart