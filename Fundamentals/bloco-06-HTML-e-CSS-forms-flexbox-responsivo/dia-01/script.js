const form = document.querySelector('form')
const previewDl = document.querySelector('.preview-dl')
const body = document.querySelector('body')
const selectState = document.querySelector('#text-state');
// Adicionar as opções de estado no select
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then(res => res.json())
  .then(states => {
    for (let state of states) {
      const newState = document.createElement('option');
      newState.value = state.nome;
      newState.textContent = state.nome;
      selectState.appendChild(newState);
    }
  });
// =====================Validar formato de Data=====================
function validateDate(date){
  if(!/^\d{2}[\/]\d{2}[\/]\d{4}$/.test(date)){
    return false;
  }
  const day = parseInt(date.slice(0,2));
  const month = parseInt(date.slice(3,5));
  const year = parseInt(date.slice(6,11));
  if(day <= 0 || day > 31 || month <=0 || month > 12 || year <= 0){
    return false;
  } return true;
}

const textDate = document.querySelector('#text-date');
textDate.addEventListener('change', function(event){
  const date = event.target.value;
  if(!validateDate(date)){
    alert('[ERRO] A data inserida é inválida.')
    event.target.value = '';
  }
})

// =====================Validar se todos os campos obrigatórios foram preenchidos=====================
const previewBtn = document.querySelector('#preview-btn');
previewBtn.addEventListener('click', validateForm);
function validateForm(event){
  let boolean = true;
  event.preventDefault();
  // Pega todos os campos que tenham a propriedade 'required'
  const fields = document.querySelectorAll('[required]');
  for (let field of fields){
    // checkValidity() - Verifica se o valor do elemento atende os requisitos retornando true ou false
    if(!field.checkValidity()){
      boolean = false;
    }
  }
  if(!boolean){
    alert('Não preencheu todos os campos obrigatórios.')
  }
  previewForm()
}
// Apresentar um preview do currículo com os dados fornecidos no formulário
function previewForm(){
  previewDl.innerHTML = '';
  // new formData() - conjunto de pares chave/valor de um formulário usando a propriedade name de cada elemento para as chaves e seu valor enviado para os valores. 
  const fieldForm = Array.from(new FormData(form)) 
  for (let pair of fieldForm) {
    // dt - termo
    const fieldLabel = document.createElement('dt');
    fieldLabel.textContent = pair[0];
    // dl - descrição do termo
    const fieldValue = document.createElement('dd');
    fieldValue.textContent = pair[1];
    previewDl.appendChild(fieldLabel);
    previewDl.appendChild(fieldValue);
  }
}
// =====================Limpar formulário e preview=====================
const clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clearData);
function clearData(){
  previewDl.innerHTML = '';
}

 