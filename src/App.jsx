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
      <Link to='/basic_ecommerce/'>Home</Link>
      <Link to='/basic_ecommerce/product'>Products</Link>
     <Link to='/basic_ecommerce/cart'> <IoMdCart size={35} /></Link>

      
     </nav>
     
    
    <Routes>
    <Route path='/basic_ecommerce' element={<Display />} />
    <Route path='/basic_ecommerce/product' element={<Home/>} />
    <Route path='/basic_ecommerce/product/:id' element={<Description/>} />
    <Route path='/basic_ecommerce/cart' element={<Cart/>} />
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
