const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let sumPositiveNum = null
    let result = Object.entries(data).filter(item => item[1].amount > 0)
    result.forEach(elem => {
        sumPositiveNum += elem[1].amount
    })

    return sumPositiveNum // 13300
};

const getTotalIncomeAmount = (data) => {
    let sumNum = []
    let x = null
    let result = Object.entries(data).some(item => item[1].amount < 0)
    if (result) {
        data.forEach(elem => {
            console.log(elem.amount)
            sumNum.push(elem.amount)
        })
    }
    x = sumNum.reduce((sum, current) => sum + current)
    console.log(result) // true
    console.log(sumNum) // [-1400, 2400, -1000, 500, 10400, -11400]
    console.log(x) // -500
    return x
};

console.log(getTotalIncomeAmount(funds))