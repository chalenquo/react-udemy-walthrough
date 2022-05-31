'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const input = document.querySelector('.adding__input')
    const form = document.querySelector('.add')
    const btn = form.querySelector('button')
    const chk = form.querySelector('[type="checkbox"]')
    const promoList = document.querySelector('.promo__interactive-list')

    removeAds()
    changeGenre('DRAMA')
    changeBackground('url("img/bg.jpg")')
    createMovieList(movieDB.movies, promoList)


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function removeAds() {
        const ads = document.querySelector('.promo__adv');
        ads.innerHTML = '';
    }

    function changeGenre(genre) {
        document.querySelector('.promo__genre').textContent = genre;
    }

    function changeBackground(bg) {
        document.querySelector('.promo__bg').style.backgroundImage = bg;
    }

    function sortArr(arr) {
        arr.sort();
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(movieDB.movies)
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>`
        })

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, promoList);
            })
        })
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation()

        let movie = input.value;
        if (movie) {
            movie.toUpperCase();
            movie = capitalizeFirstLetter(movie);
            if (movie.length >= 21) {
                movie = movie.slice(0, 21) + '...';
            }
            movieDB.movies.push(movie);
            sortArr(movieDB.movies);
            if (chk.checked) {
                console.log(movie)
            }
            promoList.innerHTML = ''
            createMovieList(movieDB.movies, promoList)
            input.value = '';
        }
    });

})



