// Parte I
// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// // 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// let nomePessoa = info.personagem
// function bomDIa(nome) {
//   console.log('Bem-vinda, ' + nome )
// }
// bomDIa(nomePessoa)

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = 'sim';
// console.log(info)

// // 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// for(indice in info) {
//   console.log(indice); 
// }

// // 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (count in info) {
// console.log(info[count]);
// }

// // 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };

// console.log(info.personagem + ' e ' + info2.personagem);
// console.log(info.origem + ' e ' + info2.origem);
// console.log(info.nota + ' e ' + info2.nota);
// if(info.recorrente && info2.recorrente === "Sim") {
//   console.log('Ambos recorrentes');
// };


// 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

let nameFull = leitor.nome + ' ' + leitor.sobrenome;
let nomeLivro = leitor.livrosFavoritos[0].titulo;
// console.log("O livro de " + nameFull + " se chama " + "'" + nomeLivro + "'");

// 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  }
)
// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos ')




// Parte II - Funções
// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
function maisRepetido(numeros) {
let contaNumero = 0;
let contaRepetido = 0;
let indexNumero = 0;
  for(let index in numeros) {
    let verifica = numeros[index];
      for(let index2 in numeros) {
        if(verifica === numeros[index2]) {
          contaNumero += 1;
        }
      }
      if(contaNumero > contaRepetido) {
        contaRepetido = contaNumero;
        indexNumero = index;
      }
      contaNumero = 0;
  }
  return numeros[indexNumero];
}

console.log(maisRepetido([100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50,
   100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50, 100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50,
   100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50, 100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50,
   100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50, 100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50,
   100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50, 100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50,
   100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50, 100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50,
   100, 50, 20, 13, 100, 5, 9, 2, 2, 100, 50, 50]))