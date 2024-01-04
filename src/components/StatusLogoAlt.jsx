import React from 'react'
import { Backlog, Cancelled, Done, InProgress, Todo } from './Icons'

const StatusLogoAlt = ({ ticketStatus }) => {
    const Icons = [Backlog, Todo, InProgress, Done, Cancelled]

    let logo = null

    if (ticketStatus === "In progress") { logo = InProgress }
    else { logo = Icons.find(item => item === ticketStatus) }

    return (
        // <img src={logo} alt="status logo" />
        <h1>{typeof(Icons[0])}</h1>
    )
}

export default StatusLogoAlt
