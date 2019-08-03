var campo1 = window.document.getElementById('div1')
var campo2 = window.document.getElementById('div2')
var campo3 = window.document.getElementById('div3')
var campo4 = window.document.getElementById('div4')
var campo5 = window.document.getElementById('div5')
var obj = 'X'
let local = [campo1, campo2, campo3, campo4, campo5]
let pos = 0

let parX = document.createElement('p') // na hora de criar o documento não pode colocar o window.document, tem que ser só document.create
parX.innerText += '0'
campo4.appendChild(parX)
 


function andar(){
let temporizador = setInterval(andar, 1000)
//Esse temporizador acima faz um papel parecido com a da while.
    if(pos > local.length){
        clearInterval(temporizador)
    }else{
        let par = document.createElement('p')       // na hora de criar o documento não pode colocar o window.document, tem que ser só document.create
        par.innerText += ''
        local[pos].appendChild(par)                 // aqui estou criando uma child para o pos, o pos começa com o 0 mas vai acrescentando 1 a cada loop, isso fará com que o cada elemento dentro da array receba a child no momento que rodar.
         
        if (local[pos].innerText != ''){            // não trate um texto como um value , pelo menos não por enquanto
             parX.innerHTML = ''                    // se a posição já estiver cheia com algum text, ela retornará o erro, se não tiver nada ela acrescenta um X   
             par.innerText = 'Error'
        } else{
             par.innerHTML += `X`
        }
        pos++
    }        
    
        
       
    
}
