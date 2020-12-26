class MovieGraph {
    constructor(movies = []) {
        this.list = movies;
        this.matrix = [];

        this._computeGraph();
    }

    _computeGraph() {
        for (let i = 0; i < this.list.length; i++) {
            this.matrix.push([]);

            for (let j = 0; j < this.list.length; j++) {
                let result = 0;
                // year
                const yearDiff = Math.round(Math.abs(this.list[i].year - this.list[j].year)) || 1;
                result += 5 / yearDiff;

                // producer
                if (this.list[i].producer === this.list[j].producer) result += 10;

                // mpaa-rating
                if (this.list[i].mpaa_rating === this.list[j].mpaa_rating) result += 5;

                // theme
                for (let ti of this.list[i].theme) {
                    for (let tj of this.list[j].theme) {
                        if (ti === tj) result += 5;
                    }
                }

                // genre
                for (let ti of this.list[i].genre) {
                    for (let tj of this.list[j].genre) {
                        if (ti === tj) result += 10;
                    }
                }

                // actors
                for (let ti of this.list[i].actors) {
                    for (let tj of this.list[j].actors) {
                        if (ti === tj) result += 8;
                    }
                }

                // country
                for (let ti of this.list[i].actors) {
                    for (let tj of this.list[j].actors) {
                        if (ti === tj) result += 6;
                    }
                }

                // name
                if (i === j) {
                    result = -1;
                    console.log(i, j, this.list[i], this.list[j]);
                }

                this.matrix[i].push(Math.round(result));
            }
        }
    }
}

export default MovieGraph;
