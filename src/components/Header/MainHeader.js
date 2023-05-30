import React from 'react'
import HeaderLogo from './main-header/HeaderLogo'
import HeaderPhoneMenu from './main-header/HeaderPhoneMenu'
import HeaderCategoriesLinks from './main-header/HeaderCategoriesLinks'
import HeaderDropdowns from './main-header/HeaderDropdowns'

const MainHeader = () => {
  return (
    <div className="main-header">
        <div className="container inline-p">
            <HeaderPhoneMenu />
            <HeaderLogo />
            <HeaderCategoriesLinks />
            <HeaderDropdowns />
        </div>
    </div>
  )
}

export default MainHeader