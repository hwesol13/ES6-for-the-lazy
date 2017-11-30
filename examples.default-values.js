// tslint:disable

// example data
const defaultHeroSkills = ['flight', 'strength', 'speed', ['night vision', 'freezing breath']];

const heroExample = {
  name: 'Super Man',
  item: 'cape',
  skills: defaultHeroSkills,
  planet: 'Krypton'
};



// object property name shorthand

var objPropNameShorthandES5 = function(hero) {
  return {
    name: hero.name,
    item: hero.item
  };
};

const objPropNameShorthandES6 = ({ name, item }) => ({ name, item });

const result_ES5 = objPropNameShorthandES5(heroExample);
const result = objPropNameShorthandES6(heroExample);

console.log(result_ES5);
console.log(result);



// default values - arrays

var getDefaultValueArrES5 = function(heroSkills) {
  var skill = heroSkills[4] || 'defaultValue';

  return skill;
};

const getDefaultValueArr = ([, , , , lastElement = 'defaultValue'] = defaultHeroSkills) => lastElement;

const result2_ES5 = getDefaultValueArrES5(defaultHeroSkills);
const result2 = getDefaultValueArr(defaultHeroSkills);

console.log(result2_ES5);
console.log(result2);



// default values - objects

var getDefaultValueObjES5 = function(hero) {
  var planet = hero.planet || 'defaultValue';

  return planet;
};

const getDefaultValueObj = ({ planet: planetAlias = 'Earth' } = {}) => planetAlias;

const result3_ES5 = getDefaultValueObjES5(heroExample);
const result3 = getDefaultValueObj(heroExample);

console.log(result3_ES5);
console.log(result3);



// going crazy!

const getCrazyValue = (hero) => {
  let existingVar = 'Joker';
  const keyName = 'name';

  ({ [keyName]: existingVar } = hero);

  return existingVar;
};

const result4 = getCrazyValue(heroExample);

console.log(result4);
