// // console.dir(Number);
//
// // deep clone Object
// const consoleClone = Object.assign({}, console)
// consoleClone.log('123')
//
// // clone Array
// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[0] = 'd'
// console.log(oldArr);
// console.log(newArr);

// клонування обʼєнтів:
// 1 - перший рівень через цикл
// 2 - глибоке клонування через Object.assign()
// 3 - через спред оператор {...obj}
// клонування масивів:
// 1 - через Array.slice()
// 2 - через спред оператори [...array]

// let y = 1;
// let x = y = 2
// console.log(2 && 1 && null && 0 && undefined)

const obj = {
    name: 'Sergii',
    age: 34,
    car: {
        brand: 'Opel',
        model: 'Corsa',
        engine: 1.4
    },
    block: function () {
        Object.defineProperties(this, {
            name: {
                writable: false
            },
            age: {
                writable: false
            }
        })

    },
    clone: function () {
        const objMap = new Map(Object.entries(this))
        return Object.fromEntries(objMap)
    }
}

let clone = obj.clone();
clone.car.brand = 'BMW'
console.log(obj)
console.log(clone);


// const clone = Object.assign({}, obj)
// clone.name = 'Ostap'
// clone.car.brand = 'Audi'
// console.log(clone)
// console.log(obj)

// const objMap = new Map(Object.entries(obj))
// const newObj = Object.fromEntries(objMap)


// newObj.name = 'Woo'
// console.log(objMap)
// console.log(obj)
// console.log(newObj)