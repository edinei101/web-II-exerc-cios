/*5. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. 
Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, 
mas faça com que Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta 
em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.*/


const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calcularDivisaoConta = (valorConta) => {

    let resto = valorConta % 3;
    let valorCada = (valorConta - resto)/3;
    ;
   
    let valorFelipe = valorCada + resto;
    
    return {
        carlos: valorCada,
        andre: valorCada,
        felipe: valorFelipe,
    };
};

rl.question('Digite o valor total da conta: ', (valorConta) => {

    valorConta = parseFloat(valorConta);
    const divisao = calcularDivisaoConta(valorConta);
    console.log(`Carlos deve pagar: R$${divisao.carlos}`);
    console.log(`André deve pagar: R$${divisao.andre}`);
    console.log(`Felipe deve pagar: R$${divisao.felipe}`);
    rl.close();
});
