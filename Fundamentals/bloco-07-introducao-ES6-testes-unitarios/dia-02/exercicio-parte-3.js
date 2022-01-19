// Parte II
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addObject = (obj, key, value) => obj[key] = value;
addObject(lesson2, 'turno', 'noite');
//console.log(lesson2);

// Exercício 2
const listKeysObject = (obj) => Object.keys(obj);
//console.log(listValueObject(lesson1));

// Exercício 3
const objLength = (obj) => {
  const length = Object.keys(obj).length;
  console.log(length)
}
//objLength(lesson3);

// Exercício 4
const listValueObject = (obj) => Object.values(obj);
//console.log(listValueObject(lesson1));

// Exercício 5
let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//console.log(allLessons);

// Exercício 6
const students = (obj) => {
  const l1 = parseInt(`${obj.lesson1.numeroEstudantes}`);
  const l2 = parseInt(`${obj.lesson2.numeroEstudantes}`);
  const l3 = parseInt(`${obj.lesson3.numeroEstudantes}`);
  console.log(l1 +l2+ l3);
}
//students(allLessons);

// Exercício 7
function obter(obj, position){
  console.log(Object.values(obj)[position]);
}
//obter(lesson1, 2);

// Exercício 8
const verificaPar = (obj, key, value) => {
  Object.entries(obj).forEach(element => {
    if (element[0] === key && element[1] === value) {
      console.log('Existe par');
    }
  })
}
//verificaPar (lesson3, 'turno', 'noite');

// Bônus 1

const countStundentPerLesson = lesson => {
  return (Object.entries(allLessons)
    .filter(([_, val]) => val.materia === lesson)
    .reduce((acc, [_, val]) => acc + val.numeroEstudantes, 0));
}

//console.log(countStundentPerLesson('Matemática'));

// Bônus 2

const createReport = (obj, professor) => {
  const report = {
    professor,
    aulas: [],
    estudantes: 0
  }

  Object.entries(obj)
    .filter(([_, value]) => value.professor === professor)
    .map(([_, value]) => value)
    .forEach(obj => {
      report.aulas.push(obj.materia);
      report.estudantes += obj.numeroEstudantes;
    })

  return report;
}

//console.log(createReport(allLessons, 'Maria Clara'));
//console.log(createReport(allLessons, 'Carlos'));
