//1. Criar 4 variáveis para receber as notas de um aluno, calcular e mostrar a média desse aluno.

const readline = require('readline');

const nt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let notas = [];

nt.question('Digite a primeira nota: ', (nota1) => {
    notas.push(parseFloat(nota1));

    nt.question('Digite a segunda nota: ', (nota2) => {
        notas.push(parseFloat(nota2));

        nt.question('Digite a terceira nota: ', (nota3) => {
            notas.push(parseFloat(nota3));

            nt.question('Digite a quarta nota: ', (nota4) => {
                notas.push(parseFloat(nota4));

                let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;


                console.log(`A média do aluno é: ${media.toFixed(2)}`);

                nt.close();

            });
        });
    });
});



