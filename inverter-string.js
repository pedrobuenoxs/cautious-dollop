const inverterString = (str) =>{
    var strInvertida = "";
    for(i = str.length - 1 ; i > -1; i--)
    {
        strInvertida += str[i]
    }
    return strInvertida
}

console.log(inverterString('pedro'))