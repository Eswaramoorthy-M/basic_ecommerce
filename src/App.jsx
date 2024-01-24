import { useState } from 'react'
import { useEffect } from 'react';
import Display from './Display';
import './App.css'
import Home from './Home'
import Product from './Product'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Description from './Description';
import Logo from './assets/img.jpg'
import { IoMdCart } from "react-icons/io";
import Cart from './Cart';
function App() {

  return (
    <BrowserRouter>
    <>
     <nav className='flex text-lg bg-blue-400 hover:bg-blue-500 text-white p-4 font-semibold items-center justify-between w-full'>
      <img src={Logo} className='h-12 w-12 object-contain' />
      <Link to='/'>Home</Link>
      <Link to='/product'>Products</Link>
     <Link to='/cart'> <IoMdCart size={35} /></Link>

      
     </nav>
     
    </>
    <Routes>
    <Route path='/' element={<Display />} />
    <Route path='/product' element={<Home/>} />
    <Route path='/product/:id' element={<Description/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
