var sec=3
var min=0

function time(){
    if (document.querySelector('#bigbox').style.display != 'none') {
        sec--
        if(sec==-1){
            min--
            sec=59
        }
        else if (sec == 9 && min == 0) {
            document.querySelector('#time').style.color = 'red'
        }
        if (sec <= 0 && min <= 0) { //Acabou o tempo
            document.querySelector('#bigbox').style.display = 'none'
            document.querySelector('#results').style.display = 'block'

            if (count > 0) { //Exibir resultados
                var percentage = parseInt((rig * 100) / count)
        
                document.getElementById("count").innerHTML = `${rig} de ${count}<br>Precisão: ${percentage}%</br>`
                document.getElementById("count").style.color = 'blue'
                document.getElementById("bcombo").innerHTML = `Maior sequência: ${bcombo}`
            }
            else {
                document.getElementById("count").innerHTML = 'Sem resultados'
            }
        }
        else {
            document.querySelector('#time').innerText=digits(min)+':'+digits(sec)
        }
    
    }
}

function digits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

