import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Componente from './componente.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Componente/>
  </StrictMode>,
)
