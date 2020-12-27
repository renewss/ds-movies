import React from 'react';

export default function Card(props) {
    return (
        <>
            <div className="cardbox">
                <div className="card--main">
                    <p className="card--text card--text-name">{props.data.name}</p>
                    <p className="card--text card--text-rating">{props.data.rating}</p>
                    <p className="card--text card--text-producer">{props.data.producer}</p>
                    <p className="card--text card--text-mpaa">{props.data.mpaa_rating}</p>
                    <p className="card--text card--text-genre">{props.data.genre.map((el) => `${el} `)}</p>
                </div>

                <div className="card--footer">
                    <p className="card--text card--text-year">Year: {props.data.year}</p>
                    <p className="card--text card--text-budget">Budget: {props.data.budget} $</p>
                </div>
            </div>
        </>
    );
}
