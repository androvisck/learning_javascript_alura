alert('Wellcome to guess number game!');

let numeroSecreto = parseInt((Math.random() * 10) + 1);

let chute;
let tentativa = 1;

while (chute != numeroSecreto){

    chute = prompt('Digite um número entre 1 e 10: ');

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
/* 
if (tentativa == 1) {

    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativa} tentativa.`);

} else {
    
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativa} tentativas.`);

} 
*/