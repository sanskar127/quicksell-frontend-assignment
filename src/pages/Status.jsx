import React from 'react'
import GroupingColumn from '../components/GroupingColumn'
import Card from '../components/Card'
import UserDp from '../components/UserDp'

const getColor = () => {

  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);

  const hexComponent = (component) => {
    const hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const randomHexColor = '#' +
    hexComponent(randomRed) +
    hexComponent(randomGreen) +
    hexComponent(randomBlue);

  return randomHexColor;
}

const Status = ({ content, backendTickets, backendUsers, Icons, Priority }) => {

  return (
    <>
      {
        content.Status.map((contentItem, contentIndex) => {
          let count = 0
          return (
            <GroupingColumn key={contentItem} firstAttribute={Icons[contentIndex]} secondAttribute={contentItem} count={count} >
              {
                backendTickets.filter(filterItem => filterItem.status === contentItem).map(ticketsItem => {
                  const userDetails = backendUsers.find(item => item.id === ticketsItem.userId)
                  return (
                    <Card
                      key={ticketsItem.id}
                      firstLine={
                        <>
                          <span>{ticketsItem.id}</span>
                          <div className="user-icon" style={{ backgroundColor: `${getColor()}` }}>
                            <UserDp name={userDetails.name} />
                            <div className="available-icon" style={{ backgroundColor: `${userDetails.available === true ? "rgb(236, 194, 56)" : "gray"}` }} ></div>
                          </div>
                        </>
                      }
                      secondLine={
                        <p>{ticketsItem.title}</p>
                      }
                      thirdLine={
                        <div className="priority"><img src={Priority[ticketsItem.priority]} alt={ticketsItem.priority} /></div>
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

export default Status
