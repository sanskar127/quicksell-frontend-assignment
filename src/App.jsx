import { useState, useContext } from 'react'
import Navbar from './components/Navbar'
import { ApiContext, DataContext, StoreContext } from './context/ContextApi'
import './App.css'
import Status from './pages/Status'
import User from './pages/User'
import Priority from './pages/Priority'

function App() {
    const { tickets, users } = useContext(ApiContext)

    const { display, setDisplay } = useContext(StoreContext)
    const content = useContext(DataContext)

    const Grouping = {
        "Status": <Status content={content} backendTickets={tickets} backendUsers={users} />,
        "User": <User content={content} backendTickets={tickets} backendUsers={users} />,
        "Priority": <Priority content={content} backendTickets={tickets} backendUsers={users} />
    }

    // const isDisplayValid = Grouping.;

    return (
        <div className='App'>
            <Navbar />
            <div className='app-main'>
                {Grouping.User}
            </div>
        </div>
    )
}

export default App
