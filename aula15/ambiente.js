var num = [5, 3, 9, 8, 1]
num.sort() // coloca o vetor em ordem crescente
console.log(num) // mostrar vetor na tela
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

for(var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}

for(var pos in num) {
    console.log(num[pos])
}

var pos = num.indexOf(7) // retorna -1 porque o valor 7 não existe no vetor
console.log(`O valor está na posição ${pos}`)