"use strict";

let numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Який останній фільм бачили?', ''),
          b = +prompt('На скільки його оціните? (0.0-10.0)', '');

    if (a != null && b != null && a !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error')
        i--
    }
}

let status = (personalMovieDB.count <= 10) ? 'Мало фільмів'
           : (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? 'Класичний глядач'
           : 'Кіноман';


console.log(personalMovieDB);
console.log(status)