import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from './ShopContext';
const Description = () => {
    const params = useParams();
    const [result,setResult]= useState([])
    const paramId = params.id;
    const context = useContext(ShopContext);
    const {addToCart}= context;
  useEffect(()=>{
    const fetchProduct = async ()=>{
        const result = await fetch(`https://fakestoreapi.com/products/${paramId}`);
        const json =  await result.json();
        console.log(json);
        setResult(json)
      }
      fetchProduct();
  },[])

  return (
    <div className="flex mt-[100px] justify-around max-[600px]:flex-col">
     <img className='w-[30%] max-[600px]:w-[70%] flex self-center' src={result.image} alt="" />
     <div className='mt-[50px]  p-4'>
     <h1 className='font-bold text-[24px]'>{result.title}</h1>
     <p className='w-[100%] mt-4'>{result.description}</p>
     <p className='text-blue-500 text-[24px]'>${result.price}</p>
     <button onClick={()=>addToCart(result)} className='bg-blue-500 text-white hover:text-blue-500 text-sm mt-4 hover:bg-white p-2 rounded-md hover:border-blue-500 hover:border-2'>Add to Cart</button>
     </div>
     </div>
  )
}

export default Description