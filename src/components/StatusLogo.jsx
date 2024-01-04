import React from 'react'
import { Backlog, Cancelled, Done, InProgress, Todo } from './Icons'

const StatusLogo = ({ index }) => {
    const Icons = [Backlog, Todo, InProgress, Done, Cancelled]

    return (
        <img src={Icons[index]} alt="status logo" />
    )
}

export default StatusLogo
