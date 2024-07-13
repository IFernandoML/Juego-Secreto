const maxNumero = 10;
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento() {
    numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento": "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "Casi! El número secreto es más pequeño");
        } else {
            asignarTextoElemento("p", "Casi! El número secreto es más grande");
        }
        intentos++;
        limpiarCaja();
    } 
}

function limpiarCaja() {
    // la otra manera de accerder a la etiqueta que tiene como atributos el id es #nombreDeId 

    /**let valorCaja = document.querySelector('#valorUsuario');
    return valorCaja.value = ""; mejor escrito seria */ 

    return document.querySelector("#valorUsuario").value = " ";
}

function generarNumeroSecreto(maxNumero) {
    let numeroRandom = Math.floor(Math.random()*maxNumero)+1;
    if(listaNumerosSorteados.length == maxNumero) {
        asignarTextoElemento("p", "Ya se sortearon todos los numero posibles");
        /**Corrige el problema de recursividad puesto que al estar adivinando siempre trataba de llamar a buscar nuevos valores
         * y este no sabia que hacer cuando llegaba a los maxNumeros. */
        //listaNumerosSorteados = [];
       // reiniciarJuego();
        //return generarNumeroSecreto(maxNumero);
    } else {
        if(listaNumerosSorteados.includes(numeroRandom)) {
            return generarNumeroSecreto(maxNumero); // recursividad para asegurar que agregue otro distinto 
    } else {
        listaNumerosSorteados.push(numeroRandom); // la condicion de corte y agrega los numeros aleatorios
        return numeroRandom;
        }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesInciales();
}
function condicionesInciales() {
    asignarTextoElemento("h1", "Bienvenidos(as) al juego Adivina El Número");
    asignarTextoElemento("p", `Ingrese un número del 1 al ${maxNumero}`);
    numeroSecreto = generarNumeroSecreto(maxNumero);
    intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled", "lo desabilito (o true por convencion)");
    // pa probar en consola
    console.log("El numero secreto es: " + numeroSecreto);
    console.log(listaNumerosSorteados);
}

condicionesInciales();
 