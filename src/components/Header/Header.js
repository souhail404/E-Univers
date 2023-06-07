import React from 'react'
import './Header.css'

import SecondaryHeader from '../SecondaryHeader/SecondaryHeader'
import PrimaryHeader from '../PrimaryHeader/PrimaryHeader'


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