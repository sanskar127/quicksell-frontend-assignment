import React from 'react'
import { menu, plus } from '../components/Icons'

// Children = Card Components

const GroupingColumn = ({ children, firstAttribute, secondAttribute, thirdAttribute }) => {

    return (
        <section className='status-grouping-section-main'>
            <div className="container-main">
                <div className="left">
                    <img src={firstAttribute} alt="left logo" />
                    <span className="status">{secondAttribute}</span>
                    <span style={{ color: "gray" }}>{thirdAttribute}</span>
                </div>
                <div className="right">
                    <img src={plus} alt="plus" />
                    <img src={menu} alt="menu" />
                </div>
            </div>

            {children}
        </section>
    )
}

export default GroupingColumn
