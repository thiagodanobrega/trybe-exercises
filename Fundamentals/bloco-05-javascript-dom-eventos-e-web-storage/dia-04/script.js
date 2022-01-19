
let body = document.querySelector('body')
let main = document.querySelector('main'); 
let settings; 

// Verifica se a chave 'settings' está vazia ou não no localStorage
if (localStorage.getItem('settings') !== null) {
  // Se a condição for satisfeita o valor será pego no localStorage e convertido em objeto
  settings = JSON.parse(localStorage.getItem('settings'));
  // Para cada iteração é utilizado as propriedade do objeto para realizar as configurações
  for (let prop in settings){
    if(prop == 'backgroundColor') {
      body.style[prop] = settings[prop];
    } else {
      main.style[prop] = settings[prop];
      addSelected(prop, settings[prop])
    }
  }
  // Caso a chave esteja vazia será atribuído à variável settings um objeto vazio
} else {
  settings = {};
}

// Mudando a seleção do select conforme as configurações salvas no localStorage
function addSelected(id, value){
  document.getElementById(id).value = value
}

// Mudando a Fonte
let selectFontType = document.querySelector('#fontFamily'); 
selectFontType.addEventListener('change', changeFont);
function changeFont(){
  let fontType = document.getElementById('fontFamily').value;
  settings.fontFamily =  main.style.fontFamily = fontType;
  updateLocalStorage()
 }
 
// Mudando o tamanho da fonte
let selectFontSize = document.querySelector('#fontSize'); 
selectFontSize.addEventListener('change', changeFontSize);
function changeFontSize(){
  let fontSize = document.getElementById('fontSize').value;
  settings.fontSize = main.style.fontSize = fontSize;
  updateLocalStorage()
 }

// Mudando espaçamento entre linhas
let selectLineSpacing = document.querySelector('#lineHeight');
selectLineSpacing.addEventListener('change', changeLineSpacing);
function changeLineSpacing(){
  let lineSpacing = document.querySelector('#lineHeight').value;
  settings.lineHeight = main.style.lineHeight = lineSpacing;
  updateLocalStorage()
 }

 // Mudando cor da fonte do texto
let selectFontColor = document.querySelector('#color'); 
selectFontColor.addEventListener('change', changeFontColor);
function changeFontColor(){
  let fontColor = document.getElementById('color').value;
  settings.color = main.style.color = fontColor;
  updateLocalStorage()
 }

// Mudando a cor de background da página
function changeTheme(color){
  settings.backgroundColor = body.style.backgroundColor = color;
  updateLocalStorage()
}

// Adicionando o objeto convertido em JSON ao localStorage
const updateLocalStorage = () => {
  localStorage.setItem('settings', JSON.stringify(settings) )
}