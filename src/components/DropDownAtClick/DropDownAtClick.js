import React, {useState} from 'react'


import './style.css'

const DropDownAtClick = (props) => {
      
    const [menuOpen, setMenuOpen] = useState(false);
    const openClass = menuOpen ? ' open ' : ' close ';
    return (  
    <div  className={'dd ' + props.className + openClass} >

      <div className="dd-btn-wrpr" onClick={()=>{setMenuOpen(prevMenuOpen => !prevMenuOpen)} }>
          {props.children[0]}
      </div>     

      {menuOpen && <div className="dd-menu-wrpr"> <DdcMenu> {props.children[1]} </DdcMenu> </div>}

    </div>
  )
}

const DdcBtn = (props) =>{ 
  return ( 
      <div to={'/'} className={'dd-btn ' + props.className} key={'link'} > 
          {props.children}
      </div>
    );
}

const DdcMenu = (props) =>{
  return (
    <>
      {props.children}
    </> 
  );
}


export { DropDownAtClick, DdcBtn, DdcMenu }