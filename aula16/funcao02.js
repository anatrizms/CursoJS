function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 7)) // se colocar console.log(soma(2)) vai retornar undefined porque precisa de 2 parâmetros 

// parâmetros opcionais 
function soma(n1 = 0, n2 = 0) { // vai considerar = 0 se não tiver parâmetro
    return n1 + n2
}

console.log(soma(2)) // vai somar 2 + 0
console.log(soma(2, 2)) // vai somar 2 + 2