function fib(c) {
    let str = '';
    let arr = [];

    if (c === 0 || !Number.isInteger(c)) return "";

    if (c === 1) {
        arr.push(0);
    } else {
        arr = [0, 1];
        for (let i = 0; i < c-2; i++) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr.length - i === 1) {
            str += `${arr[i]}`;
        } else {
            str += `${arr[i]} `;
        }
    }

    return str;
}