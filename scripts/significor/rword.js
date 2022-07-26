var rig = 0
var count = 0
var bcombo = 0
var combo = 0
var verify = ''

var arig = new Audio();
arig.src = 'sources/right.wav'
var awro = new Audio();
awro.src = 'sources/wrong.wav'

display1 = document.querySelector("#rword1")
display2 = document.querySelector("#rword2")
display3 = document.querySelector("#combo")

colors1 = ['Vermelho','Amarelo','Verde','Azul','Preto']
colors2 = ['red','yellow','green','blue','black']



function rword(x) {
    if (x != 'i') { // se não for o início
        if (verify == x) { // se palavra igual a cor
            combo += 1
            if (combo > bcombo) {
                bcombo = combo
            }
    
            display3.innerHTML = `${combo}x`

            rig += 1
            arig.play()
        }
        else { // se palavra diferente da cor
            combo = 0
            display3.innerHTML = '-'
            awro.play()

        }
        count += 1
    }
    else { // se for o round inicial
        display3.innerHTML = '-'
    }

    rcolor2 = Math.floor(Math.random() * 5)
    rcolor3 = Math.floor(Math.random() * 5)

    percentage = Math.floor(Math.random() * 9)
    
    if (percentage <= 2) { // 30% de chance de cair uma sentença correta
        rcolor1 = rcolor4
    }
    else {
        rcolor1 = Math.floor(Math.random() * 5)
        rcolor4 = Math.floor(Math.random() * 5)
    }

    display1.innerHTML = `${colors1[rcolor1]}`
    display1.style.color = `${colors2[rcolor2]}`

    display2.innerHTML = `${colors1[rcolor3]}`
    display2.style.color = `${colors2[rcolor4]}`

    if (rcolor1 == rcolor4) {
        verify = 'y'
    }
    else {
        verify = 'n'
    }
}