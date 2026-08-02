import React from 'react'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar'
import Footer from './Footer'


function RootLayout() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default RootLayout
