const buttons = document.querySelectorAll('button')


buttons.forEach(element => {
    element.addEventListener('click', function() {
        buttons.forEach(element => {
            element.classList.remove('active')
        })
    element.classList.add('active')
    })
})

var date = new Date();
date.setDate(date.getDate() + 2);

const checkbox = document.querySelector('#checkbox-item')

console.log(checkbox);