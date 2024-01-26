import { useContext } from 'react'

import Display from './Display';
import './App.css'
import Home from './Home'

import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Description from './Description';
import Logo from './assets/img.jpg'
import { IoMdCart } from "react-icons/io";
import Cart from './Cart';
import { ShopContext } from './ShopContext'
function App() {
const {items}=useContext(ShopContext)
console.log(items,"items")
  return (
    <BrowserRouter>
    <>
     {/* <nav className='flex text-lg bg-blue-400 hover:bg-blue-500 text-white p-4 font-semibold items-center justify-between w-full'>
      <img src={Logo} className='h-12 w-12 object-contain' />
      <Link to='/basic_ecommerce/'>Home</Link>
      <Link to='/basic_ecommerce/product'>Products</Link>
     <Link to='/basic_ecommerce/cart'>{items.length>0?<div className='relative'><IoMdCart size={35} /><div className='absolute right-0 top-0 bg-red-600 w-4 h-4 rounded-full text-sm flex items-center justify-center'><p>{items.length}</p></div></div>:<IoMdCart size={35} />} </Link>

      
     </nav> */}
     
     <nav className='flex text-lg bg-blue-400 hover:bg-blue-500 text-white p-4 font-semibold items-center justify-between w-full'>

{/* Logo */}
<img src={Logo} className='h-12 w-12 object-contain' />

{/* Navigation Links */}
<div className=' md:flex space-x-4'>
  <Link to='/basic_ecommerce/'>Home</Link>
  <Link to='/basic_ecommerce/product'>Products</Link>
</div>

{/* Cart Link */}
<Link to='/basic_ecommerce/cart' className='relative'>
  {items.length > 0 ? (
    <div className='absolute right-0 top-0 bg-red-600 w-4 h-4 rounded-full text-sm flex items-center justify-center'>
      <p>{items.length}</p>
    </div>
  ) : null}
  <IoMdCart size={35} />
</Link>
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
