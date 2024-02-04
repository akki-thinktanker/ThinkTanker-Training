const button = document.querySelector('#btn')
const body = document.querySelector('#body')

function changeColor(){
    const randomHex = () => {
        const hex = `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6,'0')}`
        body.style.backgroundColor = hex;
    }

    return randomHex();
}
button.addEventListener('click', () => changeColor())

