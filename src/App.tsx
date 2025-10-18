import type React from 'react'
import { CoffeeList } from './CoffeeList'
import './App.css'


const App:React.FunctionComponent =() => {

  return (
    //main page wrapper
    <>
    <div className='relative grid grid-rows-4 grid-cols-1 max-w-[100%] h-[365vh] lg:h-[210vh] xl:h-[180vh] pb-10 bg-black'>
      {/* background image */}
      <div className='w-full h-[50%] lg:h-[100%] bg-size-[100%_100%] bg-no-repeat bg-[url("assets/resources/bg-cafe-sm.jpg")] lg:bg-[url("assets/resources/bg-cafe-lg.jpg")] lg:bg-[url("assets/resources/bg-cafe-lg.jpg")]'></div>
      {/* coffee list container */}
      <CoffeeList />
    </div>
    
    </>
  )
}

export default App
