// Exercício 1
const person = (name) => {
  const userName = name.replace(' ', '_').toLowerCase();
  const email = `${userName}@trybe.com`;
  const obj = {
    Nome: name,
    Email: email,
  };
  return obj;
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'), 
    id3: func('Carla Paiva'), 
  }
  return employees;
};
console.log(newEmployees(person));

// Exercício 2
const checkNumber = (num1, num2) => {
  if (num1 === num2) return 'Parabéns você ganhou';
  return 'Tente novamente';
}
const sortition = (numBet, func) => {
  numRandom = Math.floor(Math.random() * 5 + 1);
  return func(numBet, numRandom);
}
console.log(sortition(4, checkNumber));

// Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswerSheet = (studentAnswers, rightAnswers) => {
  if (studentAnswers === 'N.A') {
    return 0;
  }
  if (studentAnswers === rightAnswers) {
    return 1;
  }
  if (studentAnswers !== rightAnswers) {
    return -0.5;
  }
};
const answersSheet = (rightAnswers, studentAnswers, func) => {
  let count = 0;
  studentAnswers.forEach((element, index) => {
   const score = func(element, rightAnswers[index]);
   count += score;
  });
  return count;
};
console.log(answersSheet(RIGHT_ANSWERS, STUDENT_ANSWERS,checkAnswerSheet));