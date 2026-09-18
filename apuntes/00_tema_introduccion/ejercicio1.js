// ejercicio 1 de javascript
//


console.log("Hola mundo");

//tipos de datos en js
//
//String
// '' "" ``
let nombre = "Salah";
let apellidos = "Nasser Elaslani";
let mesesTrabajo = 6;
console.log(`Hola a todos, me llamo ${nombre}, ${apellidos} y llevo trabajando ${mesesTrabajo} meses`);
console.log(typeof String(mesesTrabajo));
console.log(typeof Number(apellidos));
//validación básica == ===
// == --;> significa si el valor de la izq es igual al valor de la der

// === ---> significa si el valor y tipo de la izquierda coincide con el valor y tipo de la derecha
'5'=== 5; // --> false
'5' == 5;// --> true

// ternarios evaluacion_expresion ? verdadero : false
//


const edad1 = "21";
edad1 > 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

//Ejercicio 2 --> dada la edad, los min y los segundos. Comprobar si la edad es un num positivo y mayor que 18 
//estrictamente y 2 comproobar si la hora y los min son validos dentro de mi sistema de numeración
//edad, hora, min --> valores
//

const edad = 21;
let min = 35;
let seg = 17;

edad >= 0 && edad > 18 && min > 0 && min <= 60 && seg > 0 && seg <= 60 ? console.log("la edad es positiva y es mayor de edad. Los min y los segundos son válidos"): console.log("Los parametros no son correctos");

