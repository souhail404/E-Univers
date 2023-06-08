import React from 'react'
import './style.css'

import SecondaryHeader from '../TopHeader/TopHeader'
import PrimaryHeader from '../MainHeader/MainHeader'


const Header = () => {
  return (
    <header className='header' id='header'>
      <div className="container--header">
        <SecondaryHeader />
        <PrimaryHeader />
      </div>
    </header>
  )
}

export default Header