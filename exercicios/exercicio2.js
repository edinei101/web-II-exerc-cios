/*2. Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%. Após o aumento, 
calcule o INSS desse funcionário que é de 8%. mostre o salário inicial, o salário com o aumento e o desconto do INSS o salário final.*/

const readline = require('readline');

const salario1= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let  salarios = [];

salario1.question('Digite o valor so salario atual: ', (salarioAtual) => {
    salarios.push(parseFloat(salarioAtual))

    let salarioComDecontoDoInss = (salarioAtual * 1.20) * 0.92;

    console.log(`O novo salário com o desconto do INSS: ${salarioComDecontoDoInss.toFixed(2)} R$`);

    salario1.close();
});