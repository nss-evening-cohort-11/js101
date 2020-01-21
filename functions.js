console.log('FUNCTIONS');

const nuggetizer = (animal) => {
  const output = `processed ${animal}`;
  // const output = 'processed ' + animal;
  return output;
};

console.log(nuggetizer('chicken'));
console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('tire'));

const dogBreed = (dog) => {
  return `my favorite dog breed is ${dog}`;
};

console.log(dogBreed('lab'));
console.log(dogBreed('actually a cat'));

// Challenge 1
// Write a function called fortyTwo that takes any
// number and adds 42
const fortyTwo = (num) => {
  return num + 42;
};

console.log(fortyTwo(4));  // 46
console.log(fortyTwo(42));  // 84

// Challenge 2
// write a function called oldAge that takes in the year
// someone was born and figures out how old you will be in 2099
const oldAge = (yearBorn) => {
  return 2099 - yearBorn;
};

console.log(oldAge(1954));  // 145
console.log(oldAge(2000));  // 99

