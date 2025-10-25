import { useRef, useState } from 'react'
import starFill from './assets/resources/Star_fill.svg'
import star from './assets/resources/Star.svg'

export interface Coffee {
    available: boolean
    id: number
    image: string
    name: string
    popular: boolean
    price: number
    rating: number
    votes: number
  }

export const Card = ({coffee}: {coffee:Coffee}) => {

  const [isFavourite, setIsFavourite] = useState(false)
  const favouriteRef = useRef(null) 

  const handleClick = () => {
    if(isFavourite == true) {
      setIsFavourite(false) 
    }
    else {
      setIsFavourite(true)
    }
  }

  return (
    <div className="flex flex-col ">
      <div className="flex justify-start items-start">
        {coffee.popular && <span className="absolute bg-[#F6C768] m-2 py-1 px-3 text-black font-bold text-[.625rem] rounded-xl">Popular</span> }
        <img src={coffee.image} width={240} height={160} alt={coffee.name + ' image'} loading='lazy' className="rounded-xl"/>
      </div>
      <div className="flex justify-between *:mt-3 *:font-bold *:tracking-[1px] ">
        <span className='text-white text-[1rem]'>{coffee.name}</span>
        <span className='bg-[#BEE3CC] py-1 px-2 text-black text-[.75rem] rounded'>{coffee.price}</span>
      </div>
      <div className="flex flex-row gap-1 *:text-[.875rem]">
        <span>
          <img 
          className=''
          src={isFavourite? starFill: star } 
          alt="favourite icon" 
          ref={favouriteRef}
          onClick={handleClick} 
          style={{paddingTop:5}}/>
        </span>
        
          <span className='text-white mt-2 font-lg'>{coffee.rating}<span className='text-[#6F757C] pl-[3px] font-bold'>{coffee.votes == 0 ? 'No ratings' : '(' + coffee.votes+  ' votes)'}</span></span>
          {!coffee.available &&<span className='text-[#ED735D] mt-2 ml-auto font-bold'>Sold out</span>}
        </div>   
      
    </div>
  )
}
