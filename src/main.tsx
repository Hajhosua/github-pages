import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/github-pages">
      <App />
    </BrowserRouter>
  </StrictMode>,
  
)
