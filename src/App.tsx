import type React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { CoffeeList } from './CoffeeList'
import smImage from '../src/assets/resources/bg-cafe-sm.webp'
import lgImage from '../src/assets/resources/bg-cafe-lg.webp'
import xlImage from '../src/assets/resources/bg-cafe.webp'
import './App.css'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

const App:React.FunctionComponent =() => {

  const queryClient = new QueryClient({
    defaultOptions : {
      queries: {
        gcTime: 1000 * 60 * 24, 
      }
    }
  })

  const persister = createAsyncStoragePersister({
    storage: window.localStorage
  })
  
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{persister}}>
      <QueryClientProvider client={queryClient}>
        {/*main page wrapper*/}
        <div className='relative grid grid-rows-4 grid-cols-1 w-[100%] h-[2000px] lg:h-[1100px] pb-10 bg-black'>
          {/* background image */}
          <div className='w-full h-[400px] lg:h-[500px] xl:h-[600px]'>
            {screen.width <= 640 && <img fetchPriority='high' src={smImage} width='100%' height='400px'  alt='caffe image' />}
            {screen.width <= 1024 && screen.width >= 641 && <img fetchPriority='high' src={lgImage} width='100%' height='500' alt='caffe image' />}
            {screen.width >= 1025 && <img fetchPriority='high' src={xlImage} width='100%' height='600px' alt='caffe image' />}
          </div>
          {/* coffee list container */}
          <CoffeeList />
        </div>
      </QueryClientProvider>
    </PersistQueryClientProvider>
  )
}

export default App
