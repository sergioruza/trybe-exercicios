const infos = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  return {nome, email: `${email}@trybe.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Sergio Ruza'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Ana Ruza'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Valdemar ruza'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(infos));

// -------------------------------------------------------------------------------- //

const verifica = (numeroAposta, numeroSort) => {
  if(numeroAposta === numeroSort) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}

const resultadoSorteio = (callback, aposta) => {
  const sorteado = Math.round(Math.random() * (5 - 1)) + 1;
  
  return callback(aposta, sorteado);
}

console.log(resultadoSorteio(verifica, 5));

console.log(Math.round(Math.random() * (5 - 1)) + 1);

// -------------------------------------------------------------------------------- //

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'A', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verificador = (correct, respostaPessoas) => {
  if(correct === respostaPessoas) {
    return 1;
  } else if (respostaPessoas === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

const totalPontos = (correct, respostaPessoas, callback) => {
  let contador = 0;
  for (let index = 0; index < correct.length; index += 1) {
    const element = callback(correct[index], respostaPessoas[index]);
    contador += element;
  }
  return `o total de pontos foi de ${contador}`;
}

console.log(totalPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, verificador));