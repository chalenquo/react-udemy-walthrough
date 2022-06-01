function amountOfPages(summary){
    if (typeof(summary) !== 'number') return
    let pages = 0;
    let sum = summary;
    for (let i = 0; i <= 9; i++) {
        if (sum === 0) break;
        pages++;
        sum--;
    }
    for (let i = 10; i <= 99; i++) {
        if (sum < 2) break;
        pages++;
        sum -= 2;
    }
    for (let i = 100; i <= 999; i++) {
        if (sum < 3) break;
        pages++;
        sum -= 3;
    }
    return pages;
}

console.log(amountOfPages(5))
console.log(amountOfPages(25))
console.log(amountOfPages(1095))
console.log(amountOfPages(185))
