const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

let space = lines;
let stars = '*';

for (let i = 0; i <= lines; i++) {

    for (let j = space; j > 0; j--) {
        result += ' ';
    }
    result += stars + '\n';
    stars += '**';
    space--;
}

console.log(result)