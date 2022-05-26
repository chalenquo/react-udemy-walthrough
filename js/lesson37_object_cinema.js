"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function () {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonaLevel: function () {
        let level = (personalMovieDB.count <= 10) ? 'Мало фільмів'
            : (personalMovieDB.count > 10 && personalMovieDB.count < 30) ? 'Класичний глядач'
                : 'Кіноман';
        console.log(level);
        return level;
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } else {
            console.log('Прихована');
        }
    },

    toggleVisibleMyDB: function () {
        this.private = !this.private;
    },

    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {

            let genre = prompt('Введіть ваші улюблені жанри через кому', '').toLowerCase();

            if (genre === '' || genre === null) {
                console.log('Ви ввели некоректні дані');
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ')
                personalMovieDB.genres.sort();
            }

            personalMovieDB.genres.forEach((item, index) => {
                console.log(`Мій улюблений жанр №${index + 1} - це ${item} `)
            })
        }
    }
};








