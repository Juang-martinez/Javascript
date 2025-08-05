/*
//EJERCICIO1
alert("¡Bienvenida/o a nuestro sitio web!");

//Variables
let nombre = prompt("¿Cuál es su nombre?");
let edad = prompt("¿Cuál es su edad?");
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "Error, completa todos los campos";

//Condicionales
if (nombre == "" || edad == "") {
    alert(mensajeDeError);
} else if (edad >= 18) {
    alert("¡Puede obtener tu licencia de conducir!")
} else {
    alert("Lo sentimos, no puedes obtener tu licencia de conducir");
}

//Consola
console.log("Nombre completo del usuario: " + nombre);
console.log("Edad del usuario: " + edad);
console.log("El usuario puede obtener su licencia de conducir: " + (edad >= 18));
console.log("El usuario no puede obtener su licencia de conducir: " + (edad < 18));
*/

/* 
//EJERCICIO2
alert("Hola, vamos a ver que día de la semana es hoy");

//Variables
let dia = prompt("¿Que día de la semana es hoy?").toLowerCase();
let finSemana = ["sabado", "domingo"];

//Condicionales
if (finSemana.includes(dia)){
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

//Consola
console.log("Día de la semana: " + dia);
console.log("Es fin de semana: " + finSemana.includes(dia));
*/

/*
//EJERCICIO3
alert("Vamor a ver si tu número es positivo o negativo");

//Variables
let numero = prompt("Introduzca el número");

//Condicionales
if (numero > 0) {
    alert("El número es positivo");
} else if (numero < 0){
    alert("El número es negativo");
}

//Consola
console.log("Número introducido: " + numero);
console.log("El número es positivo: " + (numero > 0));
console.log("El número es negativo: " + (numero < 0));
*/

/*
//EJERCICIO4
alert("Vamos a ver si has ganado");

//Variables
let numero = prompt("Introduzca la puntuación que obtuvo en el juego por favor:");
let puntuacionGanadora = 100;

//Condicionales
if (numero >= puntuacionGanadora) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Lo sentimos, no has ganado. Intentalo nuevamente");
}
*/

/*
//EJERCICIO5
alert("Bienvenido/a, verifiquemos el saldo en su cuenta");

//Variables
let saldo = 2500;

//Mensaje con template string
alert(`El saldo actual de su cuenta es: $${saldo}`);
*/

/*
//EJERCICIO6
alert("Bienvenido/a al sistema");

//Variables
let nombreUsuario = prompt("Por favor, ingrese su nombre a continuación:");

//Devolución
alert(`Hola ${nombreUsuario}, bienvenido/a al sistema.`);
*/

/*
// EJERCICIO7
alert("Bienvenido/a al contador del 1 al 10.");

//Variables
let contador = 1;

// Bucle
while (contador <=10){
    alert(contador);
    contador++; 
}
*/

/*
// EJERCICIO8
alert("Bienvenido/a al contador del 10 al 0.");

//Variables
let contador = 10;

// Bucle
while (contador >= 0) {
    alert(contador);
    contador--;
}
*/

/*
// EJERCICIO9
alert("Bienvenido/a al programa de cuenta regresiva.");

//Variables
let numero = parseInt(prompt("Por favor, ingrese un número para iniciar la cuenta regresiva:"));
let contador = numero;

//Bucle
while (contador >= 0) {
    console.log (contador);
    contador--;
}
*/

/*
// EJERCICIO10
alert("Bienvenido/a al programa de cuenta progresiva.");

//Variables
let numero = parseInt(prompt("Por favor, ingrese un número para iniciar la cuenta progresiva:"));
let contador = 0;

// Bucle
while (contador <= numero){
    console.log(contador);
    contador++;
}
*/

/*
// EJERCICIO11
console.log("¡Bienvenido/a a la página web!");
*/

/*
// EJERCICIO12
//Variables
let nombre = "Juan Gabriel Martinez";

//Consola
console.log(`¡Hola ${nombre}!`);
*/

/*
// EJERCICIO13
//Variables
let nombre = "Juan Gabriel Martinez";

//Mostrar mensaje
alert(`¡Hola ${nombre}!`);
*/

/*
//EJERCICIO14
alert("¡Bienvenido/a a nuestro sitio web!");

//Variables
let programacion = prompt("Cuál es el lenguaje de programación que más te gusta?");
let respuesta = programacion;

//Consola
console.log(`El lenguaje de programación que más me gusta es ${respuesta}.`);
*/

/*
//EJERCICIO15
alert("¡Bienvenido/a a nuestro sitio web!");

//Variables
let valor1 = parseInt(prompt("Ingrese el primer valor:"));
let valor2 = parseInt(prompt("Ingrese el segundo valor:"));
let resultado = valor1 + valor2;

//Consola
console.log(`La suma de ${valor1} y ${valor2} es igual a: ${resultado}.`);
*/

/*
//EJERCICIO16
alert("¡Bienvenido/a a nuestro sitio web!");

//Variables
let valor1 = parseInt(prompt("Ingrese el primer valor:"));
let valor2 = parseInt(prompt("Ingrese el segundo valor:"));
let resultado = valor1 - valor2;

//Consola
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a: ${resultado}.`);
*/

/*
//EJERCICIO17
alert("¡Bienvenido/a a nuestro sitio web!");

//Variables
let edad = prompt("A continuación, ingrese su edad por favor:");

//Condicionales
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}
*/

/*
//EJERCICIO18
alert("¡Bienvenido/a a nuestro sitio web!");

//Variables
let numero = parseInt(prompt("Ingrese un número a continuación:"));

//Condicionales
if (numero > 0){
    alert("El número es positivo");
} else if (numero < 0) {
    alert("El número es negativo");
} else {
    alert("El número es cero");
}
*/

/*
//EJERCICIO19

//Variables
let contador = 1;

//Bucle
while (contador <= 10){
    console.log(contador);
    contador++;
}
*/

/*
//EJERCICIO20
alert("Bienvenido/a, vamos a ver si aprobaste o no");

//Variables
let nota = parseInt(prompt("Por favor, ingrese la nota que obtuvo en el examen:"));

//Condicionales
if (nota >= 7){
    alert("Felicidades, aprobaste el exámen.");
} else {
    alert("Lo sentimos, reprobaste el exámen.");
}
*/

/*
//EJERCICIO21

//Variables
let numeroAleatorio = Math.random();

//Consola
console.log(numeroAleatorio);
*/

/*
//EJERCICIO22

//Variables
let numeroEntero = Math.floor(Math.random() * 10) + 1;

//Consola
console.log(numeroEntero);
*/

/*
//EJERCICIO23
let numeroAleatorio = Math.floor(Math.random()*1000) + 1;

//Consola
console.log(numeroAleatorio);
*/

