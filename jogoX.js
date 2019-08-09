var campo1 = window.document.getElementById('div1')
var campo2 = window.document.getElementById('div2')
var campo3 = window.document.getElementById('div3')
var campo4 = window.document.getElementById('div4')
var campo5 = window.document.getElementById('div5')
var campo6 = window.document.getElementById('div6')
var campo7 = window.document.getElementById('div7')
var campo8 = window.document.getElementById('div8')
var campo9 = window.document.getElementById('div9')
var campo10 = window.document.getElementById('div10')
var obj = 'X'
let local = [campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, campo10]
var estado = 'vivo'

function gameOver(){
    load (controle(false))
    //load(qualquer)
    //qualquer(false)
    obj = ''
    desafio = ''
    local.innerText = ''
    //desafio = ''
    campo1.innerText = 'G'
    campo2.innerText = 'A'
    campo3.innerText = 'M'
    campo4.innerText = 'E'
    campo7.innerText = 'O'
    campo8.innerText = 'V'
    campo9.innerText = 'E'
    campo10.innerText = "R"
}

function andar(){
    campo1.innerText = ''
    campo2.innerText = ''
    campo3.innerText = ''
    campo4.innerText = ''
    campo5.innerText = ''
    campo6.innerText = ''
    campo7.innerText = ''
    campo8.innerText = ''
    campo9.innerText = ''
    campo10.innerText = ''

    controle(true)
    
}
function controle(estado){
    if(estado == true){
        let pos = 9
        local[pos].innerText = (obj)
        var desafio = '0'
        local[8].innerText = (desafio)
        addEventListener('keydown', qualquer)
        function qualquer(evento){
            var char = evento.char || evento.charCode || evento.which;
            if (char == 37 && pos != 0 && pos != 5){
                local[pos].innerText = ''
                pos--
                if (local[pos].innerText == desafio){   
                    gameOver()
                    //qualquer(false, false)
                    //controle(false)          // assim que é feito a validação, se odesafio estiver dentro da div aciona a function gameOver.
                } else {
                    local[pos].innerText = 'X'
                }            
            }
        }
        if(estado == false){
            var char = evento.char || evento.charCode || evento.which;
            if (char == 37 && pos != 0 && pos != 5){
                local[pos].innerText = ''
                
            }
        }
    }
}
//}

