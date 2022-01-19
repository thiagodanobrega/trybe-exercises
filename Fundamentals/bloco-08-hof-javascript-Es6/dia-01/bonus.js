// Parte I

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Gerando um número inteiro aleatório entre dois valores, inclusive
// Math.random() * (max - min + 1)) + min;
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Exercício 1
const dragonDamage = () => {
  return Math.round(Math.random() * (dragon.strength - 15 +1) + 15);
}
//console.log(dragonDamage());

// Exercício 2
const warriorDamage = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  const minDamage = warrior.strength;
  return Math.round(Math.random() * (maxDamage - minDamage + 1) + minDamage);
}
//console.log(warriorDamage());

// Exercício 3
const mageDamage = () => {
  const maxDamage = mage.intelligence * 2;
  const minDamage = mage.intelligence;
  const obj = {};
  if (mage.mana < 15) {
    obj.damage = 'Não possui mana suficiente';
    obj.mage = 0;
  } else {
    obj.damage = Math.round(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    mage.mana -= 15;
    obj.mana = 15; 
  }
  return obj;
}

// Parte II

const gameActions = {
  // Crie as HOFs neste objeto.
  // Ex1
  warriorActions(callback) {
    const damage = callback();
    warrior.damage = damage;
    dragon.healthPoints -= damage;
    return warrior;
  },
  // Ex2
  mageActions(callback) {
    const obj = callback();
    mage.damage = obj.damage;
    dragon.healthPoints -= obj.damage;
    return mage;
  },
  // Ex3
  dragonActions(callback) {
    const damage = callback();
    dragon.damage = damage;
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
    return dragon;
  },
  // Ex4
  battle() {
    battleMembers.warrior = this.warriorActions(warriorDamage);
    battleMembers.mage = this.mageActions(mageDamage);
    battleMembers.dragon = this.dragonActions(dragonDamage);
    return battleMembers;
  },
};
//console.log(gameActions.battle());
