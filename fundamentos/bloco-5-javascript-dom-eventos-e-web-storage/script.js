function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu código abaixo.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDias() {
  let idDays = document.querySelector('#days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let criaLi = document.createElement('li');
    let dia = decemberDaysList[index];
    criaLi.innerText = dia;
    if (dia === 24 || dia === 31) {
      criaLi.className = 'day holiday';
      idDays.appendChild(criaLi);
    } else if (dia === 4 || dia === 11 || dia === 18){
      criaLi.className = 'day friday';
      idDays.appendChild(criaLi);
    } else if (dia === 25) {
      criaLi.className = 'day holiday friday';
      idDays.appendChild(criaLi);
    } else {
      criaLi.className = 'day';
      idDays.appendChild(criaLi);
    }
  }
}
criaDias();

//============================= Exercício 2 =====================
let classBtn = document.querySelector('.buttons-container');
function criaBotao(nome, lugar, addClass) {
   let buttonInit = document.createElement('button');
   buttonInit.className = addClass;
   buttonInit.appendChild(document.createTextNode(nome))
  lugar.appendChild(buttonInit);
}
criaBotao('Feriados', classBtn, 'btn-holiday' );

//============================= Exercício 3 =====================
let btnFeriado = document.querySelector('.btn-holiday');
function mudaCorFeriado (event) {
  let holiday = document.querySelectorAll('.holiday');
  let novaCor = 'purple'
  let corOriginal = 'rgb(238,238,238)';
  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor !== novaCor) {
      holiday[index].style.backgroundColor = novaCor;
    } else {
      holiday[index].style.backgroundColor = corOriginal;
    }
   }
   console.log('deu certo');
  }
  btnFeriado.addEventListener('click', mudaCorFeriado)
  
criaBotao('Sexta-feira', classBtn, 'btn-friday');

function mudaCorSexta () {
  let botaoSexta = document.querySelector('#btn-friday');
  let sextas = document.querySelectorAll('.friday');
  let textoSexta = 'SEXTOU';
}







// let daysArray = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// function daysLi() {
//   let idDoDays = document.querySelector('#days');
//   for(let index = 0; index < daysArray.length; index += 1) {
//     let criaLi = document.createElement('li');
//     let dia = daysArray[index];
//     criaLi.innerText = dia;

//     if (dia === 24 || dia === 31) {
//       criaLi.className = 'day holiday';
//       idDoDays.appendChild(criaLi);
//     } else if (dia === 4 || dia === 11 || dia === 18) {
//       criaLi.className = 'day friday';
//       idDoDays.appendChild(criaLi);
//     } else if (dia === 25) {
//       criaLi.className = 'day holiday friday';
//       idDoDays.appendChild(criaLi);
//     } else {
//       criaLi.className = 'day';
//       idDoDays.appendChild(criaLi)
//     }
//   }
// }
// daysLi();

// function criaButton() {
//   let divButton = document.querySelector('.buttons-container');
//   let button = document.createElement('button')
//   button.id = 'btn-holiday';
//   button.appendChild(document.createTextNode('Feriados'));
//   divButton.appendChild(button);
// }
// criaButton()

// function mudaCorFeriado(event) {
//   let idButton = document.querySelector('#btn-holiday');
//   let pegaHoliday = document.querySelectorAll('.holiday')
//   let backColor = 'rgb(238,238,238)';
//   let novaCor = 'blue';
//   for(let ind = 0; ind < pegaHoliday.length; ind += 1) {
//     if(pegaHoliday[ind].style.backgroundColor === novaCor) {
//       pegaHoliday[ind].style.backgroundColor = backColor;
//     } else {
//       pegaHoliday[ind].style.backgroundColor = novaCor;
//     }
//   }
  
//   idButton.addEventListener ('click', mudaCorFeriado);
// }
// mudaCorFeriado()

// function criaSexta() {
//   fridayId = document.querySelector('.buttons-container');
//   let buttonFriday = document.createElement('button');
//   buttonFriday.id = 'btn-friday';
//   buttonFriday.appendChild(document.createTextNode('Sexta-Feira'))
//   fridayId.appendChild(buttonFriday);
// }
// criaSexta();

// function clickSexta(event) {
//   let botaoSexta = document.getElementById('btn-friday');
//   let pegaSexta = document.getElementsByClassName('friday');
//   let textoSexta = "SEXTA CARAI"
//   for (let count = 0; count < pegaSexta.length; count += 1) {
//     if(pegaSexta[count].innerText !== textoSexta) {
//       pegaSexta[count].innerText = textoSexta;
//     } else {
//       pegaSexta[count].innerText = pegaSexta[count]
//     }
//   }
//   botaoSexta.addEventListener('click', clickSexta)
//   console.log('eeee')
// }
// clickSexta();