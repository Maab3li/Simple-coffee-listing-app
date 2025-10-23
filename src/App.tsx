import type React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { CoffeeList } from './CoffeeList'
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
        <div className='relative grid grid-rows-4 grid-cols-1 max-w-[100%] h-[320vh] lg:h-[180vh] pb-10 bg-black'>
          {/* background image */}
          <div className='w-full h-[50%] lg:h-[100%] bg-size-[100%_100%] bg-no-repeat bg-[url("assets/resources/bg-cafe-sm.jpg")] lg:bg-[url("assets/resources/bg-cafe-lg.jpg")] lg:bg-[url("assets/resources/bg-cafe-lg.jpg")]'></div>
          {/* coffee list container */}
          <CoffeeList />
        </div>
      </QueryClientProvider>
    </PersistQueryClientProvider>
  )
}

export default App
