//crear una funcion que mientras sea verdad  compruebe todos los numeros pasados por un array, guarde los positivos en un array positivos, 
//los negativos en un array negativos y calcule la suma de los dos arrays

// @autor: Salah NE
//
//Declaracion de variables





function clasNum(numeros: number[]) {
  const positivos: number[] = [];
  const negativos: number[] = [];
  let sumaNumerosPos: number = 0;
  let sumaNumerosNeg: number = 0;

  for (const num of numeros) {
    if (num > 0) {
      positivos.push(num);
      sumaNumerosPos += num;
    } else {
      negativos.push(num);
      sumaNumerosNeg += num;
    }
  }
  // El return debe ir fuera del bucle for
  return {
    positivos,
    negativos,
    sumaNumerosPos,
    sumaNumerosNeg
  };
} // Aqu cierra la funcin

// Inicio de la aplicacin
const datos: number[] = [1, -10, 25, 11, 9, 5, -6, 8, -5, 9, 12, -10];

const r = clasNum(datos);

console.log("El array de positivos es: ", r?.positivos);
console.log("------ Suma del array positivos es: ", r?.sumaNumerosPos);
console.log("El array de negativos es: ", r?.negativos);
console.log("------ Suma del array negativos es: ", r?.sumaNumerosNeg);

