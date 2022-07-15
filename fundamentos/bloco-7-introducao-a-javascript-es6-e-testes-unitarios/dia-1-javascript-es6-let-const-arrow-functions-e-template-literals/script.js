// const teste = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// teste(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

 
// // Seu código aqui.
//  const sortArray = () => {
//   oddsAndEvens[0] = 2;
//     oddsAndEvens[1] = 3;
//     oddsAndEvens[2] = 4;
//     oddsAndEvens[3] = 7; 
//     oddsAndEvens[4] = 10;
//     oddsAndEvens[5] = 13;
//   return oddsAndEvens
//  }

//  const armazenaSort = sortArray();
//  console.log(`Os números ${armazenaSort} se encontram ordenados de forma crecente`)


const fatorial = (num) => {
  let fatorado = 1;
  for (let i = 1; i <= num; i += 1) {
    fatorado *= i;
  }
  return fatorado;
}

console.log(fatorial(7))
