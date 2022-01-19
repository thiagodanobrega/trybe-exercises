//Exercício Functions
//1 - questão
/*
function Palindrome(str) {
  let reversed = str.split('').reverse().join('')
  return str === reversed
}

console.log(Palindrome('arara'))
console.log(Palindrome('desenvolvimento'))
*/
//2 -questão
/*
let arr = [2, 4, 6, 7, 10, 0, -3]
function maiorValor(str) {
  let valor = str[0]
  let indice = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] > valor) {
      valor = str[i]
      indice = i
    }
  }
  return indice
}
console.log(maiorValor(arr))
*/

//3- questão
/*
let arr = [2, 4, 6, 7, 10, 0, -3]
function menorValor(str) {
  let valor = str[0]
  let indice = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] < valor) {
      valor = str[i]
      indice = i
    }
  }
  return indice
}
console.log(menorValor(arr))
*/

//4 - questão
/*
let arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
function maiorNome(str) {
  let nome = str[0]
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > nome.length) {
      nome = str[i]
    }
  }
  return nome
}
console.log(maiorNome(arr))
*/

let arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]
function repete(str) {
  let cont = {}

  for (let i = 0; i < arr.length; i++) {
    var num = arr[i]
    cont[num] = cont[num] ? (cont[num] += 1) : 1
  }
  
  return cont
}
console.log(repete(arr))
