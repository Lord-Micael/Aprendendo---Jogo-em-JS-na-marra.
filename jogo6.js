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


/* function andar(){
let temporizador = setInterval(andar, 1000)
//Esse temporizador acima faz um papel parecido com a da while.
    if(pos > local.length){
        clearInterval(temporizador) */


let local = [campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8, campo9, campo10]

function andar(){
    campo1.innerText = '' ;    campo2.innerText = '' ;    campo3.innerText = '' ;    campo4.innerText = '' ;    campo5.innerText = '' ;
    campo6.innerText = '' ;    campo7.innerText = '' ;    campo8.innerText = '' ;    campo9.innerText = '' ;    campo10.innerText = '' ;

    var obj = 'X'
    let pos = 0
    local[pos].innerText = (obj)
    var desafio = '0'
    let Dpos = ''
    //let Upos = 4
    // -- local[Dpos].innerText = (desafio)
    //local[Upos].innerText = (desafio)

    //Obstáculos.
    let temporizar = setInterval(gerar, 1500)
    function gerar(){
        if (local[pos].innerText != obj){
            clearInterval(temporizar)
        }
        let num = 7
        if (num % 2 == 0){
            and(true)
        }else{
            and(false)
        }
    }  
    function and(oque){
        if(oque == true){
            Dpos = 4
            local[Dpos].innerText = desafio
        }
        if(oque == false){
            Dpos = 9
            local[Dpos].innerText = desafio
        }
    }
    
//----- Daqui pra baixo está funcionando.

    let temporizador = setInterval(andador, 500)
    function andador(){
        
    
        if(Dpos == 5 || Dpos == 0){
            clearInterval(temporizador)
        } else {
            local[Dpos].innerText = ''
            //local[Upos].innerText = ''
            Dpos--
            //Upos--
            local[Dpos].innerText = desafio
            //local[Upos].innerText = desafio
        }
        
    }

    //Controles... Funcionaram somente se o dentro da div for o obj.
    addEventListener('keydown', qualquer)
    function qualquer(evento){


        var char = evento.char || evento.charCode || evento.which;
        if (char == 37 && pos != 0 && pos != 5 && local[pos].innerText == obj ){  //lembrando que o que te travou por mais de 3 semanas foi que você queria dá o caminho do local, porém o caminho do local leva para uma div, e o que a gente precisa para poder comparar a div com o que a gente quer, do valor que está na div, mais especificamente, A PORCARIA DO INNERTEXT, VOCÊ TEM QUE COMPARAR O INNERTEXT DO QUE VOCÊ QUER, COM O VALOR QUE VOCÊ QUER.
            local[pos].innerText = ''
            pos--
            if (local[pos].innerText == desafio){   
                gameOver()          // assim que é feito a validação, se odesafio estiver dentro da div aciona a function gameOver.
            } else {
                local[pos].innerText = obj
            }            
            
        } else if(char == 39 && pos != 9 && pos != 4 && local[pos].innerText == obj){
            local[pos].innerText = ''
            pos++
            if (local[pos].innerText == desafio){
                gameOver()
            } else {
                local[pos].innerText = obj
            } 
        } else if (char == 38 && pos > 4 && local[pos].innerText == obj){
            local[pos].innerText = ''
            pos -= 5
            if (local[pos].innerText == desafio){
                gameOver()
            } else {
                local[pos].innerText = obj
            } 
        } else if (char == 40 && pos < 5 && local[pos].innerText == obj){
            local[pos].innerText = ''
            pos += 5
            if (local[pos].innerText == desafio){
                gameOver()
            } else {
                local[pos].innerText = obj
            } 
        } else{
            //window.alert('Ainda não reconhecemos essa tecla.')
        }

        

    }

}


function gameOver(){
    desafio = ''
    obj = ''
   
    local.innerText = ''
    campo1.innerText = 'G'
    campo2.innerText = 'A'
    campo3.innerText = 'M'
    campo4.innerText = 'E'
    campo7.innerText = 'O'
    campo8.innerText = 'V'
    campo9.innerText = 'E'
    campo10.innerText = "R"
}







