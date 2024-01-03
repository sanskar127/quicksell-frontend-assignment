import React, { useContext, useState, useEffect } from 'react';
import { DataContext, StoreContext } from './ContextApi';

const StateContext = ({ children }) => {
    const listData = useContext(DataContext);

    const [display, setDisplay] = useState(() => {
        const savedState = JSON.parse(localStorage.getItem('viewState')) || {
            "Grouping": listData.Grouping[0],
            "Ordering": listData.Ordering[0]
        };
        return savedState;
    });

    useEffect(() => {
        localStorage.setItem('viewState', JSON.stringify(display));
    }, [display]);

    return (
        <StoreContext.Provider value={{ display, setDisplay }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StateContext;
