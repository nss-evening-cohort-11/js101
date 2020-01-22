console.log('COMBO');

// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.
const evenOdd = (num) => {
  if (num %2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
};
console.log('evenOdd', evenOdd(5));
console.log('evenOdd', evenOdd(7));
console.log('evenOdd', evenOdd(10));


// Challenge #2
// given a number, find its opposite. 2 = -2
const opposite = (num) => {
  return num * (-1);
};
console.log('opposite', opposite(-2));
console.log('opposite', opposite(3));
console.log('opposite', opposite(-200));

// Challenge #3
// A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
const palindrome = (text) => {
  const cleanText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()+ ]/g,'');
  const opp = cleanText.split('').reverse().join('');
  // if (cleanText === opp) {
  //   return true;
  // } else {
  //   return false;
  // }
  return (cleanText === opp);
};

console.log('palindrome', palindrome('cat')); // false
console.log('palindrome', palindrome('mom')); // true
console.log('palindrome', palindrome('bear')); // false
console.log('palindrome', palindrome('racecar')); // true
console.log('palindrome', palindrome('Race ./!+ca+!r')); // true


// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.
const animal = (str) => {
  if(str.toLowerCase() === 'alligator') {
    return 'small';
  } else {
    return 'wide';
  }
};

console.log(animal('alligator')); //small
console.log(animal('fish')); //wide
console.log(animal('AllIGator')); //small