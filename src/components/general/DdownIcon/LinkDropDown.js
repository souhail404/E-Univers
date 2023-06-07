import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './LinkDropDown.css'

const LinkDropDown = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log(props)
    return (  
    <div  
        className={'link-dd ' + props.className} 
        onMouseEnter={()=>{setMenuOpen(true)} }
        onMouseLeave={()=>{setMenuOpen(false)}}
    >
      <div className="link-dd-btn-wrpr" onClick={()=>{setMenuOpen(false)}}>
          {props.children[0]}
          
      </div>     
      {menuOpen && <div className="link-dd-menu-wrpr"> <LinkDropDownMenu> {props.children[1]} </LinkDropDownMenu> </div>}
    </div>
  )
}

const LinkDropDownBtn = (props) =>{ 
  return ( 
      <Link to={'/'} className='link-dd-btn' key={'link'} > 
          {props.children}
          <span className='qte'>{ props.qte }</span>
      </Link>
    );
}

const LinkDropDownMenu = (props) =>{
  return (
    <>
      {props.children}
    </> 
  );
}
export { LinkDropDown, LinkDropDownBtn, LinkDropDownMenu }