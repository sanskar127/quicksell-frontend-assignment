import React from 'react'
import { high, tag } from './Icons'

const Card = () => {
    return (
        <div className='Card'>
            <div className="heading">
                <span>CAM-7</span>
                <div className="user-icon" style={{backgroundColor: "rgb(255, 87, 51)"}}>
                    <div>AS</div>
                    <div className="available-icon" style={{backgroundColor: "gray"}} ></div>
                </div>
            </div>
            <div className="subheading">
                <p>Create Onboarding Tutorial for New Users</p>
            </div>
            <div className="status">
                <div className="bottom-line">
                    <div className="priority"><img src={high} alt="high-priority" /></div>
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

export default Card
