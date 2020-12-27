import React from 'react'


export default function Card(props) {
    return (
        <>
            <div className="cardbox">
                <div className="card--main">
                    <p className="card--text card--text-name">props.name</p>
                    <p className="card--text card--text-rating">props.rating</p>
                    <p className="card--text card--text-producer">props.producer</p>    
                    <p className="card--text card--text-mpaa">props.mpaa_rating</p>
                    <p className="card--text card--text-genre">props.genre</p>            
                </div>

                <div className="card--footer">
                    <p className="card--text card--text-year">props.year</p>
                    <p className="card--text card--text-budget">props.budget</p>
                </div>
            </div>
        </>
    )
}
