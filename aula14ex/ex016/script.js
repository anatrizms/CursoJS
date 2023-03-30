function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
        window.alert('[ERRO] Preencha todos os campos.')
    } else {
        if(p == 0) {
            window.alert('[ERRO] Passo inválido. Considerando passo 1:')
            p = 1
        }
        res.innerHTML = 'Contando:<br>'

        if(i < f) { // contagem crescente
            for(var c = i; c <= f; i = c += p) {
                res.innerHTML = res.innerHTML + `${c} \u{1F449} `
            }
        } else { // contagem decrescente
            for(c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}