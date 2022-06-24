// // Questão 1
// let fatorial = 10;
// let resultado = fatorial

// for(let i = 1; i < fatorial; i += 1) {
//     resultado *= i;
// }

// console.log(resultado)


// // Questão 2
// let word = 'tryber';
// let invert = "";
// for(indice = word.length - 1; indice > 0; indice -= 1) {
//     invert += word[indice];
// }
// console.log(invert);


// /*
// * Questão 3
// */
// let palavras =  ['Dálmata','Vampiro', 'Paleta', 'Último', 'Cereja', 'Cerveja', 'Esportes', 'Disputa', 'Senado', 'Longe', 
// 'Molar', 'Anunciar', 'Personagem'];
// let maiorPalavra = palavras[0];


// for(let indice3 = 0; indice3 < palavras.length; indice3 += 1) {
//     if(palavras[indice3].length > maiorPalavra.length) {
//         maiorPalavra = palavras[indice3];
//     }
// }
// console.log(maiorPalavra)

// let menorPalavra = palavras[0];
// for(let ind = 0; ind < palavras.length; ind += 1) {
//     if(palavras[ind].length < menorPalavra.length) {
//         menorPalavra = palavras[ind];
//     }
// }
// console.log(menorPalavra)


/*
* Questão 4 - tirar dúvida: o pq do true
*/
let primoMaior = 0

for(let count = 2; count <= 50; count += 1) {
    let primo = true;
    for(let divide = 2; divide < count; divide += 1) {
        if(count % divide === 0) {
            primo = false;
        }
    }
        if(primo) {
            primoMaior = count;
        }
}

console.log(primoMaior);
