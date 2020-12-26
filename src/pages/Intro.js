import React from 'react'
import Select from '../components/Select'

export default function Intro() {
    return (
        <div className="body1">
            <h1>Tell us about your preferences</h1>
            <div className="pref-sel">
                <Select label="Genre" options={[1,2,3,4]}/>
                <Select label="Theme" options={[1,2,3,4]}/>
            </div>
            <button>Find my movies</button>
        </div>
    )
}
