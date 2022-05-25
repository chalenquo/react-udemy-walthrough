// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num, incr) {
    let str = '';
    if ((typeof incr) !== 'number' || incr <= 0) return num;

    for (let i = 1; i <= incr; i++) {
        str += num * i
        if (i === incr) {
            return str
        } else {
            str += '---';
        }
    }
}

console.log(getMathResult(10, '5'))