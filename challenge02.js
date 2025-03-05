const calcTip = (billValue) => {
    let newValueBilled = 0;
    if(billValue >= 50 && billValue <= 300){
        newValueBilled = calculateTipValue(billValue, 15)
    }else{
        newValueBilled = calculateTipValue(billValue, 20)
    }
    return newValueBilled;
}

const calculateTipValue = (value, tip) => {
    const result =  value * (tip / 100);
    return result;
}

const bills = [125, 555, 44];

const tips  = bills.map((billValue) => {
    const newResult = calcTip(billValue);
    return newResult;
})

console.log("tips ", tips )