function contar(){
    var ini = document.getElementById('txti').value
    var fim = document.getElementById('txtf').value
    var passo = document.getElementById('txtp').value
    var res = document.getElementById('resultado')

    if (ini.length == 0 || fim.length == 0 || passo == 0){
        alert('[ERROR] Faltam dados!')
    }else{
        res.innerHTML = 'Contando...'
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)

        if(p <= 0){
            alert('Passo inválido. Passo considerado: 1')
            p = 1
        }

        if (i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}-->`
            }
        }else{
            for (var c = i ;c >= f; c -= p)
            res.innerHTML += `${c}-->`

        }
        res.innerHTML += '###'
        

    }
}