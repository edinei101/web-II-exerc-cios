/*4. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo 
vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário 
forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e 
a máquina informe quanto será o valor arrecadado.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precoPequena = 10;
const precoMedia = 12;
const precoGrande = 15;

const calcularValorTotal = (quantidadePequena, quantidadeMedia, quantidadeGrande) => {
    return (quantidadePequena * precoPequena) + (quantidadeMedia * precoMedia) + (quantidadeGrande * precoGrande);
};

rl.question('Digite a quantidade de camisetas pequenas vendidas: ', (qtdPequena) => {
    rl.question('Digite a quantidade de camisetas médias vendidas: ', (qtdMedia) => {
        rl.question('Digite a quantidade de camisetas grandes vendidas: ', (qtdGrande) => {
            
            const valorTotal = calcularValorTotal(parseInt(qtdPequena), parseInt(qtdMedia), parseInt(qtdGrande));

            console.log(`O valor total arrecadado é: R$${valorTotal.toFixed(2)}`);
            
            
            rl.close();
        });
    });
});
