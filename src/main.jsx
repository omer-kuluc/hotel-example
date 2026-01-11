import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/Header.css'
import './assets/styles/Home.css'
import './assets/styles/Concierge.css'
import './assets/styles/Patisserie.css'
import './assets/styles/Society.css'
import './assets/styles/Transportation.css'
import './assets/styles/Memoirs.css'


import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
