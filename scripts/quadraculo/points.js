var point = 0
var chance = 0
var squaren = 0
var wrocombo = 0
var perfect = ''

var arig = new Audio();
arig.src = 'sources/right.wav'
var alife = new Audio();
alife.src = 'sources/lifesquare.wav'

var awro = new Audio();
awro.src = 'sources/wrong.wav'

function points(s, answer) {
    if (s.style.backgroundColor != 'rgb(125, 234, 241)' && s.style.backgroundColor != 'rgb(248, 106, 106)' && s.style.backgroundColor != 'rgb(131, 255, 131)') {
        if (answer == 'y') { // Se a resposta for certa
            if (s.style.borderColor == 'rgb(1, 1, 1)') { // Se for o quadrado especial, dê mais vida
                chance += 3
                document.querySelector("#life").style.color = 'rgb(131, 255, 131)'
                s.style.backgroundColor = 'rgb(131, 255, 131)'

                alife.play()
                setTimeout(function() {document.querySelector("#life").style.color = 'black'}, 1000)
                setTimeout(function() {s.style.backgroundColor = 'rgb(125, 234, 241)'}, 1000)
 
            }
            else {
                s.style.backgroundColor = 'rgb(125, 234, 241)' 
            }
            point++
            squaren++
        }
        else {
            s.textContent = 'X'
            s.style.backgroundColor = 'rgb(248, 106, 106)'

            chance--
            wrocombo++
            awro.play()

            perfect = ''

        }
    


        if (point == count) {
            newsquares()
            arig.play()
        }
        else if (wrocombo >= 5) {
            newsquares()
        }

        if (chance < 1) {
            document.querySelector(".bigbox").style.display = 'none'
            document.querySelector("#life").style.display = 'none'
            document.querySelector("#warnings").style.display = 'none'
            document.querySelector("#end").style.display = 'block'

            document.querySelector("#perfects").innerHTML = `${perfects} rounds perfeitos`
            perfect = ''
        }
        
        document.querySelector("#squaren").innerHTML = `${perfect}${squaren} quadrados acertados`
        document.querySelector("#life").innerHTML = `${chance.toFixed(0)} Vidas`
    }
}