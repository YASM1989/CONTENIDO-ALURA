//Comentario 'ESTAS SON LAS VARIABLES//
let numeroSecreto=8;   
let numeroUsuario=0;
let intentos = 1; 
let palabraIntentos='intento';

while (numeroUsuario != numeroSecreto){    
    numeroUsuario = prompt ("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    /*Este código realiza 
    la comparación
    */
    if(numeroUsuario==numeroSecreto){
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}.Lo lograste en ${intentos} ${palabraIntentos}`);
    } else {
        if(numeroUsuario>numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos=intentos+1
        palabraIntentos ='intentos';
        //incrementamos el contador cuando no acierta 
        //La condición no se cumplíó 
        //alert ('Lo siento, no acertaste');
    }
}