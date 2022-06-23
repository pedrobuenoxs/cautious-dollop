/*
2) Dado a sequência de Fibonacci, 
onde se inicia por 0 e 1 e o próximo valor sempre será 
a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o
 número informado pertence ou não a sequência.
*/

let limitNumber = 1000
const num = 90;
let arr = [];
let msg = 'Não é um número da sequência de fibonacci.'

function fib(x) {    
    if (x > 1000) throw new Error('nº limit: 1000;')      
    let a = 0;
    let b = 1;
    let f = 1;
    Array(x).fill(0).forEach(() => {
        arr.push(f);
        f = a + b;
        a = b;
        b = f;
    })
    return arr;
}

const fibArray = fib(limitNumber);

fibArray.forEach((el) => {
    if ( num == el) msg = 'É um número presente na sequência de fibonacci'
})

console.log(msg)



