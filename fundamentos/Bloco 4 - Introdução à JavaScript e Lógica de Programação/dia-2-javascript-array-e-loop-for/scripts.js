//Arrays exercicio 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices);

//Arrays exercicio 2
let indexPortifolio = menu.indexOf("Portfólio");
console.log(indexPortifolio);

//Arrays exercicio 3
menu.push("Contato");
console.log(menu);


//testes
let numbers = [10,20,30,40,50];
for (let sum of numbers) {
    sum += 1
    console.log(sum)
}


//For exercicio 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (i = 0; i < groceryList.length; i += 1) {
    console.log (groceryList[i])
}
        //For examples
        let cars = ['Saab', 'Volvo', 'BMW'];
        for (let i = 0; i < cars.length; i += 1) {
            console.log(cars[i])
        }



        // For/of exercicio 1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (names of names) {
    console.log(names);
}