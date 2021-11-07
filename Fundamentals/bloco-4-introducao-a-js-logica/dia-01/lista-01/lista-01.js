// 1 - questão
const myName = 'Thiago'
const birthCity = 'Pombal'
let birthYear = 1998
console.log(myName, birthCity, birthYear)

// 2 - questão
const base = 5
const height = 8
const area = base * height
const perimeter = base * 2 + height * 2
console.log(area, perimeter)

// 3 - questão
const nota = 90
let mensagem

if (nota >= 80) {
  mensagem = 'Parabéns, você foi aprovada(o)!'
} else if (nota >= 60) {
  mensagem = 'Você está na nossa lista de espera'
} else {
  mensagem = 'Você foi reprovada(o)'
}
console.log(mensagem)

// 4 - questão
const currentHour = 20
let message
if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir'
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D'
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?'
} else if (currentHour >= 11) {
  message = 'Hora do almoço!!!'
} else if (currentHour >= 4) {
  message = 'Hmmm, cheiro de café recém passado'
}
console.log(message)

// 5 - questão
let estado = 'aprovada'
switch (estado) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovada(o)!')
    break
  case 'lista':
    console.log('Você está na nossa lista de espera')
    break
  case 'reprovada':
    console.log('Você foi reprovada(o)')
    break
  default:
    console.log('ERRO')
}
