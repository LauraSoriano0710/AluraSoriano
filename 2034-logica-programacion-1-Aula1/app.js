//variables
let numeroMaximoPosible = parseInt(prompt("Me indicas un numero por favor mayor que 1 para generar el numero secreto"));

let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces= "vez";
let maximoIntentos= 3;

let titulo1 = document.querySelector('h1');
let titulo2 = document.querySelector('h2');



console.log(`\n\n\n\n\n\n\n\n\nnumeroUsuario: ${numeroUsuario}, numeroSecreto ${numeroSecreto} `);
while(numeroUsuario != numeroSecreto) 
{

     numeroUsuario = parseInt(prompt(`Me indicas un numero por favor entre 1 y ${numeroMaximoPosible} :`));

    console.log(numeroUsuario );
    /*este codigo realiza la comparacion */

    if (numeroUsuario == numeroSecreto) 
    {
        alert(`Acertaste el numero es: ${numeroUsuario}, lo hiciste en ${intentos}  ${intentos == 1 ? 'vez' : 'veces'}`);
        titulo1.innerHTML = 'Correcto!!!'
        titulo2.innerHTML = 'Venciste el desafio!!!'
    }
    else
    {
        titulo1.innerHTML = 'Incorrecto!!!'
        if(numeroUsuario > numeroSecreto)
        {
             alert("El numero que ingresaste es mayor que el numero secreto");
             titulo2.innerHTML = 'El numero que ingresaste es mayor que el numero secreto!!!'
        }
        else
        {
             alert('El numero que ingresaste es menor que el numero secreto');
             titulo2.innerHTML = 'El numero que ingresaste es menor que el numero secreto!!!'
        }
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = "veces";

        if(intentos > maximoIntentos)
        {
            alert(`Llegaste al numero maximo de intentos que son ${maximoIntentos} `);
            break;
        }
    }
    console.log(`numeroUsuario: ${numeroUsuario}, numeroSecreto ${numeroSecreto} `);
}
