import React, { useState, useEffect } from 'react'
import { ApiContext } from './ContextApi'
import axios from 'axios'

const BackendContext = ({ children }) => {
    const [tickets, setTickets] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("https://api.quicksell.co/v1/internal/frontend-assignment")
            .then(response => {
                setTickets(response.data.tickets)
                setUsers(response.data.users)
            })
            .catch(error => console.log("Error: ", error))
    }, [])

    return (
        <ApiContext.Provider value={{tickets, users}}>
            {children}
        </ApiContext.Provider>
    )
}

export default BackendContext
