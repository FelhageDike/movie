class Movie{
    constructor(name, country, genre, director, scenario, producer, operator, compositor, cash, ageRating, timeline, release, poster) {
        this.name = name;
        this.country = country;
        this.genre = genre;
        this.director = director;
        this.scenario = scenario;
        this.producer = producer;
        this.operator = operator;
        this.compositor = compositor;
        this.cash = cash;
        this.ageRating = ageRating;
        this.timeline = timeline;
        this.release = release;
        this.poster = poster;
    }
}

Movies = [];
function AddMovie(name, country, genre, director, scenario, producer, operator, compositor, cash, ageRating, timeline, release, poster){
    name = document.getElementById("name").value;
    country = document.getElementById("country").value;
    genre = document.getElementById("genre").value;
    director = document.getElementById("director").value;
    scenario = document.getElementById("scenario").value;
    producer = document.getElementById("producer").value;
    operator = document.getElementById("operator").value;
    compositor = document.getElementById("compositor").value;
    cash = document.getElementById("cash").value;
    ageRating = document.getElementById("ageRating").value;
    timeline = document.getElementById("timeline").value;
    release = document.getElementById("release").value;
    poster = document.getElementById("poster").value;

    let movie = new Movie(name, country, genre, director, scenario, producer, operator, compositor, cash, ageRating, timeline, release, poster);

    //Movies.push(movie);
    //console.log(Movies);
}


