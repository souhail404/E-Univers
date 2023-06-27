import React, { useState } from 'react'
import { DropDownAtHover, DdBtn, DdMenu } from './DropDownAtHover'
import { AiOutlineUser, AiOutlineMessage,AiOutlineInbox } from 'react-icons/ai'
import { RiCoupon2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const DdAccount = (props) => {
  return (
    <DropDownAtHover  className={props.className}>
        <DdBtn linkto={props.linkto}>
          <AiOutlineUser /> 
        </DdBtn>
        <DdMenu>
            <AccountMenu />
        </DdMenu>
    </DropDownAtHover>
  )
}

const AccountMenu = () =>{
    const [connected , setConnected] = useState(true);
    return (
      <div className='mini-menu-wrpr account'>
        {!connected && <div className="menu">
          <ul className='acc-links-wrpr'>
              <li className='acc-link'>
                <Link className='link-a spcl login'>Login</Link>
              </li>
              <li className='acc-link'>
                <Link className='link-a'> <AiOutlineUser className='icon'/> Your Account</Link>
              </li>
              <li className='acc-link'>
                <Link className='link-a'><AiOutlineInbox className='icon'/> Your commands</Link>
              </li>
              <li className='acc-link'>
                <Link className='link-a'> <RiCoupon2Line className='icon'/> coupon</Link>
              </li>
          </ul>    
        </div>}
        {connected && <div className="menu">
          <ul className='acc-links-wrpr'>
              <li className='acc-link'>
                <Link className='link-a'> <AiOutlineUser className='icon'/> Your Account</Link>
              </li>
              <li className='acc-link'>
                <Link className='link-a'><AiOutlineInbox className='icon'/> Your commands</Link>
              </li>
              <li className='acc-link'>
                <Link className='link-a'> <AiOutlineMessage className='icon'/> your Inbox</Link>
              </li >
              <li className='acc-link'>
                <Link className='link-a'> <RiCoupon2Line className='icon'/> coupon</Link>
              </li>
              <li className='acc-link'>
                <Link className='link-a spcl logout'>logout</Link>
              </li>
          </ul>
        </div>}
      </div>
    )
}

export default DdAccount