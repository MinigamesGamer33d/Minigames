function startTimer(){
    let s = 5
    
    setInterval(() => {
        s--
        
        
        
    }, 1000);
    
    console.log(s)
    if(s <= 0){
        clearInterval()

    }
}

startTimer()