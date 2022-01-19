// Exercícios Objetos e For/In
//1 - questão
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
}
console.log('Bem-vinda, ' + info.personagem)
*/

//2 - questão
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
console.log(info)
*/

//3 - questão
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
for (let index in info) {
  console.log(index)
}
*/

//4 - questão
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
for (let index in info) {
  console.log(info[index])
}
*/

//5 - questão
/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}

let infos = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let index in info) {
  if (index == 'recorrente') {
    console.log('Ambos recorrentes // Atenção para essa última linha!')
    continue
  }
  console.log(`${info[index]} e ${infos[index]}`)
}
*/

//6 - questão
/*
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas'
    }
  ]
}
let p = leitor.livrosFavoritos[0]
console.log(
  `O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${p.titulo}"`)
*/

//7 - questão
/*
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas'
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco'
    }
  ]
}
console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`)
*/
