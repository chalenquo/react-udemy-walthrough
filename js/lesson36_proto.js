const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!')
    }
}
// const john = {
//     health: 100,
// }

// john.__proto__ = soldier; // deprecated

// Object.setPrototypeOf(john, soldier); // with 2 dif objects
// console.log(john.armor);

// const john = Object.create(soldier) // actual syntax during creating new object
// console.log(john.sayHello());