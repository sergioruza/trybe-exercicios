// Objetos
let player = {
name: 'marta',
lastName: 'Silva',
age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}

let fullName = player.name + ' ' + player.lastName;
let idade = player.age;
console.log('A jogadora ' + fullName + ' tem ' + idade + ' de idade!');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
let anos = player.bestInTheWorld;
console.log('A jogadora ' + fullName + ' foi eleita a melhor do mundo por 6 vezes: ' + anos);

let medalGold = player.medals.golden;
let medalSilver = player.medals.silver;
console.log('A jogadora possui ' + medalGold + ' medalhas de ouro e ' + medalSilver + ' de prata.' )





// for/in e for/of
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for(let count in names) {
  console.log(names[count]);
}


let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
for(let i in car) {
  console.log(i+':', car[i]);
}




// Funções