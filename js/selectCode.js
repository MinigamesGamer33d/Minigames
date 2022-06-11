let i = 0;
let tentativa = 1;
let level = 0;
let interval;

passapassa()

function passapassa(){
    if(level >= 4 ){
        alert("Win!")
    }

     interval = setInterval(() => {
        let code = document.getElementsByClassName('codeq')[i]
        i++
        
        if(i == 32){
           i = 0
        }
        
        code.setAttribute('class', 'codeq selected')
        setTimeout(() => {
            code.setAttribute('class', 'codeq')
        }, 500)
    
    
    }, 500)
    
}

function newLevel(level){
    let hit = document.getElementById(level)
    console.log(hit)
    hit.setAttribute('class', 'hit')
    newSelectCode(level + 1)
    
}

document.addEventListener('keypress', (e) => {
    let key = e.key
    console.log('a')

    if(key == 'Enter'){
        clearInterval(interval)
        let divSelected = document.getElementsByClassName('selected')[0]
        let selectCode = document.getElementById('truevalue')
        let truevalue = selectCode.innerHTML
        let selected = divSelected.innerHTML
        console.log(truevalue, selected)


        if(truevalue == selected){
            level++
            selectCode.remove()
            //Se acertar
            //Mudar o valor em cima
            //Addc o hit no primeiro codigo
            passapassa()
            return newLevel(level)
        }else if(truevalue != selected){

            if(tentativa == 2){
                alert('gameover')
                return window.location.reload()
            }
            tentativa++
            passapassa()
            return alert('Mais uma tentativa')

        }

        
    }
})