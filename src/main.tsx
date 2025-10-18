import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/Simple-coffee-listing-app/'>
    <Routes>
      <Route path='*' element ={<App />} />
    </Routes>
  </BrowserRouter>
)
