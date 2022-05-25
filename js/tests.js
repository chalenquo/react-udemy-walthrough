// console.dir(Number);

// deep clone Object
const consoleClone = Object.assign({}, console)
consoleClone.log('123')

// clone Array
const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[0] = 'd'
console.log(oldArr);
console.log(newArr);

// клонування обʼєнтів:
// 1 - перший рівень через цикл
// 2 - глибоке клонування через Object.assign()
// 3 - через спред оператор {...obj}
// клонування масивів:
// 1 - через Array.slice()
// 2 - через спред оператори [...array]