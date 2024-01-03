import React, { useState } from 'react'
import { DataContext } from './ContextApi'

const DisplayContext = ({ children }) => {
    const [content, setContent] = useState({
        "Grouping": ["Status", "User", "Priority"],
        "Ordering": ["Priority", "Title"],
        "Status": ["Backlog", "Todo", "In progress", "Done", "Cancelled"],
        "Priority": ["No Priority", "Low", "Medium", "High", "Urgent"]
    });

    return (
        <DataContext.Provider value={content}>
            {children}
        </DataContext.Provider>
    )
}

export default DisplayContext
