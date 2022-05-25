const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) return 'Семья пуста';
    return `Семья состоит из: ${arr.join(' ')} `;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(item => {
        console.log(item.toLowerCase());
    });
}

console.log(showFamily(family));
standardizeStrings(favoriteCities);
