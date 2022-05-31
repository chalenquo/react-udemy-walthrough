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

    const ads = document.querySelector('.promo__adv');
    const bg = document.querySelector('.promo__bg');
    const genre = bg.querySelector('.promo__genre');
    const promoList = document.querySelector('.promo__interactive-list')
    const promoItem = promoList.querySelector('.promo__interactive-item')
    const del = promoItem.querySelector('.delete')

    promoList.innerHTML = '';
    movieDB.movies.sort()

    movieDB.movies.forEach((film, i) => {
        promoList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>
    `
    })

    ads.innerHTML = '';
    bg.style.backgroundImage = 'url("img/bg.jpg")'
    genre.textContent = 'ДРАМА';

    const input = document.querySelector('.adding__input')
    const form = document.querySelector('.add')
    const btn = form.querySelector('button')
    const chk = form.querySelector('[type="checkbox"]')
    console.log(input.value);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation()

        let movie = input.value;
        if (movie.length >= 21) {
            movie = movie.slice(0, 21) + '...';
        }
        movieDB.movies.push(movie);
        if (chk.checked) {
            console.log(movie)
        }
        promoList.innerHTML += `
    <li class="promo__interactive-item">${movieDB.movies.length}. ${movie}
        <div class="delete"></div>
    </li>
    `
        movieDB.movies.sort();
    })

})



