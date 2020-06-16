var agora = new Date()
var hora = agora.getHours()
var divImag = document.getElementById('imag')
var divHora = document.getElementById('horas')
//var hora = 21

//alert(hora)
if(hora < 12){
   divHora.innerHTML += `<br>Agora são ${hora} horas<br>`
   divImag.innerHTML += `<img src="amanhecer.jpg" alt="manha">`
    document.body.style.background = 'aquamarine'
}else if (hora >= 12 && hora <=18){
    divHora.innerHTML += `<br>Agora são ${hora} horas<br>`
    divImag.innerHTML += `<img src="amanhecer.jpg" alt="manha">`
}else{
    divHora.innerHTML += `<br>Agora são ${hora} horas<br>`
    divImag.innerHTML += `<img src="amanhecer.jpg" alt="manha">`
}

//alert(`Agora são ${hora} horas`)