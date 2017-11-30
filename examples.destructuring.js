// example data

const defaultHeroSkills = ['flight', 'strength', 'speed', ['heat vision', 'freezing breath']];

const hero = {
  name: 'Super Man',
  item: 'cape',
  skills: defaultHeroSkills,
  planet: 'Krypton',
  friends: {
    batman: {
      skills: ['tech', 'strength'],
      isHuman: true,
      planet: 'earth'
    },
    spiderMan: {
      skills: ['strength', 'web'],
      isHuman: true,
      planet: 'earth'
    }
  }
};



// explanation - arrays

const [ one, two, three ] = [ 1, 2, 3];

console.log(one);
console.log(two);
console.log(three);



// getting items from arrays

var getFirstSkillES5 = function(skills) {
  var firstSkill = skills[0];

  return firstSkill;
};

const getFirstSkillES6 = ([ firstSkill ]) => firstSkill;

const getSecondSkillES6 = ([ , secondSkill ]) => secondSkill;

const getNestedSkillES6 = ([ , , , [ nestedSkill ] ]) => nestedSkill;

const getSecondNestedSkillES6 = ([ , , , [ , secondNestedSkill ] ]) => secondNestedSkill;

const firstSkill = getFirstSkillES5(defaultHeroSkills);
const firstSkill_ES6 = getFirstSkillES6(defaultHeroSkills);
const secondSkill_ES6 = getSecondSkillES6(defaultHeroSkills);
const nestedSkill_ES6 = getNestedSkillES6(defaultHeroSkills);
const secondNestedSkill_ES6 = getSecondNestedSkillES6(defaultHeroSkills);

console.log(firstSkill);
console.log(firstSkill_ES6);
console.log(secondSkill_ES6);
console.log(nestedSkill_ES6);
console.log(secondNestedSkill_ES6);



// swap two values

var swapTwoValuesES5 = function() {
  var a = 1, b = 2, temp = a;
  a = b;
  b = temp;

  return a + ' ' + b;
};

const swatTwoValuesES6 = () => {
  let a = 1, b = 2;
  [ b, a ] = [ a, b ];

  return `${a} ${b}`;
};

const values = swapTwoValuesES5();
const values_ES6 = swatTwoValuesES6();

console.log(values);
console.log(values_ES6);



// explanation - objects

const { one, two, three } = { one: 1, two: 2, three: 3 };

console.log(one);
console.log(two);
console.log(three);



// getting values from objects

var getHeroNameES5 = function(hero) {
  var name = hero.name;

  return name;
};

const getHeroNameES6 = ({ name }) => name;

const getHeroFriendsSkillsES6 = ({ friends: { batman: { skills } } }) => skills;

const getHeroFriendsFirstSkillsES6 = ({ friends: { batman: { skills: [ firstSkill ] } } }) => firstSkill;

const heroName = getHeroNameES5(hero);
const heroName_ES6 = getHeroNameES6(hero);
const heroFriendSkills_ES6 = getHeroFriendsSkillsES6(hero);
const heroFriendFirstSkill_ES6 = getHeroFriendsFirstSkillsES6(hero);

console.log(heroName);
console.log(heroName_ES6);
console.log(heroFriendSkills_ES6);
console.log(heroFriendFirstSkill_ES6);
