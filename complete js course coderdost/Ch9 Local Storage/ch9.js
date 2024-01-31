// Local storage

// In previous todo list task when we refresh the browser we lose current state data

// store and retrieve data from database

// for now our focus is on local storage

// store andn r etrieve data from local storage

// Is an api provided by browser to store data inside browser

// console.log(window)
// console.log(localStorage)


// set item
// get item
// update item

// set the item in local storage

// localStorage.setItem('passion', 'coding')
// localStorage.setItem('age', '24')
// console.log(localStorage) 


// get item from localstorage
// It will store permenantly, not just temporary store

// let passion = localStorage.getItem('passion')
// console.log(passion)

// Update

// localStorage.setItem('age', 26)  // update means just overwrite the previous value
// console.log(localStorage)

// all console logs will work even if we removed all the set items as the localstorage is saved on browser 
// so our data is stored on the browser once we save and it will be saved up until we clean it up


// Remove Item

// localStorage.removeItem('age')

// clearing entire localstorage
// localStorage.clear()


// how to store complex data structure like 
// array of objects

// Ultimately in local storage data store in string formate 

let vehicles = [
    {company: 'Honda', model: '2009'},
    {company: 'Toyota', model: '2011'},
]

// console.log(typeof vehicles)

let stringOfVehicles = JSON.stringify(vehicles)
console.log(stringOfVehicles)

localStorage.setItem('vehicles', stringOfVehicles)

console.log(localStorage)

// get stored item again in object format

let storedData = localStorage.getItem('vehicles')

let objectFormate = JSON.parse(storedData)

console.log(objectFormate)
console.log(typeof objectFormate)
