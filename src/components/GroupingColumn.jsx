import React from 'react'
import { Menu, Plus } from '../components/Icons'


const GroupingColumn = ({ children, firstAttribute, secondAttribute, count }) => {

    return (
        <section className='status-grouping-section-main'>
            <div className="container-main">
                <div className="left">
                    <img src={firstAttribute} alt="left logo" />
                    <span className="status">{secondAttribute}</span>
                    <span style={{ color: "gray" }}>{count}</span>
                </div>
                <div className="right">
                    <img src={Plus} alt="plus" />
                    <img src={Menu} alt="menu" />
                </div>
            </div>

            {children}  {/* Card Component */}
        </section>
    )
}

export default GroupingColumn
