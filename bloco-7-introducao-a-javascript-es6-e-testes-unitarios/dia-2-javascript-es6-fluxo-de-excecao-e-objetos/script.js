// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };



// const pessoaRecebe = order.order.delivery.deliveryPerson;
// const nomeEntrega = order.name;
// const telefone = order.phoneNumber;
// const rua = order.address.street;
// const numero = order.address.number;
// const aP = order.address.apartment

// const informacoes = (param1) => {
//   return `Olá ${pessoaRecebe}, entrega para ${nomeEntrega}, Telefone: ${telefone}, R. ${rua}, Nº: ${numero}, AP: ${aP}`
// }

// // }
// console.log(informacoes(order))




// const recebeNova = (order.order.delivery.deliveryPerson = 'Luiz Silva');
// const pagamentoNovo = (order.payment.total = 50);
// const pedidos = Object.keys(order.order.pizza) + ' e ' + Object.keys(order.order.drinks);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   return `Olá ${recebeNova}, o total do seu pedido de ${pedidos} é ${pagamentoNovo}`

// }

// console.log(orderModifier(order));

//------------------------------------- parte III -------------------------------------//
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addObj = (obj, key, value) => {
  obj[key] = value;
}
addObj(lesson2, 'turno', 'noite');
console.log(lesson2);


const listKeys = (obj) => Object.keys(obj);
console.log('esse lista as chaves', listKeys(lesson3));

const tamanhoObj = (obj) => Object.keys(obj).length;
console.log('Tamanho do objeto', tamanhoObj(lesson1));

const listValue = (obj) => Object.values(obj);
console.log('Lista de valores de uma objeto', listValue(lesson3));


 const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const totalEstudantes = (obj) => {
  let result = 0;
  let array = Object.keys(obj)
  for(let i in array) {
    result += obj[array[i]].numeroEstudantes;
  }

  return result
}

console.log('Esse é p total de estudantes',totalEstudantes(allLessons));