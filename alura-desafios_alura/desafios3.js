//Desafios
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 1;

while (contador <= 10) {
    alert(contador);
    contador++;
};

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
while (contador >= 0) {
    alert(contador);
    contador--;
};

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, 
// usando um loop while no console do navegador.
let numeroRegressivo = parseInt(prompt("Contagem Regressiva!!! Digite um número:"));

while (numeroRegressivo >= 0) {
    alert(numeroRegressivo);
    numeroRegressivo--;
};

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, 
// usando um loop while no console do navegador.
let contagemProgressiva = parseInt(prompt("Contagem Progressiva!!! Digite um número:"));

while (contagemProgressiva >= 0) {
    alert(contagemProgressiva);
    contagemProgressiva++;
}