import type React from "react"
import './App.css'
import type { Coffee } from "./Card"
import './index.css'
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Card } from "./Card"
import { SkeletonLoader } from "react-loadly"

export const CoffeeList:React.FC = () => {

  const [isSelected, setIsSelected] = useState('all-products')

  const handleClick = (e: any) => {
    e.preventDefault()
    if(e.target.id == 'all-products') {
      setIsSelected('all-products')
    }
    else {
      setIsSelected('available-now')
    }
  }

    const { data, isLoading, isError, error } = useQuery({
    queryKey: ['coffees'],
    queryFn: async () => {
      const response:Response = await fetch ("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
      if(!response.ok) {
        throw new Error('Error: ' + error)
      }
      return response.json()
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60
  })

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>

  return (
    <div className='absolute flex flex-col bg-[#1B1D1F] *:font-dm-sans rounded-xl w-auto mt-20 pb-10 mx-5 lg:mt-40 lg:mx-10 xl:mx-25'>
        <div className='py-5 mt-1 text-center bg-[url("./assets/resources/vector.svg")] bg-auto bg-[180px_0px] bg-no-repeat lg:bg-[548px_-10px] lg:bg-size-[235px_260px] xl:bg-size-[250px_253px] xl:bg-[540px_-10px]'>
            <h2 className="text-[2rem] text-white mt-3  font-500 font-medium tracking-[2px] lg:mt-15">Our Collection</h2>
            <p className="px-[6%] text-[#D0D1D2] text-[1rem] lg:text-[1rem] lg:px-[24%] xl:px-[28%]">
                Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
        </div>
        <div className="flex ml-[29.5%] lg:ml-[38%] xl:ml-[39.5%] *:text-[.875rem] gap-6 lg:gap-4 space-between *:font-bold *:tracking-[.8px]">
            <button onClick={handleClick} id="all-products" className={`${isSelected == 'all-products'? 'bg-[#4D5562] hover:bg-[#6F757C] text-white  py-2 px-3 rounded-[7px]' : 'bg-transparent text-white'}`}>All Products</button>
            <button onClick={handleClick} id="available-now" className={`${isSelected == 'available-now'? 'bg-[#4D5562] hover:bg-[#6F757C] text-white  py-2 px-3 rounded-[7px]' : 'bg-transparent text-white'}`}>Available Now</button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 gap-10">
          {isSelected == 'all-products' && data.map((coffee:Coffee) => (
            <Card 
              key={coffee.id}
              coffee={coffee}
            />
          ))}
          {isSelected == 'available-now' && data.filter((availableCoffee:Coffee) => availableCoffee.available==true)
          .map((coffee:Coffee) => (
            <Card 
            key={coffee.id}
            coffee={coffee}
            />
))}
        </div>
    </div>
  )
}
