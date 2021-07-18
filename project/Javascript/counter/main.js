const number = document.querySelector('#number');

const increaseButton = document.querySelector('#increase')

const decreaseButton = document.querySelector('#decrease')

const resetButton = document.querySelector('#reset')

let counter = 0

const increase = () => {
    counter++; 
    render()
}

const decrease = () => {
    counter--
    render()
}

const reset = () => {
    counter = 0
    render()
}

const render = () => {
    number.innerHTML = counter
}
increaseButton.addEventListener('click', increase)
decreaseButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)