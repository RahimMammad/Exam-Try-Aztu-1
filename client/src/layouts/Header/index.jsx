import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='navbar'>
        <div className="navbar-main-container">
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
                <h2>COURSE</h2>
            </div>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/admin"}>Admin</NavLink>
                <NavLink to={"/cart"}>Cart</NavLink>
                <NavLink to={"/favourite"}>Favourite</NavLink>
            </ul>
            <div className="phone">
                <i style={{color: "#fff"}} class="fa-solid fa-phone-volume"></i>
                <span>+43 4566 7788 2457</span>
            </div>
        </div>
    </nav>

    <nav id='sidebar'>
            <ul>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/admin"}>Admin</NavLink>
                <NavLink to={"/cart"}>Cart</NavLink>
                <NavLink to={"/favourite"}>Favourite</NavLink>
            </ul>
    </nav>
    </>
  )
}

export default Header