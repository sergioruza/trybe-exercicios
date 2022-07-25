const cria = (nome) => {
  let email = nome.toLowerCase().split(' ').join('_');
  let nomeEmail = {
    nome: nome,
    nomeEmail: `${email}@trybe.com`
  }
  return nomeEmail;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Sergio Ruza'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Ana Ruza'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Valdemar Ruza'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(Object.values(newEmployees(cria).id1)[1] );


const verifica = (numAposta, gerado) => numAposta === gerado;

const resultado = (numAposta, verifica) => {
  let gera = Math.round(Math.random() * (5 - 1) + 1);
  return verifica(numAposta, gera) ? 'Parabens, você ganhou' : 'Tente novamente';
}

console.log(resultado(5, verifica));



const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compara = (gabarito, respEstudantes) => {
 
  if(gabarito === respEstudantes) {
    return 1
  } else if (respEstudantes === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

const hof = (gabarito, respEstudantes, callback) => {
  let resultado = 0;
  for (let index = 0; index < respEstudantes.length; index += 1) {
    const retorno = callback(gabarito[index], respEstudantes[index]);
    resultado += retorno;
  }
  return `Resultado final foi de ${resultado} pontos`;
}

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));