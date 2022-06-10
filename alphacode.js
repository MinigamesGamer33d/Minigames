const alphanumeric = ['9', 'A','B','6','C','0','D','E','F','G','5', 'H','I','1','2','J','K','8','L','M','4','N','O','7','P','Q','R','S','T','U','V','W','X','Y', 'Z', '3'] 

let digitobruto = []
let code = []


while (code.length <= 99) {
    let digito = alphanumeric[Math.floor(Math.random() * alphanumeric.length)];
    
    console.log(digitobruto.length)

    if(digitobruto.length >= 4){
        let group = digitobruto.join('')
        digitobruto = []
        code.push(group)
    }

    digitobruto.push(digito)

}



console.log(code)
console.log(code.length)