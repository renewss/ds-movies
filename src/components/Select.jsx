import React from 'react'

export default function Select(props) {
    console.log(props)
    return (
        <div className="selectBox"> 
            <label htmlFor="select">{props.label}</label>
            <select name="Genre" id="select">
                {props.options.map(el => {
                    return <option value={el} key={el}>{el}</option>
                })}
            </select>
        </div>
    )
}
