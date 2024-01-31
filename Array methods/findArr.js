// first value 

// const names = ['akki','vivek', 'vaibhavi']

// function findVivek(item)
// {
//     return item === 'vivek'
// }

// const res = names.find(findVivek)
// console.log(res)


// this method shines when used with array of objects

const persons = [
    {name: 'akki',age: 22},
    {name: 'vivek',age: 18},
    {name: 'vaibhavi',age: 21},
]

const ageVaibhavi = persons.find((person) => {
    return person.name === 'vaibhavi'
})?.age;

console.log(ageVaibhavi)