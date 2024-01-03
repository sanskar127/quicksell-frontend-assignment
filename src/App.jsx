import { useContext } from 'react'
import { ApiContext } from './context/BackendContext'
import Navbar from './components/Navbar'
import './App.css'
import GroupingColumn from './components/GroupingColumn'
import Card from './components/Card'
import { backlog, cancelled, done, high, inprogress, todo } from './components/Icons'

function App() {
  const tickets = useContext(ApiContext).tickets
  const users = useContext(ApiContext).users

  const user = "AS"
  const isOnline=false
  const profileColor="rgb(255, 87, 51)"

  return (
    <div className='App'>
      <Navbar />
      <div className='app-main'>
        <GroupingColumn firstAttribute={backlog} secondAttribute="Backlog" count="2">
          <Card
            firstLine={
              <>
                <span>CAM-7</span>
                <div className="user-icon" style={{ backgroundColor: `${profileColor}` }}>
                  <div>{user}</div>
                  <div className="available-icon" style={{ backgroundColor: `${isOnline === true ? "rgb(236, 194, 56)" : "gray"}` }} ></div>
                </div>
              </>
            }
            secondLine={
              <p>Create Onboarding Tutorial for New Users</p>
            }
            thirdLine={
              <div className="priority"><img src={high} alt="high-priority" /></div>
            }
          />

          <Card
            firstLine={
              <>
                <span>CAM-10</span>
                <div className="user-icon" style={{ backgroundColor: `${profileColor}` }}>
                  <div>{user}</div>
                  <div className="available-icon" style={{ backgroundColor: `${isOnline === true ? "rgb(236, 194, 56)" : "gray"}` }} ></div>
                </div>
              </>
            }
            secondLine={
              <p>Conduct Security Vulnerability Assessment</p>
            }
            thirdLine={
              <div className="priority"><img src={high} alt="high-priority" /></div>
            }
          />
        </GroupingColumn>

        <GroupingColumn firstAttribute={todo} secondAttribute="Todo" count="3">
          <Card />
          <Card />
          <Card />
        </GroupingColumn>

        <GroupingColumn firstAttribute={inprogress} secondAttribute="In progress" count="5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </GroupingColumn>

        <GroupingColumn firstAttribute={done} secondAttribute="Done" count="0">
        </GroupingColumn>

        <GroupingColumn firstAttribute={cancelled} secondAttribute="Cancelled" count="0">
        </GroupingColumn>
      </div>
    </div>
  )
}

export default App
