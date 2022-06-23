const data = [{
    "estado": "SP",
    "faturamento": 67836.43
},
{
    "estado": "RJ",
    "faturamento": 36678.66
},
{
    "estado": "MG",
    "faturamento": 29229.88
},
{
    "estado": "ES",
    "faturamento": 27164.48
},
{
    "estado": "Outros",
    "faturamento": 19849.53
}];

const tri = data.reduce((acc,cur) => {
    return acc + cur.faturamento
},0)

data.forEach( (el) =>  {
    console.log(`Faturamento ${el.estado}: ${Math.round(el.faturamento*100/tri)}%`)
})