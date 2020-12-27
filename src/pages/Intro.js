import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from '../components/Select';

import genres from '../controller/data/genres';
import themes from '../controller/data/themes';
import mpaaRatings from '../controller/data/ratings';

export default function Intro(props) {
    const [genre, setGenre] = useState([genres[0]]);
    const [theme, setThemes] = useState([themes[0]]);
    const [rating, setRating] = useState(mpaaRatings[0]);

    function handleGenreChange(e) {
        setGenre([e.target.value]);
    }
    function handleThemeChange(e) {
        setThemes([e.target.value]);
    }
    function handleRatingChange(e) {
        setRating(e.target.value);
    }
    function handleSubmit() {
        props.setMovie({ genre, theme, mpaa_rating: rating });
    }

    return (
        <div className="body1">
            <h1>Tell us about your preferences</h1>
            <div className="pref-sel">
                <Select label="Genre" options={genres} handleChange={handleGenreChange} />
                <Select label="Theme" options={themes} handleChange={handleThemeChange} />
                <Select label="MPAA Rating" options={mpaaRatings} handleChange={handleRatingChange} />
            </div>

            <button className="findmov" onClick={handleSubmit}>
                <Link to="/search" className="findmovbtn">Find my movies </Link>
            </button>
        </div>
    );
}
