import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from  './components/Register'
import NavBar from './components/NavBar'
import Products from './components/Products'

export default function App() {
  return (
    <>
    <NavBar />

    <div className="">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            
        </Routes>
    </div>
   </>
  )
}

