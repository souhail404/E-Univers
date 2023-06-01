import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const HeaderPhoneMenu = () => {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="phone-menu">
        <div className="phone-menu-btn" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <AiOutlineMenu/>
        </div>
        {menuOpen && <div className="phone-menu-container"></div>}
    </div>
  )
}

export default HeaderPhoneMenu