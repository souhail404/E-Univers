import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import './style.css'

const DropDownAtHover = (props) => {
      
    const [menuOpen, setMenuOpen] = useState(false);
    return (  
    <div  
        className={'link-dd ' + props.className} 
        onMouseEnter={()=>{setMenuOpen(true)} }
        onMouseLeave={()=>{setMenuOpen(false)}}
    >
      <div className="link-dd-btn-wrpr" onClick={()=>{setMenuOpen(false)}}>
          {props.children[0]}
          
      </div>     
      {menuOpen && <div className="link-dd-menu-wrpr"> <DdMenu> {props.children[1]} </DdMenu> </div>}
    </div>
  )
}

const DdBtn = (props) =>{ 
  return ( 
      <Link to={props.linkto} className='link-dd-btn' key={'link'} > 
          {props.children}
          {props.qte && <span className='qte'>{ props.qte }</span>}
      </Link>
    );
}

const DdMenu = (props) =>{
  return (
    <>
      {props.children}
    </> 
  );
}


export { DropDownAtHover, DdBtn, DdMenu }