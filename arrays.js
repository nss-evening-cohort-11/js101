console.log('ARRAYS');

const junkDrawer = ['hi', 2, true, {name: 'Zoe Ames'}, [1, 2, 3, 4]];

console.log(junkDrawer[2]);
junkDrawer.push('fluffy');

const valuePrinter = (arr, idx) => {
  return arr[idx];
};

const numArray = [1, 2, 3, 4, 5];
console.log(valuePrinter(numArray, 2)); // 3
console.log(valuePrinter(['cat', 'dog', 'bear', 'turtle', 'fish'], 1)); // turtle