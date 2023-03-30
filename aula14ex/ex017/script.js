function tabuada() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('[ERRO] Digite um número.')
    } else {
        var n = Number(num.value)
        var cont = 1
        tab.innerHTML = '' // limpou a tela para receber a próxima tabuada

        while (cont <= 10) {
            var item = document.createElement('option')
            item.text += `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`// importante para linguagens como PHP (serve para saber qual item foi selecionado)
            tab.appendChild(item)
            cont++
        }
    }   
}