let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// 1 - questão
for (let index of numbers) {
  console.log(index)
}

// 2 - questão
let sun = 0
for (let index of numbers) {
  sun += index
}
console.log(sun)

// 3 - questão
let sun = 0
for (let index of numbers) {
  sun += index
}
console.log(sun / numbers.length)

// 4 - questão
let sun = 0
for (let index of numbers) {
  sun += index
}
let media = sun / numbers.length
if (media > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}

// 5 - questão
let numMaior = numbers[0]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numMaior) {
    numMaior = numbers[i]
  }
}
console.log(numMaior)

// 6 - questão
impar = numbers.filter(value => value % 2 != 0)
impar.length > 0
  ? console.log(impar.length)
  : console.log('nenhum valor ímpar encontrado')

// 7 - questão
let numMenor = numbers[0]
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < numMenor) {
    numMenor = numbers[i]
  }
}
console.log(numMenor)

// 8 - questão
let arr = []
for (i = 1; i <= 25; i++) {
  arr.push(i)
}
console.log(arr)

// 9 - questão
let arr = []
for (i = 1; i <= 25; i++) {
  divisao = i / 2
  arr.push(divisao)
}
console.log(arr)

//Bônus ====================================

// 10 - questão
let aux
for (let i = 0; i < numbers.length; i++) {
  for (let x = i + 1; x < numbers.length; x++) {
    if (numbers[i] > numbers[x]) {
      aux = numbers[i]
      numbers[i] = numbers[x]
      numbers[x] = aux
    }
  }
}
console.log(numbers)

// 11 - questão
let aux
for (let i = 0; i < numbers.length; i++) {
  for (let x = i + 1; x < numbers.length; x++) {
    if (numbers[i] < numbers[x]) {
      aux = numbers[i]
      numbers[i] = numbers[x]
      numbers[x] = aux
    }
  }
}
console.log(numbers)

// 12 - questão
let arr = []
for (let i = 0; i < numbers.length; i++) {
  let x = i + 1
  if (x < numbers.length) {
    let num = numbers[i] * numbers[x]
    arr.push(num)
  } else {
    let num = numbers[i] * 2
    arr.push(num)
  }
}
console.log(arr)
