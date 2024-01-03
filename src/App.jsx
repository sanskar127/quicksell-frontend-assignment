import { useState, useContext } from 'react';
import Navbar from './components/Navbar';
import GroupingColumn from './components/GroupingColumn';
import Card from './components/Card'
import { Backlog, Cancelled, Done, High, InProgress, Low, Medium, NoPriority, Todo, Urgent } from './components/Icons';
import { ApiContext, DataContext, StoreContext } from './context/ContextApi';
import './App.css';

function App() {
  // const tickets = useContext(ApiContext).tickets;
  const tickets = [
    {
      "id": "CAM-1",
      "title": "Update User Profile Page UI",
      "tag": [
        "Feature request"
      ],
      "userId": "usr-1",
      "status": "Todo",
      "priority": 4
    },
    {
      "id": "CAM-2",
      "title": "Add Multi-Language Support - Enable multi-language support within the application.",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-2",
      "status": "In progress",
      "priority": 3
    },
    {
      "id": "CAM-3",
      "title": "Optimize Database Queries for Performance",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-2",
      "status": "In progress",
      "priority": 1
    },
    {
      "id": "CAM-4",
      "title": "Implement Email Notification System",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-1",
      "status": "In progress",
      "priority": 3
    },
    {
      "id": "CAM-5",
      "title": "Enhance Search Functionality",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-5",
      "status": "In progress",
      "priority": 0
    },
    {
      "id": "CAM-6",
      "title": "Third-Party Payment Gateway",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-2",
      "status": "Todo",
      "priority": 1
    },
    {
      "id": "CAM-7",
      "title": "Create Onboarding Tutorial for New Users",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-1",
      "status": "Backlog",
      "priority": 2
    },
    {
      "id": "CAM-8",
      "title": "Implement Role-Based Access Control (RBAC)",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-3",
      "status": "In progress",
      "priority": 3
    },
    {
      "id": "CAM-9",
      "title": "Upgrade Server Infrastructure",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-5",
      "status": "Todo",
      "priority": 2
    },
    {
      "id": "CAM-10",
      "title": "Conduct Security Vulnerability Assessment",
      "tag": [
        "Feature Request"
      ],
      "userId": "usr-4",
      "status": "Backlog",
      "priority": 1
    }
  ]

  // const users = useContext(ApiContext).users;
  const users = [
    {
      "id": "usr-1",
      "name": "Anoop sharma",
      "available": false
    },
    {
      "id": "usr-2",
      "name": "Yogesh",
      "available": true
    },
    {
      "id": "usr-3",
      "name": "Shankar Kumar",
      "available": true
    },
    {
      "id": "usr-4",
      "name": "Ramesh",
      "available": true
    },
    {
      "id": "usr-5",
      "name": "Suresh",
      "available": true
    }
  ]

  const { display, setDisplay } = useContext(StoreContext);
  const content = useContext(DataContext)
  const Icons = [Backlog, Todo, InProgress, Done, Cancelled]
  const Priority = [NoPriority, Low, Medium, High, Urgent]

  const user = "AS"
  const isOnline = false
  const profileColor = "rgb(255, 87, 51)"

  return (
    <div className='App'>
      <Navbar />
      <div className='app-main'>
        {
          content.Status.map((contentItem, contentIndex) => {
            // const [count, setCount] = useState(0)
            let count = 0
            return (
              <GroupingColumn key={contentItem} firstAttribute={Icons[contentIndex]} secondAttribute={contentItem} count={count} >
                {
                  tickets.filter(filterItem => filterItem.status === contentItem).map((ticketsItem, ticketsIndex) => {
                    // setCount(prevState => prevState + ticketsIndex)
                    return (
                      <Card
                        key={ticketsItem.id}
                        firstLine={
                          <>
                            <span>{ticketsItem.id}</span>
                            <div className="user-icon" style={{ backgroundColor: `${profileColor}` }}>
                              <div>{user}</div>
                              <div className="available-icon" style={{ backgroundColor: `${isOnline === true ? "rgb(236, 194, 56)" : "gray"}` }} ></div>
                            </div>
                          </>
                        }
                        secondLine={
                          <p>{ticketsItem.title}</p>
                        }
                        thirdLine={
                          <div className="priority"><img src={Priority[ticketsItem.priority]} alt={ticketsItem.priority} /></div>
                        }
                      />
                    )
                  })
                }
              </GroupingColumn>
            )
          })
        }
      </div>
      {/* {console.log(tickets)} */}
    </div>
  );
}

export default App;
