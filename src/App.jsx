import { useContext } from 'react'
import { ApiContext } from './context/BackendContext'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const data = useContext(ApiContext)

  return (
    <div className='App'>
      <Navbar/>
    </div>
  )
}

export default App
