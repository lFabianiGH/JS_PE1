const anioActual = new Date().getFullYear();

let apellido = "";
let nombre = "";
let anioNacimiento = 0;
let peso = 0;
let altura = 0;

apellido = prompt("Ingrese su apellido:");
nombre = prompt("Ingrese su nombre:");
anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));
peso = parseFloat(prompt("Ingrese su peso en kg:"));
altura = parseFloat(prompt("Ingrese su altura en metros (para '173 cm' escriba '1.73'):"));

let edad = anioActual - anioNacimiento;
let imc = peso / (altura * altura);

alert("Hola, " + nombre + " " + apellido + ". Tienes " + edad + " años.");
alert("Tu IMC es: " + imc.toFixed(2));