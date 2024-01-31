const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const calc = (fx, a, b) => {
  return fx(a, b);
};

const addition = calc(sum, 12, 12);
const substraction = calc(sub, 12, 12);

console.log(addition)
console.log(substraction)