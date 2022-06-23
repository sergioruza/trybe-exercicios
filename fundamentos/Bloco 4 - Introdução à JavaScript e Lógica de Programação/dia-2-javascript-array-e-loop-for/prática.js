// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

        // Questão 1
//console.log(numbers);

    
        // Questão 2, 3 - dúvida -
// let soma = 0;
// let media;
// for (i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i];
//     media = soma / 10
// }
// console.log("O valor da soma dos arrays foi de " + soma);
// console.log("A média dos arrays foi de " + media);

   
//         // Questão 4
// if (media > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor ou igual a 20")
// }


        // Questão 5
// let highNumb = 0
// for(let count = 0; count < numbers.length; count += 1) {
//         if (numbers[count] > highNumb) {
//                 highNumb = numbers[count]
//         }
// }
// console.log(highNumb)



//         // Questão 6
// let impar = []
// let quantImpar;
// for (indice = 0; indice < numbers.length; indice += 1) {
//     if (numbers[indice] % 2 !== 0 ) {
//         impar.push(numbers[indice])
//     }
// }
// quantImpar = impar.length;
// console.log("Número de impares nesse array é de ", quantImpar, " números. Sendo eles: ", impar);



                // Questão 7

// let smallNumb = numbers[0];
// for (let ind = 1; ind < numbers.length; ind += 1) {
//         if(numbers[ind] < smallNumb) {
//                 smallNumb = numbers[ind]
//         }
// }
// console.log(smallNumb)



                //Questão 8
let array = []
let divisao;
for(let indi = 1; indi <= 25; indi += 1) {
        array.push(indi);
       divisao = indi / 2
       console.log(divisao);
       
}

console.log(array);

