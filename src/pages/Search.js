import React from 'react';
import Select from '../components/Select';

import genres from '../controller/data/genres';
import themes from '../controller/data/themes';
import actors from '../controller/data/actors';
import countries from '../controller/data/countries';
import movies from '../controller/data/movies';
import ratings from '../controller/data/ratings';

export default function Search() {
    return (
        <>
            <div className="searchbody">
                <div className="result"></div>
                <div className="search-container">
                    <form action="#">
                        <input type="text" placeholder="Search.." name="search"></input>
                    </form>
                    <div className="search-sel">
                        <Select label="Genre" id="genre " options={genres} />
                        <Select label="Theme" options={themes} />
                        <Select label="Actors"  options={actors} />
                        <Select label="Countires" options={countries}/>
                        <Select label="MPA Rating"  options={ratings} />
                        <button type="submit">Go</button>
                    </div>
                </div>
            </div>
        </>
    );
}
