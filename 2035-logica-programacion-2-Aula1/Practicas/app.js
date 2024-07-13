
let nombreDesafio = document.querySelector('h1');

/** Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".*/
nombreDesafio.innerHTML = "¡Hora del Desafio!";
function mensajeConsole() {
    alert("El botón fue clicado.");
}
/**Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
 * preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando 
 * la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti". */
function nombreCuidadBrasil() {
    let nombreCuidad = prompt("¿Cuál es su cuidad favorita en Brasil?");
    alert(`Estuve en ${nombreCuidad} y me acorde de ti.`);
}
/**Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta. */
function mensajeAlert() {
    alert("Yo amor JS");
}

function sumaAlert() {
    let a = parseFloat(prompt("Ingrese un número", 3));
    let b = parseFloat(prompt("Ingrese el número a sumar"));
    return alert(`La suma es: ${a+b}`);
} 

