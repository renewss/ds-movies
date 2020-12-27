import movies from './data/movies';

class MovieGraph {
    constructor(movies = []) {
        this.list = movies;
        this.matrix = [];

        this._computeGraph();
    }

    _computeGraph() {
        for (let i = 0; i < this.list.length; i++) {
            this.matrix.push(this._findRelation(this.list[i]));
        }
    }

    _findRelation(movie) {
        const out = [];

        for (let j = 0; j < this.list.length; j++) {
            let result = 0;
            // year
            if (movie.year) {
                const yearDiff = Math.round(Math.abs(movie.year - this.list[j].year)) || 1;
                result += 5 / yearDiff;
            }

            // producer
            if (movie.producer && movie.producer === this.list[j].producer) result += 10;

            // mpaa-rating
            if (movie.mpaa_rating && movie.mpaa_rating === this.list[j].mpaa_rating) result += 5;

            // theme
            if (movie.theme) {
                for (let ti of movie.theme) {
                    for (let tj of this.list[j].theme) {
                        if (ti === tj) result += 5;
                    }
                }
            }

            // genre
            if (movie.genre) {
                for (let ti of movie.genre) {
                    for (let tj of this.list[j].genre) {
                        if (ti === tj) result += 10;
                    }
                }
            }

            // actors
            if (movie.actors) {
                for (let ti of movie.actors) {
                    for (let tj of this.list[j].actors) {
                        if (ti === tj) result += 8;
                    }
                }
            }

            // country
            if (movie.country) {
                for (let ti of movie.country) {
                    for (let tj of this.list[j].country) {
                        if (ti === tj) result += 6;
                    }
                }
            }

            // name
            if (movie.name && movie.name === this.list[j].name) {
                result = -1;
            }

            out.push(Math.round(result));
        }

        return out;
    }

    getSimilar(pref = {}) {
        const relations = this._findRelation(pref).map((el, i) => ({ id: i, value: el }));

        // Sorting in descending order
        const out = relations.sort((a, b) => b.value - a.value);

        // Filtering out unrelated movies
        const filtered = out.filter((a) => a.value > 0);

        const movieList = filtered.map((el) => movies[el.id]);

        return movieList;
    }
}

const out = new MovieGraph(movies);
export default out;

// MERGESORT
function merge(left, right) {
    let arr = [];
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right];
}

function mergeSort(array) {
    const half = array.length / 2;

    // Base case or terminating case
    if (array.length < 2) {
        return array;
    }

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}
