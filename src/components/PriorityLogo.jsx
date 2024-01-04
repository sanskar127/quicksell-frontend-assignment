import React from 'react'
import { NoPriority, Low, Medium, High, Urgent } from './Icons'

const PriorityLogo = ({ priority }) => {
    const Priority = [NoPriority, Low, Medium, High, Urgent]

    return (
        <img src={Priority[priority]} alt={priority} />
    )
}

export default PriorityLogo
