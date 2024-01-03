import { useContext } from 'react'
import Navbar from './components/Navbar'
import GroupingColumn from './components/GroupingColumn'
import Card from './components/Card'
import { backlog, cancelled, done, high, inprogress, todo } from './components/Icons'
import { ApiContext, StoreContext } from './context/ContextApi'
import './App.css'

function App() {

  const tickets = useContext(ApiContext).tickets
  const users = useContext(ApiContext).users

  const {state, setState} = useContext(StoreContext)

  return (
    <div className='App'>
      <Navbar />
      <div className='app-main'>
        <h1>{JSON.stringify(state)}</h1>
      </div>
    </div>
  )
}

export default App
