import { useState } from "react";
import { Link } from "react-router-dom"
const Product = ({item}) => {
    const {id,title,price,image}= item;
  return (
   <>
  <Link to={`/product/${id}`}><div className="shadow-md min-h-[350px] flex justify-center items-center flex-col p-1">
   <img className="h-[150px] w-[200px] object-contain" src={image} alt="" />
   <div className="flex flex-col  ml-2 mt-3 w-full justify-center">
    <p className="text-sm  w-[170px]">{title}</p>
    <p className="text-[12px] pt-2 text-gray-500">${price}</p>
   </div>
   </div></Link>
   </>
  )
}

export default Product