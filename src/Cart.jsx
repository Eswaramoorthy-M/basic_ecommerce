import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'

const Cart = () => {
    const TotalItems = useContext(ShopContext);
    const {items}= TotalItems;
    console.log(items.length);
    const totalPrice = items.reduce((acc, item) => {
        return acc + item.quantity * item.price;
    }, 0);
    console.log(totalPrice);

  return (
    <div className="flex  flex-col  w-full">
     <h1>Cart Items</h1>
     
     {items.map((e)=>{
        const total = e.quantity*e.price;
        return(
            <div className='mt-[100px] flex gap-5  p-2' key={e.id}>
                <div className='h-[220px] flex justify-center items-center shadow-md w-[220px]'>
                 <img className='h-[200px] w-[200px]' src={e.image}></img>
                 </div>
                 <div>
                 <h1 className='mt-4 font-bold text-blue-500'>{e.title}</h1>
                 <p className='font-bold mt-5 text-gray-500'>${e.price}</p>
                 <p className='mt-6 text-blue-500'>Quantity:<span className='font-bold text-black'>{e.quantity}</span></p>
                 <p className='mt-5'>Total:${total}</p>
                 </div>
                 </div>
        )
           
     })}
     <p className='font-bold text-center'>Total Amount: ${totalPrice}</p>
     </div>
  )
}

export default Cart