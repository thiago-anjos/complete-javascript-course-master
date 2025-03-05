const calcAverage = (...args) =>{
    dividerArgs = args.length;
    const sumArgsValues = args.reduce((acc, value) => acc + value, 0);
    return sumArgsValues / dividerArgs;
}

const scoreDolphins = calcAverage(85, 54, 71);
const scoreKoalas = calcAverage(23, 34, 27);

const messageWinner = (scoreDolphins, scoreKoalas) => {
    if(scoreDolphins > scoreKoalas){
        return `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`;
    }else if(scoreKoalas > scoreDolphins){
        return `Koalas win (${scoreKoalas} vs. ${scoreDolphins})`;
    }else{
        return `No team wins...`;
    }
}

const winner = messageWinner(scoreDolphins, scoreKoalas);
console.log(winner);
