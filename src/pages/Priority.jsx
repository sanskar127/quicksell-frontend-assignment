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
          let count = 0
          return (
            <GroupingColumn 
            key={contentItem} 
            firstAttribute={<PriorityLogo priority={contentIndex} />} 
            secondAttribute={contentItem} 
            count={count} >
              {
                backendTickets.filter(filterItem => filterItem.priority === contentItem).map(ticketsItem => {
                  const userDetails = backendUsers.find(item => item.id === ticketsItem.userId)
                  return (
                    <Card
                      key={ticketsItem.id}
                      firstLine={
                        <>
                          <span>{ticketsItem.id}</span>
                          <UserDp name={userDetails.name} available={userDetails.available} />
                        </>
                      }
                      secondLine={
                        <p>{ticketsItem.title}</p>
                      }
                      thirdLine={
                        <div className="priority"><PriorityLogo priority={ticketsItem.priority} /></div>
                      }
                      tag={ticketsItem.tag[0]}
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
