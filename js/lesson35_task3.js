const someString = 'This is some strange string';

function reverse(str) {
    if ((typeof str) !== 'string') return 'Ошибка!';
    let strNew = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strNew += str[i];
    }
    return strNew;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) return 'Нет доступных валют';
    let str = 'Доступные валюты:\n';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === missingCurr) continue;
        str += arr[i] + '\n';
    }
    return str;
}

console.log(reverse(someString))
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'))
