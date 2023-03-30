function parimpar(n) {
    if(n%2 == 0) {
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}

let res = parimpar(5)
console.log(res) 
// ou
console.log(parimpar(5))