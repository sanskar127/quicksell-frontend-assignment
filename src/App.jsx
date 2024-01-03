import { useContext } from 'react'
import Navbar from './components/Navbar'
import GroupingColumn from './components/GroupingColumn'
import Card from './components/Card'
import { backlog, cancelled, done, high, inprogress, todo } from './components/Icons'
import { ApiContext } from './context/ContextApi'
import './App.css'

function App() {

  const tickets = useContext(ApiContext).tickets
  const users = useContext(ApiContext).users

  return (
    <div className='App'>
      <Navbar />
      <div className='app-main'>
      </div>
    </div>
  )
}

export default App
