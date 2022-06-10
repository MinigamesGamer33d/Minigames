async function getJson(){
    let rawResponse = await fetch('/config/codes.json')
    response = await rawResponse.json()
    return response.codes 
}

function appendMidCode(code){
    const divCodes = document.getElementsByClassName('codes')[0]
    let div = document.createElement("div")

    div.setAttribute("class", "codeq")
    div.innerHTML = `<p>${code}</p>`

    return divCodes.appendChild(div)

}

function appendBreakCodes(code, i){

    const codeSequence = document.getElementsByClassName('codeSequence')[0]
    let h2 = document.createElement('h2')
    h2.setAttribute('class', `${i}`)

    h2.innerHTML = code
    return codeSequence.appendChild(h2)
}

function newSelectCode(pos){

    const code = document.getElementsByClassName('code')[0]
    let codestring = document.getElementsByClassName(pos)[0].innerHTML
    console.log(codestring)
    let p = document.createElement('p')

    p.innerHTML = codestring
    code.appendChild(p)
}

async function main(){
    const Allcodes = await getJson()
    let selectedCodes = []
    let breakFirewallCodes = []

    for (let i = 0; i < 32; i++) {
        let code = Allcodes[Math.floor(Math.random() * Allcodes.length)];
        selectedCodes.push(code)
        
    }

    for(let i = 0; i < 4; i++) {
        let code = selectedCodes[Math.floor(Math.random() * selectedCodes.length)]
        breakFirewallCodes.push(code)
    }


    selectedCodes.forEach(code => {
        appendMidCode(code)
    })

    let breakpos = 0

    breakFirewallCodes.forEach(code => {
        breakpos++
        appendBreakCodes(code, breakpos)
    })

    newSelectCode(1)

}

main()