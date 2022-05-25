"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Який останній фільм бачили?', '').trim(),
              b = +prompt('На скільки його оціните? (0.0-10.0)', '');

        if (a != null && b != null && a !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    }
}

rememberMyFilms()

function detectPersonaLevel() {
    let level = (personalMovieDB.count <= 10) ? 'Мало фільмів'
              : (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? 'Класичний глядач'
              : 'Кіноман';
    console.log(level);
    return level;
}

detectPersonaLevel()

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push( prompt(`Ваш улюблений жанр ${i}`, '') );
    }
    console.log(personalMovieDB.genres)
}

writeYourGenres();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('Прихована');
    }
}

showMyDB(personalMovieDB.private);



