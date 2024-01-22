import React from 'react'
import "./App.scss"
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import {HelmetProvider} from "react-helmet-async"
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Favourite from './pages/Favourite'
import Detail from './pages/Detail'

const App = () => {
  return (
    <div>
      <HelmetProvider>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favourite' element={<Favourite />} />
            <Route path='/:id' element={<Detail />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  )
}

export default App