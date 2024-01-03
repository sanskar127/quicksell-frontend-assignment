import React from 'react';

const TicketList = ({ tickets, users }) => {

    const getUserInfo = (userId) => users.find(user => user.id === userId);

    return (
        tickets.map(ticket => ({
            name: ticket.name,
            available: ticket.available
        }
        ))
    );
}

export default TicketList;
