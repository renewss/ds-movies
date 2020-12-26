export default class Movie {
  constructor(name, year, producer, rating, mpaa_rating, runtime, theme, genre, actors, budget, country) {
    this.name = name;
    this.year = year;
    this.producer = producer;
    this.rating = rating;
    this.mpaa_rating = mpaa_rating;
    this.runtime = runtime;
    this.theme = theme;
    this.genre = genre;
    this.actors = actors;
    this.budget = budget;
    this.country = country;
  }
}
