/* Author: 

*/

let users;
let textarea = document.querySelector('.get-year textarea');
let url = "https://gabhijeetaxioned.github.io/json/Birthday-data.json";
let input = document.querySelector('#year');
let error = document.querySelector('.error');

/*
* @params url string
* display the data once page get loaded
*/
fetch(url)
.then(res => res.json())
.then(data => {
    users = data;
    textarea.readOnly = true;
    textarea.innerHTML = JSON.stringify(data, null, 4);
})

/*
* validate input while user entering value
*/
input.addEventListener('input', () => {
    let regex = /[^0-9]/;
    if(regex.test(input.value)) {
        error.innerText = "This field must contains only digits"
        error.classList.add('show-error');
    }
    else {
        error.classList.remove('show-error');
    }
});

/*
* validate input after clicking on submit
*/
document.querySelector('.submit').addEventListener('click', event => {
    event.preventDefault();
    if(input.value === '') {
        error.innerText = "This field is required!"
        error.classList.add('show-error');
    }
    else if ((/[^0-9]/).test(input.value)) {
        error.innerText = "This field must contains only digits"
        error.classList.add('show-error');
    }
    else {
        error.classList.remove('show-error');
    }    
});





















