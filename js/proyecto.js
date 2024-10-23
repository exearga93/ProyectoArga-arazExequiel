//Simulación de una encuesta de satisfacción
/*Descripción:
Se realiza una encuesta en un restaurante sobre la satisfacción de los clientes, cuyas respuesta se muestran como numeros del 1 al 10, donde:
1 significa muy insatisfecho 
10 significa muy satisfecho
Las respuestas estan cargadas en el siguiente array: [8,5,10,7,6,8,9,10,7,4,6,3,7,8,6,5,4,2,9,10] */

let respuestas=[8,5,10,7,6,8,9,10,7,4,6,3,7,8,6,5,4,2,9,10];

let suma=0;

for (let i=0; i<respuestas.length;i++ ){
    suma =suma+ respuestas[i];
} 
const promedio = suma / respuestas.length;

document.write(`<p>1. El promedio de satisfacción es: ${promedio}</p>`);

console.log(`El promedio de satisfacción es: ${promedio}`);

//Cantidad de clientes satisfechos segun la encuesta (respuesta >= a 7)

let clienteSatisfecho=0;
for (let i=0; i<respuestas.length;i++){
    if (respuestas[i]>=7){
        clienteSatisfecho++;
    }
}

document.write(`<p> 2. La cantidad de clientes satisfechos es (>=7): ${clienteSatisfecho} </p>`)

console.log(` La cantidad de clientes satisfechos es (>=7): ${clienteSatisfecho}`)

//Cantidad de clientes insatisfechos segun la encuesta (respuesta <=4)

let clienteInsatisfecho=0;
for(let j=0; j<respuestas.length;j++){
  if(respuestas[j]<=4){
    clienteInsatisfecho++;
  }

}

document.write(`<p> 3. La cantidad de clientes insatisfechos es: ${clienteInsatisfecho} </p>`)

console.log(` La cantidad de clientes insatisfechos es: ${clienteInsatisfecho}`)