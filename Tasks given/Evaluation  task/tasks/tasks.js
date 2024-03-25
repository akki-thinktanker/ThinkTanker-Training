//////////////////////////////
// 1. Return the A-Z.

// const value = "Hello123@";
// console.log(value.match())
// const upperCaseValues = value.match(/[A-Z]/g)
// console.log(upperCaseValues.join(''))

//////////////////////////////////
// 2. Return the a-z.
// const value = "Hello123@";

// const lowerCaseValues = value.match(/[a-z]/g)
// console.log(lowerCaseValues.join(''))


/////////////////////////////////////
// 3. Return the 0-9
// const value = "Hello123@";

// const numbersValue = value.match(/[0-9]/g)
// console.log(numbersValue.join(''))



//////////////////////////////////////
// 4. Return only special characters.

// const value = "Hello123@"


// const specialCharacters = value.match(/[^A-Za-z0-9]/g)  
// console.log(specialCharacters.join(''))

/////////////////////////////////////////////

// 5. Return only vowels (a, e, i, o, u).

// const value = "Hello123@"

// const valueArr = value.split('')

// valueArr.forEach(val => {
//     if(val.includes('a') || val.includes('e') || val.includes('i') || val.includes('o') || val.includes('u')  )
//         console.log(val)
// })

///////////////////////////////////////////

// NOTE: REVIEW THIS (WRONG)

// 6. Return only consonants.

// const value = "Hello123@"

// const valueArr = value.split('')
// let consonants = []
// valueArr.forEach(val => {
//     if(!val.includes('a') && !val.includes('e') && !val.includes('i') && !val.includes('o') && !val.includes('u' ) )
//        { console.log(val)
//         consonants.push(val)
//     }
// })
// consonants = consonants.join('')
// console.log(consonants)

// const specialCharacters = consonants.match(/[^0-9]/g)  

// console.log(specialCharacters.join(''))

//////////////////////////////////////////

// 7. Print characters/digits at odd positions.

// const value = "Hello123@"

// const valueArr = value.split('')

// const oddPositions = []

// valueArr.forEach((val, idx) => {
//     if(idx % 2  === 0)
//     oddPositions.push(val)
// })

// console.log(oddPositions.join(''))

///////////////////////////////////////////////

// 8. Print characters/digits at even positions.

// const value = "Hello123@"

// const valueArr = value.split('')

// const evenPositions = []

// valueArr.forEach((val, idx) => {
//     if(idx % 2  === 1)
//         evenPositions.push(val)
// })

// console.log(evenPositions.join(''))
////////////////////////////////////////////////////

// 9. Reverse the input

// const val = "Hello123@"

// const ans = val.split('').reverse().join('')

// console.log(ans)

//////////////////////////////////////

// 10. Find the second last character/digit/number in the input.

// const val = "Hello123@"

// const secondLastCharacter = val[val.length-2]

// console.log(secondLastCharacter)
