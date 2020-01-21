console.log('OBJECTS');

// returns length of word
const wordLength = (word) => {
  return word.length;
};

console.log('num of letters', wordLength('cat')); // 3
console.log('num of letter', wordLength('monkeybutt')); // 10

// check your age.
const ageCheck = (age) => {
  if(age >= 21){
    console.log('PARTY!!!!!');
  } else {
    console.log('no drinks for you');
  }

  // (age >= 21) ? console.log('PARTY!!!!!') : console.log('no drinks for you');

  // if(age < 21){
  //   console.log('no drinks for you');
  // } else {
  //   console.log('PARTY!!!!!');
  // }
};

ageCheck(12); // 'no drinks for you'
ageCheck(24); // 'PARTY!!!!!!!!!!!!!'


const expense = {
  dateCreated: '01/17/2020',
  location: 'Baja Burrito',
  cost: 12.57,
  isGood: true
};

// dot notation
console.log(expense.cost);

// bracket notation
console.log(expense['cost']);

const employee = {
  id: 'asdfa2133',
  startDate: '12/21/1986',
  storeNum: 2345,
  firstName: 'Zoe',
  lastName: 'Ames',
  industry: 'healthcare',
  passDrugScreen: true,
  salary: 300000000000000,
  collegeDegree: true,
  position: 'Underwater basket weaver',
  supervisor: 'asdf6968'
};

// Challenge
// create function called statusMaker that takes in a single employee
// if the employee firstName starts with an M then add a key of status
//    and a value of 'vip'
// if the employee firstName doesn't start with an M add a key of status
// and a value of 'peasant'
// return complete employee
const statusMaker = (emp) => {
  // if (emp.firstName.startsWith('M')) {
  if (emp.firstName[0] === 'M') {
    emp.status = 'vip';
  } else {
    emp.status = 'peasant';
  }
  return emp;
};

console.log(statusMaker(employee));