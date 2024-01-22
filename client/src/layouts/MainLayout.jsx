import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div style={{width: "100%", position: "absolute", overflow: "hidden"}}>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout