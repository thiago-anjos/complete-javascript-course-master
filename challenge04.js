const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    const bill = bills[i];
    const tip = calcTip(bill);
    const total = bill + tip;
    tips.push(tip);
    totals.push(total);
}

console.log(bills, tips, totals);

