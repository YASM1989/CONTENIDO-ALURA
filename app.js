//Comentario 'ESTAS SON LAS VARIABLES//
let numeroSecreto=6;    
let numeroUsuario = prompt ("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*Este código realiza 
la comparación
*/
if(numeroUsuario==numeroSecreto){
    // Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`});
} else {
    //La condición no se cumplíó 
    alert ('Lo siento, no acertaste')
};
