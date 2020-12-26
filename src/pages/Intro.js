import React from 'react';
import { Link } from 'react-router-dom';
import Select from '../components/Select';

import genres from '../controller/data/genres';
import themes from '../controller/data/themes';

export default function Intro() {
    return (
        <div className="body1">
            <h1>Tell us about your preferences</h1>
            <div className="pref-sel">
                <Select label="Genre" options={genres} />
                <Select label="Theme" options={themes} />
            </div>

            <Link to="/search">
                <button className="findmov">Find my movies</button>
            </Link>

        </div>
    );
}
