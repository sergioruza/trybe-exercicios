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



// Questão 3


// Questão 4
let array = []
let primo = []
for(let count = 2; count <= 50; count += 1) {
    array.push(count);
    
    for (let indice2 = 0; indice2 < array.length; indice2 += 1) {
        if(array[indice2] % indice2 === 0) {
            return false;
        } else {
            primo.push(array[indice2])
        }
    }
}
console.log(primo)

