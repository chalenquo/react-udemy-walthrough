function isPangram(string) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'
    let sum = 0;

    for (let key in abc) {
        if (string.indexOf(abc[key]) !== -1) {
            sum++
        }
    }
    return (sum === 26)
}


console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('Hello world'))

