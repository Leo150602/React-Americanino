import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rutas from './routes/Rutas'
import Navbar from './components/barraNavegacion'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rutas></Rutas>
  </StrictMode>,
)
