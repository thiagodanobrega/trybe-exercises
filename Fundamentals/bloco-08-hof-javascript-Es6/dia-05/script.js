// Exercício 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) 
  //console.log(rectangle[0] * rectangle[1]);
});

// Exercício 2
const sum = (...number) => number.reduce((acc, value) => acc + value, 0);
//console.log(sum(5, 2, 4, 9, 30, 2));

// Exercício 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
//console.log(personLikes(alex));

// Exercício 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const getPeople = (obj) => {
  return obj.filter(({bornIn, nationality}) => {
    return bornIn >= 1900 && bornIn < 2000 && nationality === 'Australian';
  })
}
//console.log(getPeople(people));

// Exercício 5
const myList = [1, 2, 3];
const swap = ([one, two, three]) => [three, two, one];
//console.log(swap(myList));

// Exercício 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({name, brand, year}); 
//console.log(toObject(palio));

// Exercício 7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;

//console.log(shipLength(ships[0]));

// Exercício 8
const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;
//console.log(greet('John'));

// Exercício 9
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const {spring, summer, autumn, winter} = yearSeasons;
const arr = [...winter, ...spring, ...summer, ...autumn];
//console.log(arr);



          
const source = [1,2,3,4,5,6,7,8,9,10];

const max = Math.max(...source)

console.log(max)
        


