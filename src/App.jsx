import { useContext } from 'react'
import { ApiContext } from './context/BackendContext'
import Navbar from './components/Navbar'
import './App.css'
import GroupingColumn from './components/GroupingColumn'
import Card from './components/Card'
import { backlog, cancelled, done, inprogress, todo } from './components/Icons'
import ExpandedContainer from './components/ExpandedContainer'

function App() {
  const backend = useContext(ApiContext)

  return (
    <div className='App'>
      <Navbar />
      <div className='app-main'>
        <GroupingColumn firstAttribute={backlog} secondAttribute="Backlog" thirdAttribute="2">
          <Card/>
          <Card/>
        </GroupingColumn>

        <GroupingColumn firstAttribute={todo} secondAttribute="Todo" thirdAttribute="3">
          <Card/>
          <Card/>
          <Card/>
        </GroupingColumn>

        <GroupingColumn firstAttribute={inprogress} secondAttribute="In progress" thirdAttribute="5">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </GroupingColumn>

        <GroupingColumn firstAttribute={done} secondAttribute="Done" thirdAttribute="0">
        </GroupingColumn>
        
        <GroupingColumn firstAttribute={cancelled} secondAttribute="Cancelled" thirdAttribute="0">
        </GroupingColumn>
        <ExpandedContainer/>
      </div>
    </div>
  )
}

export default App
