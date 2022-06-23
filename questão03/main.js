const fs = require('fs');
const path = require('path');
const dataPath = path.resolve(__dirname,'./data.json');

function loadData() {
    const data = fs.readFileSync(dataPath,"utf8") ; 
    const dataJSON = JSON.parse(data);
    return(dataJSON);  
}

const dataArray = loadData();

const valueArray = dataArray.map((el) => {
    return (el.value);
})

let sumTotal = 0;
let days = 0;

dataArray.forEach(element => {
    if(element.value > 0) {
        sumTotal = sumTotal + element.value;
        days = days + 1;
    }
});

const media = (sumTotal/days);


const minFaturamento = Math.min(...valueArray);
const maxFaturamento = Math.max(...valueArray);

const jackpotDays = (arr,media) => {
    let cont = 0;
    arr.forEach((el) => {
        if(el > media && el !== 0)
        cont++;
    })
    return cont;
}
const numberDays = jackpotDays(valueArray,media);
console.log('Número de dias com faturamento acima da media::',numberDays );
console.log('Máximo faturamento::',maxFaturamento);
console.log('Mínimo faturamento::',minFaturamento);