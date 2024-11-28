import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoadCards from './components/buildCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadCards />
  </StrictMode>,
)
