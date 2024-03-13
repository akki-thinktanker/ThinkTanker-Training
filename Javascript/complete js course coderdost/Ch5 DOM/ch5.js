// javascript DOM (Document Object Model)

// Created by browser as the html load into the browser.

// Browser create object of html called 'document object'

// In Document Object there is model of complete html in tree liike structure


// for accessing HTML elements

// querySelector/All
// let classEle = document.querySelector('.coder')
// let IdEle = document.querySelector('#coders')
// let tagEle = document.querySelector('p')

// console.log(classEle)
// console.log(IdEle)
// console.log(tagEle)

// // Other ways to get html elements

// // get element by tagName

// let tagSelect = document.getElementsByTagName('h1')
// let idSelect = document.getElementById('coders')
// let classSelect = document.getElementsByClassName('coder')

// console.log(tagSelect)
// console.log(idSelect)
// console.log(classSelect)


// let qsa = document.querySelectorAll('p')

// qsa.forEach(e => {
//     console.log(e)
// })


// Updating and Changing content


// innerText
// ignores spaces
// let heading = document.querySelector('h1')

// console.log(heading.innerText)

// let content = document.querySelector('.content')
// console.log(content.innerText)
// // content.innerText = '<p>This is para</p>'


// // innerHTML
// // console.log(heading.innerHTML)
// console.log(content.innerHTML)

// content.innerHTML += '<p>This is para</p>' //this is replacing all the code inside the div tag
// It does not ignore spaces




// Getting and Setting attribute of element

// let urlStr = document.querySelector('a')
// console.log(urlStr.getAttribute('href'))

// // set the attribute

// urlStr.setAttribute('href', 'https://www.google.com/')
// urlStr.innerHTML = 'Visit Google'



// Adding style

// let heading = document.querySelector('h1')

// heading.style.color = 'white'
// heading.style.backgroundColor = 'red'


// // Add, Remove and Replace class of element

// let heading = document.querySelector('h1')

// // Add the class

// heading.classList.add('main')
// heading.classList.add('newClass')

// // Remove the class

// heading.classList.remove('newClass')

// // Replace the class

// heading.classList.replace('main', 'newMain')


// Parent, Children and siblingg

// let parentElem = document.querySelector('.parent')
// // All children of parent
// console.log(parentElem.children)

// // we cannot run forEach method on HTMLCollection
// // so  first  we hae to convert it into array

// console.log(Array.from(parentElem.children))

// Array.from(parentElem.children).forEach(function (elem) {
//     elem.classList.add('comders')
// })


// // Child Element

// let childElement = document.querySelector('h2')

// // // find the parent of specific child

// // console.log(childElement.parentElement)


// // find next sibling of child

// console.log(childElement.nextElementSibling)
// console.log(childElement.prevele)


// Event Basics (click Event)

// const ul = document.querySelector('ul')
// ul.addEventListener('click', () => {
//     console.log("Inside UL")
// })

// let button = document.querySelector('.clickme')
// // console.log(button)

// button.addEventListener('click', () => {


//     // creating 

//     let li = document.createElement('li')
//     li.textContent = 'something new popped up'
//     ul.appendChild(li)
//     ul.prepend(li)
// })




// let elements = document.querySelectorAll('li')
// // console.log(elements)

// elements.forEach(function(elem){
//     elem.addEventListener('click', function(e){
//         console.log(`${elem.innerText} clicked`)
//         // console.log(e)
//         // e.target.style.textDecoration = 'line-through'


//         // for removing element from dom use remove() method
//         e.target.remove()
//         // console.log(e.target)
//     })
// })



const ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {
    console.log("Inside UL")

    if(e.target.nodeName == 'LI')
    {
        e.target.remove()
    }
})

// copy event

// let copyRight = document.querySelector('.copy')

// copyRight.addEventListener('copy', () => {
//     console.log("HEY! THIS IS COPYRIGHTED MATERIAL")
// })


// mouse move event

let box = document.querySelector('.box')

box.addEventListener('mousemove', (e) => {
    console.log(e.offsetX, e.offsetY)

})