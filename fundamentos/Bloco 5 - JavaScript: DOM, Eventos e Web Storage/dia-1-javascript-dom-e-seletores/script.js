let header = document.getElementById('header-container');
header.style.background = 'green';

let urgencia = document.getElementsByClassName('emergency-tasks')[0];
urgencia.style.background = "#FF9F84";

let frasesUrgencia = document.querySelectorAll('.emergency-tasks h3');
for(let i of frasesUrgencia) {
  i.style.background = 'purple';
  // console.log()
}


// let corYellow = document.querySelector(".no-emergency-tasks");
// corYellow.style.backgroundColor = "rgb(249, 219, 94)";

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';
console.log(document.getElementById('no-emergency-tasks'));
