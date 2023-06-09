import React from 'react'
import './style.css'

import TopHeader from '../TopHeader/TopHeader'
import MainHeader from '../MainHeader/MainHeader'


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