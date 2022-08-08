// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const joke = document.querySelector('#jokeContainer')
const fetchJoke = () => {
  const obj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }

  fetch (API_URL, obj)
  .then(response => response.json())
  .then(data => joke.innerHTML = data.joke)
};

window.onload = () => fetchJoke();

apiScript.js
