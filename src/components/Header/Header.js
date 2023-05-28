import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineMenu, AiOutlineHeart, AiOutlineDown, AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <header className='header--11' id='header--111'>
      <div className="container--11">
        <div className="header--111">
          <div className="container">
            <div className='hero--h'>
              <p className='txt'>Welcome to your Electronics Univers !</p>
            </div>
            <div className='links'>
              <Link className='link'>Support</Link>
              <span className='separator'></span>
              <Link className='link'>Help</Link>
              <span className='separator'></span>
              <div className='social-media'>
                <Link className='link'> <AiOutlineInstagram className='icon'/> </Link>
                <Link className='link'> <AiOutlineFacebook className='icon'/> </Link>
                <Link className='link'> <AiOutlineTwitter className='icon' /> </Link>
              </div>
            </div>    
          </div>
        </div>
        <div className="header--112">
          <div className="container">
            <div className="phone-menu">
              <div className="menu-btn">
                <AiOutlineMenu/>
              </div>
              <div className="menu">

              </div>
            </div>
            <div className="logo">
              <Link className='link-img'>
                <div className="icon">
                  <img src="logo/red.png" alt="" />
                </div>
              </Link>
            </div>
            <div className="categories">
              <div className="links-wrapper-small">
                  <div className="drop-btn">
                    Categories <AiOutlineDown className='icon' />
                  </div>
                  <div className="drop-menu">

                  </div>
              </div>
              <ul className='links-wrapper-big'>
                <li><Link className='link'>Phones</Link></li>
                <span className='separator'></span>
                <li><Link className='link'>Laptops</Link></li>
                <span className='separator'></span>
                <li><Link className='link'>Audio</Link></li>
                <span className='separator'></span>
                <li><Link className='link'>Photography</Link></li>
                <span className='separator'></span>
                <li><Link className='link'>Accessories</Link></li>
                <span className='separator'></span>
                <li><Link className='link'>Office</Link></li>
                <span className='separator'></span>
              </ul>
            </div>
            <div className="actions">
              <div className="elem search-field">
                <form action="">
                  <input className='input' type="text" placeholder='Search ...' />
                  <button className='submit'>  <AiOutlineSearch  className='icon'/> </button>
                </form>
              </div>
              <div className="elem fav">
                <Link className='link'><AiOutlineHeart /></Link>
              </div>
              <div className="elem cart">
                <Link className='link'><AiOutlineShoppingCart /></Link>
              </div>
              <div className="elem account">
                <Link className='link'><AiOutlineUser /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header