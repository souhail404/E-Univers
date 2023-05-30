import React from 'react'
import HeroText from './top-header/HeroText'
import StoreLinks from './top-header/StoreLinks'

const TopHeader = () => {
  return (
    <div className="top-header">
        <div className="container inline-p">
            <HeroText />
            <StoreLinks />    
        </div>
    </div>
  )
}

export default TopHeader