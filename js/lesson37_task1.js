const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let fullVolume = 0;
    data.shops.forEach((item, index) => {
        fullVolume += item.width * item.length * data.height;
    });
    const bugdetNeed = fullVolume * data.moneyPer1m3;
    return (bugdetNeed > data.budget) ? 'Бюджета недостаточно' : 'Бюджета достаточно';
}

console.log(isBudgetEnough(shoppingMallData))