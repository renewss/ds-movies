import movies from './data/movies';

class MovieGraph {
    constructor(movies = []) {
        this.list = movies;
        this.matrix = [];

        this._computeGraph();
    }

    _computeGraph() {
        for (let i = 0; i < this.list.length; i++) {
            this.matrix.push(this.findRelation(this.list[i]));
        }
    }

    findRelation(movie) {
        const out = [];

        for (let j = 0; j < this.list.length; j++) {
            let result = 0;
            // year
            const yearDiff = Math.round(Math.abs(movie.year - this.list[j].year)) || 1;
            result += 5 / yearDiff;

            // producer
            if (movie.producer === this.list[j].producer) result += 10;

            // mpaa-rating
            if (movie.mpaa_rating === this.list[j].mpaa_rating) result += 5;

            // theme
            for (let ti of movie.theme) {
                for (let tj of this.list[j].theme) {
                    if (ti === tj) result += 5;
                }
            }

            // genre
            for (let ti of movie.genre) {
                for (let tj of this.list[j].genre) {
                    if (ti === tj) result += 10;
                }
            }

            // actors
            for (let ti of movie.actors) {
                for (let tj of this.list[j].actors) {
                    if (ti === tj) result += 8;
                }
            }

            // country
            for (let ti of movie.actors) {
                for (let tj of this.list[j].actors) {
                    if (ti === tj) result += 6;
                }
            }

            // name
            if (movie.name === this.list[j].name) {
                result = -1;
            }

            out.push(Math.round(result));
        }

        return out;
    }
}

const out = new MovieGraph(movies);
export default out;
