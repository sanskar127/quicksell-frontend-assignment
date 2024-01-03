import React from 'react'
import { high, tag } from './Icons'

const Card = ({ firstLine, secondLine, thirdLine }) => {
    return (
        <div className='Card'>
            <div className="heading">
                {firstLine}
            </div>
            <div className="subheading">
                {secondLine}
            </div>
            <div className="status">
                <div className="bottom-line">
                    {thirdLine}
                    <div className="tag-wrapper">
                        <div className="tag">
                            <img src={tag} alt="tag" height="13px" />
                            <span>Feature Request</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const Card = ({ user, isOnline=false, profileColor="rgb(255, 87, 51)", firstLine, secondLine, thirdLine }) => {
//     return (
//         <div className='Card'>
//             <div className="heading">
//                 <span>CAM-7</span>
//                 <div className="user-icon" style={{ backgroundColor: `${profileColor}` }}>
//                     <div>{user}</div>
//                     <div className="available-icon" style={{ backgroundColor: `${isOnline === true ? "rgb(236, 194, 56)": "gray"}` }} ></div>
//                 </div>
//             </div>
//             <div className="subheading">
//                 {status}
//                 <p>Create Onboarding Tutorial for New Users</p>
//             </div>
//             <div className="status">
//                 <div className="bottom-line">
//                     <div className="priority"><img src={high} alt="high-priority" /></div>
//                     <div className="tag-wrapper">
//                         <div className="tag">
//                             <img src={tag} alt="tag" height="13px" />
//                             <span>Feature Request</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Card
