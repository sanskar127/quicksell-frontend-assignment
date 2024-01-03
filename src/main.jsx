import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BackendContext from './context/BackendContext'
import DisplayContext from './context/DisplayContext.jsx'
import StateContext from './context/StateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackendContext>
      <DisplayContext>
        <StateContext>
          <App />
        </StateContext>
      </DisplayContext>
    </BackendContext>
  </React.StrictMode>,
)
