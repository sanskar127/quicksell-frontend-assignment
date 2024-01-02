import { useContext } from 'react'
import './App.css'
import { ApiContext } from './context/BackendContext'

function App() {
  const data = useContext(ApiContext)

  return (
    <div className='App'>
      <h1>
      {JSON.stringify(data)}
      {console.log(data)}
      </h1>
    </div>
  )
}

export default App
