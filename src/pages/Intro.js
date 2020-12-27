import React from 'react';
import { Link } from 'react-router-dom';
import Select from '../components/Select';

import genres from '../controller/data/genres';
import themes from '../controller/data/themes';
import ratings from '../controller/data/ratings';

export default function Intro() {
    return (
        <div className="body1">
            <h1>Tell us about your preferences</h1>
            <div className="pref-sel">
                <Select label="Genre" options={genres} />
                <Select label="Theme" options={themes} />
                <Select label="MPA Rating" options={ratings} />
            </div>

            <button className="findmov">
                <Link className="findmovbtn" to="/search">Find my movies </Link>
            </button>
        </div>
    );
}
