import React , {useState , useEffect} from 'react'
import {AiOutlineMenu , AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import HeaderSearchField from '../SearchFields/HeaderSearchField'
import DdCart from '../DropDownAtHover/DdCart';
import DdWishlist from '../DropDownAtHover/DdWishlist';
import DdAccount from '../DropDownAtHover/DdAccount';
import { DropDownAtClick, DdcBtn , DdcMenu } from '../DropDownAtClick/DropDownAtClick';

// Layout Main Component
const MainHeader = () => {
  return (
    <div className="main-header">
        <div className="container inline-p">

            <BurgerMenu />

            <Logo />

            <Categories />

            <div className="right-side--header">
                <HeaderSearchField classNames='ls-elem search-field--header' />
                <DdWishlist className='ls-elem fav' linkto='/wishlist/ '/>
                <DdCart className='ls-elem cart' linkto='/shopping-cart/' />
                <DdAccount className='ls-elem account' linkto='account'/>
            </div>

        </div>
    </div>
  )
}


const BurgerMenu = () => {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="phone-menu--header">
        <div className="burger-btn" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <AiOutlineMenu className='burger-icon'/>
        </div>
        {menuOpen && <div className="menu-wrpr"></div>}
    </div>
  )
}

const Logo = () => {
  return (
    <div className="logo--header">
        <Link to={''} className='link-img'>
            <div className="icon">
                <img src="/logo/red.png" alt="logo"/>
            </div>
        </Link>
    </div>
  )
}

const Categories = () => {
  const [categories , setCategories] = useState()
  useEffect(()=>{
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `https://dummyjson.com/products/categories`
        )
      ).json();

    
    setCategories(data);
  };

  dataFetch();
  } , [])
  return (
    <div className="categories--header">
        
        <DropDownAtClick className="categories-dd--header">
          <DdcBtn>
              <p>Categories</p>  
              <AiOutlineDown className='icon open-icon' />
              <AiOutlineUp className='icon close-icon' />
          </DdcBtn>
          <DdcMenu>
            <div className="categories-dd-menu">
              <ul>
                {categories &&
                  categories.map((categorie, i)=>{
                    return (
                      <>
                        <li key={i}><Link className='link'>{categorie}</Link></li>
                      </>
                    )
                  })
                }
              </ul>
            </div>
          </DdcMenu>
        </DropDownAtClick>

        <ul className='links-wrapper'>
            {categories &&
              categories.slice(0, 5).map((categorie, i)=>{
                return (
                  <>
                    <li key={i}><Link className='link'>{categorie}</Link></li>
                    <span key={i} className='separator'></span>
                  </>
                )
              })
            }
        </ul>
    </div>
  )
}



export default MainHeader