const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0)
               .reduce((acc, item) => (typeof(acc) === 'object' ? acc.amount : acc) + item.amount)
};

const getTotalIncomeAmount = (data) => {
    if (data.some(item => item.amount < 0)) {
        return data.reduce((acc, item) => (typeof(acc) === 'object' ? acc.amount : acc) + item.amount)

    } else {
        return getPositiveIncomeAmount(data)
    }
};

console.log(getTotalIncomeAmount(funds))