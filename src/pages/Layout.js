import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Header />
        <div className='page-layout' id='page-layout'>
          <div className="container inline-p">
            <Outlet />
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Layout