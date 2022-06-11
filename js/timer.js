const timeTag = document.getElementsByClassName('time')[0]
const p = document.createElement('p')

let s;

function startTimer(){
    s = 60
    
    let sTimer = setInterval(() => {
        s--
        p.innerHTML = `0:${s}`
        timeTag.appendChild(p)
        
        if(s == 0){
            alert('gameover')
            clearInterval(sTimer)
        }
        
        
    }, 1000);
    
}

startTimer()