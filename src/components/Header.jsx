import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="findmovbtn">
                <span className="movies">Movies</span> <span className="hub">Hub</span>{' '}
            </Link>
        </header>
    );
}
