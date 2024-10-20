import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {

  return (
    <>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
