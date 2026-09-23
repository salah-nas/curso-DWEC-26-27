//v1 (casi nunca usaremos algo tan verboso)
function celsiusToKelvin(celsius){
    let kelvin = celsius + 273.15
    return kelvin
}

//v2 (version donde priorizamos el menor número de lineas)
function celsiusToKelvin2(celsius){
    return celcius + 273.15
}

//v3 (modo pro usando arrow function)

const celtToKel = (celsius) => {
  return celsius + 273.15
}

//v4 (modo pro max)

const cToK = (c) => c + 273.15

//funcion que le pase como param dos numeros y me los ordene

function ordenarNumeros(n1,n2){
  let numOrdenado = n1 < n2 ? console.log(n1,n2) : console.log(n2,n1);
  return numOrdenado;
}
//funcion que pase de celsius a kelvin pero comprobando que celsius es un numero, 
//que la temperatura no puede estar por debajo del 0 absoluto (-273)
//y el resultado me lo das con solo 2 cifras decimales
//isNaN --> buscamos lo que significa
//¿como truncamos un numero a 2 cifras decimales?

function ceToKel(celcius){
  if(!isNaN(celcius)){
    if(celcius >= -273){
      let kelvin = celcius + 273.15;
      let truncado = Math.trunc(kelvin * 100) / 100;
      return truncado
    }else{
      return "Temperatura por debajo del cero absoluto";
    }
  }else{
      return "número no válido"
  } 
}

ordenarNumeros(10, 5);
ordenarNumeros(3, 8);

// 2. Probar la función de Celsius a Kelvin
let resultado1 = ceToKel(25.456);
console.log("Resultado 1:", resultado1);

let resultado2 = ceToKel(-300);
console.log("Resultado 2:", resultado2);




