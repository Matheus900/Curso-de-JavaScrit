function tabuada(){
    var numero = document.getElementById('txtnum')
    var tab = document.getElementById('tab')
    if (numero.value.length == 0){
        alert('[ERROR] Digite um valor no campo do número!')
    }else{
        var n = Number(numero.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}