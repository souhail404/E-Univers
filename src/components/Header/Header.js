import React from 'react'
import './style.css'

import MainHeader from './MainHeader'
import TopHeader from './TopHeader'


const Header = () => {
  return (
    <header className='header' id='header'>
      <div className="container--header">
        <TopHeader />
        <MainHeader />
      </div>
    </header>
  )
}

export default Header