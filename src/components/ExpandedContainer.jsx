import React, { useState } from "react"

const DropdownMenu = ({ label, list }) => {
    const [selectedOption, setSelectedOption] = useState(list[0])

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <div className='dropdown'>
            <label>{label}</label>
            <select value={selectedOption} onChange={handleOptionChange}>
                {list.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

const DisplayExpand = ({ state }) => {
    return (
        <div className={`display-main ${state === true ? "show" : ""}`}>
            <DropdownMenu label="Grouping" list={["Status", "User", "Priority"]} />
            <DropdownMenu label="Ordering" list={["Priority", "Title"]} />
        </div>
    )
}

export default DisplayExpand