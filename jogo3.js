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
let pos = 9
local[pos].innerText = 'X'

//Abaixo o algoritmo que faz com que eu passeie pelas divs.

addEventListener('keydown', qualquer)
function qualquer(evento){
    var char = evento.char || evento.charCode || evento.which;
    if (char == 37 && pos != 0){
        local[pos].innerText = ''
        pos--
        local[pos].innerText = 'X'
    } else if(char == 39 && pos != 9){
        local[pos].innerText = ''
        pos++
        local[pos].innerText = 'X'
    } else if (char == 38 && pos > 4){
        local[pos].innerText = ''
        pos -= 5
        local[pos].innerText = 'X'
    } else if (char == 40 && pos < 5){
        local[pos].innerText = ''
        pos += 5
        local[pos].innerText = 'X'
    } else{
        //window.alert('Ainda não reconhecemos essa tecla.')
    }
    
}








