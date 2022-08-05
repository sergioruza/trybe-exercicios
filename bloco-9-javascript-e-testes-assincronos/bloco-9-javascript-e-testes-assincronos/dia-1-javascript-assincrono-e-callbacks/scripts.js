// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => {
    console.log(mars.name);
  }, 4000)
};

// getPlanet(); // imprime Marte depois de 4 segundos

////////////////////////////////////--------------------------------------------------------////////////////////////////////////

// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = () => setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), 5000)

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

////////////////////////////////////--------------------------------------------------------////////////////////////////////////

// 5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature uma callback que contenha as ações a serem tomadas em cima da temperatura.
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (callback) => {
//   setTimeout(() => callback(getMarsTemperature()), messageDelay())
// }

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

////////////////////////////////////--------------------------------------------------------////////////////////////////////////


// 6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha.
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, callbackError) => {
  const chanceOfSucess = Math.random();
  setTimeout(() => {
    if (chanceOfSucess < 0.6) {
      callback(getMarsTemperature());
    } else {
      callbackError('seila do pq')
    }
    
    }, messageDelay());
}
// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

////////////////////////////////////--------------------------------------------------------////////////////////////////////////

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
  // Implemente a callback de tratamento de erro
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
};

getPokemonDetails('Charmander', handlePokemonSearch);

module.exports = uppercase;