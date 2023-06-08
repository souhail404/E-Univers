import React from 'react'
import { DropDownAtHover, DdBtn, DdMenu } from './DropDownAtHover'
import { AiOutlineUser } from 'react-icons/ai'

const DdAccount = (props) => {
  return (
    <DropDownAtHover  className={props.className}>
        <DdBtn>
          <AiOutlineUser /> 
        </DdBtn>
        <DdMenu>
            <AccountMenu />
        </DdMenu>
    </DropDownAtHover>
  )
}

const AccountMenu = () =>{
    return (
    <>

    </>
    )
}

export default DdAccount