import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BackendContext } from './context/BackendContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackendContext>
      <App />
    </BackendContext>
  </React.StrictMode>,
)
