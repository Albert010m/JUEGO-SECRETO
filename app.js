let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    console.log(numeroDeUsuario === numeroSecreto)
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número ¡CEROO MIEDOOO! en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
} 
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo){

}else{
    

    //si el numero generado esta en la lista 

    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }  else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    } 
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'RADIOpaddock The Game');
    asignarTextoElemento('p', `Dame un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar numero aleatorio
    //reiniciar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();