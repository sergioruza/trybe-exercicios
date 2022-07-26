const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
function formatedBookNames(array) {
  return array.map((elemento) => `${elemento.name} - ${elemento.genre} - ${elemento.author.name}`)
}
// console.log(formatedBookNames(books));


function nameAndAge(array) {
  const obj = array.map((elemento) => {
    const name = elemento.author.name;
    const age = elemento.releaseYear - elemento.author.birthYear;
    let objPronto = {
      name,
      age,
    }
    return objPronto;
  })
  return obj.sort((a, b) => a.age - b.age );
}
// console.log(nameAndAge(books));


function fantasyOrScienceFiction(array) {
  return array.filter((elemento) => {
    return elemento.genre === 'Fantasia' || elemento.genre === 'Ficção Científica';
  })
}
const receba = fantasyOrScienceFiction;
// console.log(receba(books));


function oldBooksOrdered(array, anoAtual) {
  const livros = array.filter((elemento) => elemento.releaseYear <= anoAtual - 60);
  const livrosSort = livros.sort((a ,b) => a.releaseYear - b.releaseYear);
  return livrosSort;
}
const livrosAntigos = oldBooksOrdered;
// console.log(oldBooksOrdered(books, 2022));



function fantasyOrScienceFictionAuthors(array) {
   const pessoas = array.map((nomes) => nomes.author.name);
   const sort = pessoas.sort()
   return sort;
}

// console.log(fantasyOrScienceFictionAuthors(receba(books)));

function oldBooks(array) {
  return array.map((livro) => livro.name )
}
// console.log(oldBooks(livrosAntigos(books, 2022)));




function authorWith3DotsOnName(array, string) {
 return array.find((nome) => nome.author.name.startsWith(string)).name
}
console.log(authorWith3DotsOnName(books, 'J. R. R.'));