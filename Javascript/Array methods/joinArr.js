const countries = ['india', 'pak', 'indo', 'usa', 'romania']

// join will convert an array to string, 
// you can pass separator to join elements and put it in array
// if we have one element the separator won't be applied 
// const res = countries.join('-')
const res = countries.join(',')

console.log("I want to visit",res)