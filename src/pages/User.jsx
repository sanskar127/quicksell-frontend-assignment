import React from 'react'
import GroupingColumn from '../components/GroupingColumn'
import Card from '../components/Card'
import UserDp from '../components/UserDp'
import StatusLogo from '../components/StatusLogo'
import PriorityLogo from '../components/PriorityLogo'
import StatusLogoAlt from '../components/StatusLogoAlt'

const User = ({ content, backendTickets, backendUsers }) => {

  return (
    <>
      {
        backendUsers.map((user, index) => {
          return (
            <GroupingColumn
              key={index}
              firstAttribute={
                <UserDp name={user.name} available={user.available} />
              }
              secondAttribute={user.name}
              count={0}>
              {
                backendTickets.filter(filterItem => filterItem.userId === user.id).map((ticket, ticketIndex) => {
                  const ticketDetails = backendTickets.find(findItem => findItem.userId === user.id)
                  return (
                    <Card
                      key={ticket}
                      firstLine={<span>{ticket.id}</span>}
                      secondLine={
                        <>
                          <StatusLogo index={ticketIndex} />
                          {/* <StatusLogoAlt ticketStatus={ticketDetails.status} /> */}
                          <p>{ticket.title}</p>
                        </>
                      }
                      thirdLine={
                        <div className="priority"><PriorityLogo priority={ticket.priority} /></div>
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

export default User
