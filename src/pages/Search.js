import React, { useEffect, useState } from 'react';
import Select from '../components/Select';

import movieGraph from '../controller/MovieGraph';
import Movie from '../controller/Movie';
import genres from '../controller/data/genres';
import themes from '../controller/data/themes';
import actors from '../controller/data/actors';
import countries from '../controller/data/countries';
import ratings from '../controller/data/ratings';
import Card from '../components/Card';

export default function Search(props) {
    const [state, setState] = useState(new Movie());
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (props.selected) {
            const list = movieGraph.getSimilar(props.selected);
            setResult(list);
        }
    }, [props.selected]);

    function handleInputChange(field) {
        return function (e) {
            const change = field === 'mpaa_rating' ? e.target.value : [e.target.value];
            setState({ ...state, [field]: change });
        };
    }

    return (
        <>
            <div className="searchbody">
                <div className="result">
                    {result.map((el) => (
                        <Card data={el} key={el.name} />
                    ))}
                </div>
                <div className="search-container">
                    <form action="#">
                        <input
                            autoComplete="off"
                            className="searcharea"
                            type="text"
                            placeholder="Search..."
                            name="search"
                        ></input>
                    </form>
                    <div className="search-sel">
                        <Select label="Genre" id="genre " options={genres} handleChange={handleInputChange('genre')} />
                        <Select label="Theme" options={themes} handleChange={handleInputChange('theme')} />
                        <Select label="Actors" options={actors} handleChange={handleInputChange('actors')} />
                        <Select label="Countires" options={countries} handleChange={handleInputChange('countries')} />
                        <Select label="MPA Rating" options={ratings} handleChange={handleInputChange('mpaa_rating')} />
                        <button type="submit" className="submit">
                            Go
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
