import React from 'react';

export default function Select(props) {
    return (
        <div className="selectBox">
            <label htmlFor="select">{props.label}</label>
            <select name="Genre" id="select" onChange={props.handleChange}>
                {props.options.map((el) => {
                    return (
                        <option value={el} key={el}>
                            {el}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
