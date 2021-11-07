// 1 - questão
const a = 10
const b = 20
const adicao = a + b
const subt = a - b
const mult = a * b
const div = a / b
const modulo = b % a
console.log(adicao, subt, mult, div, modulo)

// 2 - questão
const num1 = 4
const num2 = 7
console.log(num1 >= num2 ? num1 : num2)

// 3 - questão
const angulo1 = 60
const angulo2 = 60
const angulo3 = 60
const soma = angulo1 + angulo2 + angulo3
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log('ERRO')
} else if (soma == 180) {
  console.log('true')
} else if (soma != 180) {
  console.log('false')
}

// 4 - questão
const peca = 'Rei'
const xadrez = peca.toLowerCase()
let movimento
if (xadrez === 'bispo') {
  movimento = 'se move em uma linha reta diagonalmente no tabuleiro'
} else if (xadrez === 'peão') {
  movimento = 'se movem somente para frente, uma casa por vez.'
} else if (xadrez === 'torre') {
  movimento = 'se move em linha reta horizontalmente e verticalmente'
} else if (xadrez === 'cavalo') {
  movimento = 'movimento do cavalo forma um “L”'
} else if (xadrez === 'rainha') {
  movimento =
    'mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.'
} else if (xadrez === 'rei') {
  movimento =
    'pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente.'
} else {
  movimento = 'ERRO'
}
console.log(movimento)

// 5 - questão
const num1 = 2
const num2 = 1
const num3 = 5
if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log('true')
} else {
  console.log('false')
}

// 6 - questão
const custoProduto = 200
const valorVenda = 500
const custoTotal = custoProduto * 1.2
const lucro = valorVenda - custoTotal
if (custoProduto < 0 || valorVenda < 0) {
  console.log('Erro')
} else {
  console.log('R$ ' + lucro)
}

// 7 - questão
const salarioBruto = 5000
let salarioINSS
let salarioLiquido
if (salarioBruto <= 1556.94) {
  salarioINSS = salarioBruto - salarioBruto * 0.8
} else if (salarioBruto <= 2594.92) {
  salarioINSS = salarioBruto - salarioBruto * 0.9
} else if (salarioBruto <= 5189.82) {
  salarioINSS = salarioBruto - salarioBruto * 0.11
} else if (salarioBruto >= 5189.82) {
  salarioINSS = salarioBruto - 570.88
}
if (salarioINSS <= 1903.38) {
  salarioLiquido = salarioINSS
} else if (salarioINSS <= 2826.65) {
  salarioLiquido = salarioINSS - (salarioINSS * 0.075 - 142.8)
} else if (salarioINSS <= 3751.05) {
  salarioLiquido = salarioINSS - (salarioINSS * 0.15 - 354.8)
} else if (salarioINSS <= 4664.68) {
  salarioLiquido = salarioINSS - (salarioINSS * 0.225 - 613.13)
} else if (salarioINSS >= 4664.68) {
  salarioLiquido = salarioINSS - (salarioINSS * 0.275 - 869.36)
}
console.log(salarioLiquido)
