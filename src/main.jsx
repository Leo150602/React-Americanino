import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rutas from './routes/Rutas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas></Rutas>
  </StrictMode>,
)