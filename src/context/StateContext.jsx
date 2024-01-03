import React, { useContext, useState, useEffect } from 'react';
import { DataContext, StoreContext } from './ContextApi';

const StateContext = ({ children }) => {
    const listData = useContext(DataContext);

    const [state, setState] = useState(() => {
        const savedState = JSON.parse(localStorage.getItem('viewState')) || {
            "Grouping": listData.Grouping[0],
            "Ordering": listData.Ordering[0]
        };
        return savedState;
    });

    useEffect(() => {
        localStorage.setItem('viewState', JSON.stringify(state));
    }, [state]);

    return (
        <StoreContext.Provider value={{ state, setState }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StateContext;
