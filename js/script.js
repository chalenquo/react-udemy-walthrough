"use strict";

let numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastFilmName = prompt('Який останній фільм бачили?', '');
let lastFilmRate = +prompt('На скільки його оціните? (0.0-10.0)', '');

personalMovieDB.movies[lastFilmName] = lastFilmRate;
console.log(personalMovieDB);