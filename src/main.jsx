import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import BuildCards from './components/buildCard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuildCards/>
  </StrictMode>,
)
