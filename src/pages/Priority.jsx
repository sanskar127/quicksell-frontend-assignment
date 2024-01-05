import React from 'react'
import GroupingColumn from '../components/GroupingColumn'
import Card from '../components/Card'
import UserDp from '../components/UserDp'
import StatusLogo from '../components/StatusLogo'
import PriorityLogo from '../components/PriorityLogo'
import StatusLogoAlt from '../components/StatusLogoAlt'

const Priority = ({ content, backendTickets, backendUsers }) => {

  return (
    <>
      {
        content.Priority.map((contentItem, contentIndex) => {
          return (
            <GroupingColumn 
            key={contentItem} 
            firstAttribute={<PriorityLogo priority={contentIndex} />} 
            secondAttribute={contentItem} 
            count={backendTickets.filter(filterItem => filterItem.priority === contentIndex).length} >
              {
                backendTickets.filter(filterItem => filterItem.priority === contentIndex).map(ticket => {
                  const userDetails = backendUsers.find(item => item.id === ticket.userId)
                  return (
                    <Card
                      key={ticket.id}
                      firstLine={
                        <>
                          <span>{ticket.id}</span>
                          <UserDp name={userDetails.name} available={userDetails.available} />
                        </>
                      }
                      secondLine={
                        <p>{ticket.title}</p>
                      }
                      tag={ticket.tag[0]}
                    />
                  )
                })
              }
            </GroupingColumn>
          )
        })
      }
    </>
  )
}

export default Priority
