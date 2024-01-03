import React, { useReducer } from 'react'
import { StoreContext } from './ContextApi'

const ReducerContext = ({ children }) => {

    const initialState = {}
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider value={""}>
            {children}
        </StoreContext.Provider>
    )
}

export default ReducerContext
