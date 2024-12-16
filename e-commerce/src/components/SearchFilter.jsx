import React from 'react'
import { Link } from 'react-router-dom'

const SearchFilter = ({filterSearch, setIsSearchVisible}) => {
  return (
    <Link  className='grid grid-cols-2 gap-3 p-2 bg-white border rounded-md shadow-md border-black/30 shadow-black/30'>
        {filterSearch.map((SreItem)=>{
            const { id, product, image, review, price, color, brand, description, stock } = SreItem;
           
            return (
                <Link 
                to={`/products/${product}`}
                state={{ id, product, image, review, price, color, brand, description, stock }}
                onClick={()=>setIsSearchVisible(false)}
                className='flex flex-col items-center justify-between p-2 border rounded-md shadow-sm hover:shadow-lg hover:shadow-black/65 border-black/15 shadow-black/45' key={id}>
                <img className='w-3/6' src={image[0]} alt={product} />
                <p className='text-xs'>{product}</p>
                <p className='text-xs text-yellow-600'>{review}</p>
            </Link>
            )
})}
    </Link>
  )
}

export default SearchFilter