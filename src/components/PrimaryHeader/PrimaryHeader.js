import React from 'react'
import HeaderLogo from '../Header/main-header/HeaderLogo'
import HeaderPhoneMenu from '../Header/main-header/HeaderPhoneMenu'
import HeaderCategoriesLinks from '../Header/main-header/HeaderCategoriesLinks'
import HeaderDropdowns from '../Header/main-header/HeaderDropdowns'

const PrimaryHeader = () => {
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

export default PrimaryHeader