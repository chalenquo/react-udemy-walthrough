const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(item => item.rating >= 8)
}

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) => {
        return `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`
    });
}

function setFilmsIds(arr) {
    return arr.map((item, index) => {
        item.id = index
        return item;
    })
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every((item, index) => ('id' in item));
}


console.log(checkFilms(setFilmsIds(films)))