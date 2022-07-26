var count = 0
var round = 0

var lifesquare = 0

var dif = 4
var perfects = 0
var expand = ''

function newsquares() {
    lifesquare = 0
    count = 0
    point = 0

    round++ 

    document.querySelectorAll('.square').forEach(e => e.remove()); // Remover todos os quadrados
    var bigbox = document.querySelector(".bigbox")

    if (round == 3 || round % 10 == 0) { // Aumentar dificuldade do round
        dif++
    }

    if (perfect != '') { // Verificar acertos perfeitos
        perfects++
    }

    for (var i = 0; i < dif; i++) { // Aumentar grid conforme são adicionados mais quadrados
        expand += ' 1fr '
    }
    bigbox.style.gridTemplateColumns = expand
    expand = ''


    for (var i = 0; i < dif**2; i++) { // Criar 16 botões sempre que roda uma página
        var random = Math.floor(Math.random() * (dif/2)) // Chance de gerar um quadrado certo
        var random2 = Math.floor(Math.random() * (dif*3)) // Chance de gerar um quadrado especial
        var neww = document.createElement("button")

        neww.className = 'square'

        if (random == 1 && count < (dif**2)/2) { // O máximo de quadrados certos que podem ser gerados = Área/2
            if (random2 == 1 && round >= 5 && lifesquare == 0) { // Gerar quadrado especial (1 por round)
                neww.style.backgroundColor = 'rgb(131, 255, 131)'
                neww.style.borderColor = 'rgb(1, 1, 1)'
                lifesquare++
            }
            else {
                neww.style.backgroundColor = 'rgb(125, 234, 241)'
                neww.style.borderColor = 'black'
            }
            count++
        }

        document.querySelector(".bigbox").appendChild(neww)
    }

    setTimeout(hidesquare, 500 + (dif * 125)) // Esconder quadrados

    if (round < 10) {
        chance += dif * 0.5 
    }
    else if (round == 10) {
        document.querySelector("#warnings").style.display = 'block'
    }
    else if (round == 11) {
        document.querySelector("#warnings").style.display = 'none'
    }

    wrocombo = 0
    perfect = '<div style="color: blue">Perfeito</div>'
    document.querySelector("#round").innerHTML = `Round ${round} (${dif}x${dif})`


}