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