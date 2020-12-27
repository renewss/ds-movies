import actorList from '../controller/data/actors';
import themes from '../controller/data/themes';
import genres from '../controller/data/genres';
import mpaaRatings from '../controller/data/ratings';
import countries from '../controller/data/countries';

export default class Movie {
    constructor(name, year, producer, rating, mpaa_rating, runtime, theme, genre, actors, budget, country) {
        this.name = name;
        this.year = year;
        this.producer = producer;
        this.rating = rating;
        this.runtime = runtime;
        this.budget = budget;

        this.mpaa_rating = mpaa_rating || mpaaRatings[0];
        this.theme = theme || [themes[0]];
        this.genre = genre || [genres[0]];
        this.actors = actors || [actorList[0]];
        this.country = country || [countries[0]];
    }
}
