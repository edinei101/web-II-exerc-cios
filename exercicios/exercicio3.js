
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Aluno {
  constructor(matricula, nome, nota1, nota2) {
    this.matricula = matricula;
    this.nome = nome;
    this.nota1 = parseFloat(nota1);
    this.nota2 = parseFloat(nota2);
  }


  calcularMedia() {
    return (this.nota1 + this.nota2) / 2;
  }
  classificarAluno() {
    const media = this.calcularMedia();
    let classificacao = '';

    switch (true) {
      case media > 7:
        classificacao = 'aprovado';
        break;
      case media == 7:
        classificacao = 'em recuperação';
        break;
      
      default:
        classificacao = 'Reprovado';
    }

    return classificacao;
  }

  
}

let alunos = [];


function inserirAluno() {
  rl.question('Digite a matrícula do aluno: ', (matricula) => {
    rl.question('Digite o nome do aluno: ', (nome) => {
      rl.question('Digite a primeira nota: ', (nota1) => {
        rl.question('Digite a segunda nota: ', (nota2) => {        
          alunos.push(new Aluno(matricula, nome, nota1, nota2));
          calcularMedias(); 
          rl.close(); 
        });
      });
    });
  });
}


function calcularMedias() {
  let somaMedias = 0;



  alunos.forEach(aluno => {
    let media = aluno.calcularMedia();
    let classificacao = aluno.classificarAluno();
    
  
    console.log(`Matrícula: ${aluno.matricula}, Nome: ${aluno.nome}, Média: ${media}, O aluno está ${classificacao} `);
    
  });

}


inserirAluno();
