alert('Wellcome to guess number game!');
let numeroMaximo = 5000;

let numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1);

console.log(numeroSecreto);

let chute;
let tentativa = 1;

while (chute != numeroSecreto){

    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}:`);

    if (chute == numeroSecreto) {

        break;

    } else {

        if (chute > numeroSecreto) {

            alert(`O número secreto é menor que ${chute}.`);

        } else{

            alert(`O número secreto é maior que ${chute}.`);

        }
    }

    tentativa++
}

let palavraTentativas = tentativa > 1 ? "tentativas" : "tentativa";
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativas}.`);