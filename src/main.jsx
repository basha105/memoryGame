import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import GameLoop from './components/GameLoop';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameLoop></GameLoop>
  </StrictMode>,
)
