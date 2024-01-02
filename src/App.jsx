import { useContext } from 'react'
import { ApiContext } from './context/BackendContext'
import Navbar from './components/Navbar'
import './App.css'
import Card from './components/Card'
import { backlog, menu, plus } from './components/Icons'

function App() {
  const data = useContext(ApiContext)

  return (
    <div className='App'>
      <Navbar />
      <div className='app-main'>
        <section className='status-grouping-section-main'>
          <div className="container-main">
            <div className="left">
              <img src={backlog} alt="backlog" />
              <span className="status">Backlog</span>
              <span style={{ color: "gray" }}>2</span>
            </div>
            <div className="right">
              <img src={plus} alt="plus" />
              <img src={menu} alt="menu" />
            </div>
          </div>
          <Card />
          <Card />
        </section>
      </div>
    </div>
  )
}

export default App
