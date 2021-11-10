// 1 - questão
let n = 5
for (let i = 0; i < n; i++) {
  let aux = ''
  for (let c = 0; c < n; c++) {
    aux += '*'
  }
  console.log(aux)
}

// 2 - questão
let n = 5
for (let i = 1; i <= n; i++) {
  let aux = ''
  for (let c = 0; c < i; c++) {
    aux += '*'
  }
  console.log(aux)
}

// 3 - questão
let n = 5
for (let i = 1; i <= n; i++) {
  let aux = ''
  for (let s = 0; s < n - i; s++) {
    aux += ' '
  }
  for (let c = 0; c < i; c++) {
    aux += '*'
  }
  console.log(aux)
}

// 4 - questão
let n = 5
for (let i = 1; i <= n; i += 2) {
  let aux = ''
  for (let s = 0; s < (n - i) / 2; s++) {
    aux += ' '
  }
  for (let c = 0; c < i; c++) {
    aux += '*'
  }
  console.log(aux)
}

// Bônus

// 5 - questão
let n = 7
for (let i = 1; i <= n; i += 2) {
  let aux = ''
  for (let s = 0; s < (n - i) / 2; s++) {
    aux += ' '
  }
  for (let c = 0; c < i; c++) {
    if (c == 0 || c == i - 1 || i == n) {
      aux += '*'
    } else {
      aux += ' '
    }
  }
  console.log(aux)
}

// 6 - questão
let num = 5
let primo = true
if (num < 2) {
  primo = false
} else {
  for (let n = 2; n < num; n++) {
    if (num % n == 0) {
      primo = false
    }
  }
}
if (primo == true) {
  console.log('é primo')
} else {
  console.log('não é primo')
}
