const fs = require('fs');
const actors = require('../controller/data/actors');
const countries = require('../controller/data/countries');
const genres = require('../controller/data/genres');
const ratings = require('../controller/data/ratings');
const themes = require('../controller/data/themes');

const nameList = [
    'Symbols Of Secrets',
    'Battle Of My Friends',
    'Chasing The West',
    'Still Breathing In The Town',
    'Inventing Nightmares',
    'Binding To The Past',
    'Screams In The Animals',
    'Avoiding The Maze',
    'Weep For The Abyss',
    'Cleaning Up The Castle',
    'Smile At The Angels',
    'Pleasing The Town',
    'Prepare For The Ocean',
    'Searching In My Dreams',
    'Shelter In The Swamp',
    'Healing My School',
    'Searching For My Family',
    'Bleeding At The Commander',
    'Whispers Of The Elements',
    'Shelter At The Maze',
    'Hunting The Sun',
    'Punished By The Sun',
    'Tower Of The Void',
    'Faith Of Technology',
    'Welcome To The Hunter',
    'Meeting In The Jungle',
    'Binding To The Dungeons',
    'Traces In The River',
    'Screams In Myself',
    'Mending The River',
    'Calling The Town',
    'Vanish In The Abyss',
    'Pleasing Myself',
    'Hurting The Fires',
    'Challenge Of The Commander',
    'Answering My Destiny',
    'Admiring History',
    'Ignoring The Commander',
    'Learning From The Sea',
    'Separated In Time',
    'Choking In The West',
    'Mending The Darkness',
];

const producerList = [
    'Aava Ibarra',
    'Kichiro Gottlieb',
    'Nowell Dreher',
    'Ned Vinković',
    'Cyril Vespa',
    'Aava Ibarra',
    'Ang Lee',
    'Alejandro Gonzalez Inarritu, Manny Palo',
    'Christopher Nolan',
    'Just Jaeckin',
    'Radley Metzger',
    'Walerian Borowczyk',
    'Tony Richardson',
    'John Huston',
    'Peter Jackson',
    'Michael Curtiz / William Keighley',
    'Guy Maddin',
    'David Lynch',
    'Christopher Nolan',
    'Just Jaeckin',
    'Radley Metzger',
    'Walerian Borowczyk',
    'Tony Richardson',
    'John Huston',
    'Alejandro Gonzalez Inarritu, Manny Palo',
    'Christopher Nolan',
    'Just Jaeckin',
    'Radley Metzger',
    'Walerian Borowczyk',
    'Tony Richardson',
    'John Huston',
    'Peter Jackson',
    'Radley Metzger',
    'Walerian Borowczyk',
    'Tony Richardson',
    'John Huston',
    'Walerian Borowczyk',
    'Tony Richardson',
    'John Huston',
    'Peter Jackson',
    'John Huston',
    'Peter Jackson',
];

const out = [];

for (let i in nameList) {
    const obj = {};

    obj.name = nameList[i];
    obj.year = rand(1930, 2018);
    obj.producer = producerList[i];
    obj.rating = rand(2, 6);
    obj.mpaa_rating = ratings[rand(0, ratings.length)];
    obj.runtime = rand(100, 200);
    obj.theme = [];
    for (let j = 0; j < rand(2, 4); j++) {
        obj.theme.push(themes[rand(0, themes.length)]);
    }
    obj.genre = [];
    for (let j = 0; j < rand(2, 3); j++) {
        obj.genre.push(genres[rand(0, genres.length)]);
    }
    obj.actors = [];
    for (let j = 0; j < rand(3, 5); j++) {
        obj.actors.push(actors[rand(0, actors.length)]);
    }
    obj.budget = Math.round(rand(1000000, 200000000) / 100000) * 100000;
    obj.country = [];
    for (let j = 0; j < rand(3, 5); j++) {
        obj.country.push(countries[rand(0, countries.length)]);
    }

    out.push(obj);
}

console.log(out);
fs.writeFileSync('./movies.json', JSON.stringify(out));

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
