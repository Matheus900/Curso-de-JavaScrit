//var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
for (var pos=0; pos < num.length; pos++){
    
}

for(var pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/


function parimp(n){
    if (n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

var res = parimp(13)
console.log(res)