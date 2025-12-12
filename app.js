alert('Wellcome to guess number game!');

let numeroSecreto = 6;

let chute;
let tentativa = 0;

while (chute != numeroSecreto){

    chute = prompt('Digite um número entre 1 e 10: ');

    if (chute == numeroSecreto) {
        alert(`Parabéns, você acertou o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else{
            alert(`O número secreto é maior que ${chute}.`);
        }
    }

    tentativa++
}

alert(`Número de tentativas: ${tentativa}.`)