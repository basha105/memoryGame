import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BuildCard from './components/buildCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuildCard />
  </StrictMode>,
)
