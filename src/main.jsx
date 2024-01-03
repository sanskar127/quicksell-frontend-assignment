import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BackendContext from './context/BackendContext'
import DisplayContext from './context/DisplayContext.jsx'
import ReducerContext from './context/ReducerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackendContext>
      <DisplayContext>
        <ReducerContext>
          <App />
        </ReducerContext>
      </DisplayContext>
    </BackendContext>
  </React.StrictMode>,
)
