import React, { useState, useEffect } from 'react'
import { ApiContext } from './ContextApi'
import axios from 'axios'

const BackendContext = ({ children }) => {
    const [backend, useBackend] = useState({});

    useEffect(() => {
        axios
            .get("https://api.quicksell.co/v1/internal/frontend-assignment")
            .then(response => useBackend(response.data))
            .catch(error => console.log("Error: ", error))
    }, [])

    return (
        <ApiContext.Provider value={backend}>
            {children}
        </ApiContext.Provider>
    )
}

export default BackendContext
