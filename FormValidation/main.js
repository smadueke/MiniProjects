
const input = document.getElementById('input');
const form = document.getElementById('form');
const result = document.getElementById('result')

form.addEventListener('submit', (event) => {
    let message = ''
    
    if (input.value === '' || input.value == null) {
        message = "Input is required"
    }

    else if (!Number.isInteger(Number(input.value))) {
        message = `${input.value} is not a valid number!`
    }

    else if (input.value % 2 === 0) {
        message = `${input.value} is an EVEN number!`
    }

    else if (input.value % 2 != 0) {
        message = `${input.value} is an ODD number!`
    }

    console.log('Hello')

    if (message.length > 0) {
        event.preventDefault()
        result.innerText = message

    }

})

