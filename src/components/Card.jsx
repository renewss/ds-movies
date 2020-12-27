import React from 'react';

export default function Card(props) {
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }
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
                    <p className="card--text card--text-budget">Budget: {formatNumber(props.data.budget)} $</p>
                    <button className="search-name-btn" onClick={props.handleClick}>
                        Find Similar
                    </button>
                </div>
            </div>
        </>
    );
}
