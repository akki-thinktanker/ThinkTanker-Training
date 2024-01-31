// Form events (Submit forms)

let form = document.querySelector('.sign-up-form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')

// Regular Expression (Regex)

// It is a pattern of Characters used to do pattern matching 
// or we can say for "Data Validation"

// Implementation of password validation

// Length atleast = 8
// At least contain one upper case letter
// at least contain one lower case letter
// at least contain one digit 0 to 9

// ^ - start of expression
// $ - end of expression
// [] - characters [from-to]
// {} - length of string like 8 to 10 characters needed

// let passwordPattern = "^(?=.*[A-Z])(?=.*?[a-z])(?=.*[0-9]).{8,10}$"

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     // console.log(`Email: ${email.value} Password: ${password.value}`) //using selected element's value
//     // console.log(form.userEmail.value, form.userPassword.value) // using name attribute in html
    
//     let passwordValue = password.value;
//     console.log(passwordValue)
//     let result = passwordValue.match(passwordPattern)
//     console.log(result) // if doesn't match then it gives null
//     if(result) // Don't check the condition like result == true, else it will always fail
//     {
//         console.log("Your Password is strong")
//     }
//     else{
//         console.log("Try again")
//     }
// })


// regex

// basic form validation
//  implement user validation

// username can only consist of A-Z and a-z
// length of username between 6 to 12



let user = document.querySelector('#name')

let userNamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let username = user.value;

    // test method returns boolean value

    let result = userNamePattern.test(username)
    if(result == true)
    {
        console.log(username, "is valid")
    }
    else{
        console.log(username, "is invalid")
        
    }

})


// Keyup event, interactive for users

// live feedback

user.addEventListener('keyup', (e) => {
    if(userNamePattern.test(e.target.value)){
        console.log("Passed")
        user.setAttribute('class', 'success')
    }

    else{
        user.setAttribute('class', 'error')

        console.log("failed")
    }
})