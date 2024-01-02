import React, { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const ApiContext = createContext()

export const BackendContext = ({ children }) => {
    const [backend, useBackend] = useState(null);

    useEffect(() => {
        axios
            .get("https://api.quicksell.co/v1/internal/frontend-assignment")
            .then(response => useBackend(response.data))
    }, [])

    return (
        <ApiContext.Provider value={backend}>
            {children}
        </ApiContext.Provider>
    )
}
