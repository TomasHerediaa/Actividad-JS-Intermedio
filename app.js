// EJERCICIO 1

const esPrimo = numero => {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

esPrimo(4)

// EJERCICIO 2


// EJERCICIO 3
var  numeros = [1,10]


let inicio = numeros[0];
let fin = numeros[1];
let suma = 0;

for (let i = inicio; i <= fin; i++) {
  suma += i;
}

console.log(suma);

// EJERCICIO 4
const contarVocales = palabra => {
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};


const cadena = "Hola mundo";
const vocales = contarVocales(cadena);
console.log("La cadena tiene %d vocales", vocales);

// EJERCICIO 5
const numeros = ["Sofia", "Maria", "Pedro", "Sofia"];
const unicos = [];

for(var i = 0; i < numeros.length; i++) {
 
  const elemento = numeros[i];
 
  if (!unicos.includes(numeros[i])) {
    unicos.push(elemento);
  }
}

console.log(unicos); 

// EJERCICIO 6
function invertirCadena(cad) {
    var nuevaCadena = "";
    for (var i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
invertirCadena('hola');


