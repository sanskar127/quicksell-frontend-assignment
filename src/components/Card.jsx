import React from 'react'
import { Tag } from './Icons'

const Card = ({ firstLine, secondLine, thirdLine, tag }) => {
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
                            <img src={Tag} alt="tag" height="13px" />
                            <span>{tag}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
