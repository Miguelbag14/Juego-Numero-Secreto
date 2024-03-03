let NumeroSecreto = 0;
let intentos = 0;
let listanumerossorteados = [];
let numeromaximo = 10;

condicionesiniciales();

function Verificarintento() {
    let numerodeusuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);

    if (numerodeusuario === NumeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en  ${intentos} ${(intentos == 1) ? "vez" : "veces "}`);
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else {
        //el usuario no acerto
        if(numerodeusuario > NumeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");

        }else {
            asignarTextoElemento("p","El numero secreto es mayor")
        
        }
        intentos++;
        limpiarcaja();
    }
    return;
}

function limpiarcaja(){
   document.querySelector("#valorUsuario").value = "";
   
}

function asignarTextoElemento(elemento, texto){
    let ElemntoHTML = document.querySelector(elemento);
    ElemntoHTML.innerHTML = texto
}


 
function GenerarNumeroSereto() {
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(listanumerossorteados);
    console.log(numerogenerado);
    
    if(listanumerossorteados.length == numeromaximo){

    asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");

        }else
                if (listanumerossorteados.includes(numerogenerado)){
                                return GenerarNumeroSereto();
                            } else {
                                listanumerossorteados.push(numerogenerado);
                                return numerogenerado
                            }

                        
                        }
                

    
          


function condicionesiniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeromaximo}`);
    NumeroSecreto = GenerarNumeroSereto();
    intentos = 1;

}

function reiniciarjuego(){
    //limpiar la caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
    condicionesiniciales(); 
    //generar el numero aleatorio 
    
    //desahabilitar el boton e nuevo juego 
     document.querySelector("#reiniciar").setAttribute("disabled","true")
    //inicializar el numero de intentos
   
}

