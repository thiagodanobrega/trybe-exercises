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

// 1 - questão
const ulDays = document.querySelector('#days');
function addDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const holiday = [24, 25, 31];
  const friday = [4, 11, 18, 25]
  for (let i = 0; i < dezDaysList.length; i+=1){
    const liDays = document.createElement('li');
    liDays.innerText = dezDaysList[i];
    ulDays.appendChild(liDays);
    liDays.classList = 'day';
    if (holiday.includes(dezDaysList[i]))liDays.classList += ' holiday';
    if (friday.includes(dezDaysList[i]))liDays.classList += ' friday';   
  }
};
addDays()


// 2 - questão
const btnContainer = document.querySelector('.buttons-container'); 
const btnHoliday = document.createElement('button');
function createBtnHoliday(str){
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = str;
  btnContainer.appendChild(btnHoliday);
}
createBtnHoliday('Feriados');


// 3 - questão
btnHoliday.addEventListener('click', highlightHolidays);
let toggleHoliday = false;
function highlightHolidays(){
  toggleHoliday = !toggleHoliday;
  const liDays = Array.from(ulDays.children);
  const liHolidays = liDays.filter(dia => dia.classList.contains('holiday'));
  for (let day of liHolidays){
      if(toggleHoliday){
        day.style.backgroundColor = 'rgba(255,255,0, 0.3)';
      } else {
        day.style.backgroundColor = 'rgb(238,238,238)';
      }  
  }
}

// 4 - questão
const btnFriday = document.createElement('button');
function createBtnFriday(str){
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = str;
  btnContainer.appendChild(btnFriday);
}
createBtnFriday('Sexta-feira');

// 5 - questão
btnFriday.addEventListener('click', highlightFriday);
let toggleFriday = false;
function highlightFriday(){
  const friday = [4, 11, 18, 25]
  toggleFriday = !toggleFriday;
  const liDays = Array.from(ulDays.children);
  const liHolidays = liDays.filter(dia => dia.classList.contains('friday'));
  for (let i=0; i<liHolidays.length; i++){
    let day = liHolidays[i]
      if(toggleFriday){
        day.innerText = 'SEXTOU!';
      } else {
        day.innerText = friday[i]
      }  
  }
}

// 6 - questão
const liDays = ulDays.childNodes
liDays.forEach(day => {
  day.addEventListener('mouseover', zoomOver);
  day.addEventListener('mouseout', zoomOut);
});
function zoomOver(e){
  e.target.style.transform = 'scale(2)'
}
function zoomOut(e){
  e.target.style.transform = 'scale(1)'
}

// 7 - questão
let btnAdd = document.querySelector('#btn-add');
let myTasks = document.querySelector('.my-tasks');
btnAdd.addEventListener('click', addTask);
function createTask(text, color){
  let span = document.createElement('span');
  span.innerHTML = `${text} <br>`;
  myTasks.appendChild(span)
  document.querySelector('#task-input').value = '';
  addColor(color)
}

// 8 - questão
let body = document.querySelector('body')
function addColor(color){
  let div = document.createElement('div');
  div.classList = 'task';
  div.style.backgroundColor = color;
  myTasks.appendChild(div)
  div.addEventListener('click', select)
}

function select(e){
  e
}

