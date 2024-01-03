import React, { useContext, useState } from 'react'
import { DataContext, StoreContext } from './ContextApi'

const StateContext = ({ children }) => {
    const listData = useContext(DataContext)

    const [state, setState] = useState({
        "Grouping": listData.Grouping[0],
        "Ordering": listData.Ordering[0]
    })

    return (
        <StoreContext.Provider value={{ state, setState }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StateContext
