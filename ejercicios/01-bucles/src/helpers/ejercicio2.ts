//crear una funcion que se le pase como param un texto y lo encripte
//. Añadir una funcion de una cadena de texto encriptada la desencripte

//buscar alguna libreria que permita generar cadenas encriptadas de forma segura

//@autor: Salah NE
//Investigacion: dos funciones que permitan encriptar y decir cual vas a usar

import CryptoJS from 'crypto-js';

const texto: string = "desencriptar un texto";


function encryptText(texto) {
  const textoCifrado = CryptoJS.AES.encrypt(texto, '123445').toString();
  return textoCifrado;
}

function decryptText(textoCifrado) {
  const bytes = CryptoJS.AES.decrypt(textoCifrado, '123445');
  const textoOriginal = bytes.toString(CryptoJS.enc.Utf8);
  return textoOriginal;
}

const cifrado = encryptText(texto);
console.log("Texto cifrado:", cifrado);

const descifrado = decryptText(cifrado);
console.log("Texto original:", descifrado);
