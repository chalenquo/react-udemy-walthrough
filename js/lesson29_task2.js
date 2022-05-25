// Место для первой задачи
function getTimeFromMinutes(mins) {
    if (mins < 0 || !Number.isInteger(mins)) return 'Ошибка, проверьте данные';

        const h = Math.floor(mins / 60);
        const m = mins % 60;
        const w = (h === 0 || h > 5) ? 'часов'
                : (h === 1) ? 'час'
                : 'часа';

    return `Это ${h} ${w} и ${m} минут`;
}

console.log(getTimeFromMinutes(250))



// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    const arr = [a, b, c, d];
    let largest = 0;

    for (let i = 0; i < arr.length; i++) {
        if ((typeof arr[i]) != "number" || arr.includes(undefined)) return 0;
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findMaxNumber(1, 2, 3, 4))