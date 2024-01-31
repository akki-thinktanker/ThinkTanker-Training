const num = [1, 2, 3, 4, 5, 67];

const res = num.some(greaterThan4);

function greaterThan4(item, idx, arr) {
  return item > 4;
}

console.log(res);

// check if person is adult

const person = [
  {
    name: "akki",
    age: 22,
  },
  {
    name: "vivi",
    age: 17,
  },
  {
    name: "prids",
    age: 16,
  },
];

function isAdult(person)
{
    return person.age >= 18
}

const result = person.some(isAdult)
console.log(result)