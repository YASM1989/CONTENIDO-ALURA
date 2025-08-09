//Comentario 'ESTAS SON LAS VARIABLES//
let numeroSecreto= Math.floor(Math.random()*10)+1;   
let numeroUsuario=0;
let intentos = 1; 
//let palabraIntentos='intento';
let maximosIntentos=3;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){    
    numeroUsuario = parseInt(prompt ("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof (numeroUsuario));
    /*Este código realiza 
    la comparación
    */
    if(numeroUsuario==numeroSecreto){
        // Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}.Lo lograste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if(numeroUsuario>numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }

        //intentos=intentos+1
        //palabraIntentos ='intentos';
        //intentos = intentos + 1; 
        //intentos +=1; lo que tiene es uno a uno
        //intentos++con este reducimos el código
         intentos++;

        palabraIntentos='veces'
        if(intentos>maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //incrementamos el contador cuando no acierta 
        //La condición no se cumplíó 
        //alert ('Lo siento, no acertaste');

        
    }
}