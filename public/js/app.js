// Test commit

const contactForm = document.querySelector('.contact-form');

let first_name = document.getElementById('fname');
let last_name = document.getElementById('lname');
let email = document.getElementById('email');
let cellphone = document.getElementById('cellphone');
let company = document.getElementById('company');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        cellphone: cellphone.value,
        company: company.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload =  function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent successfully! Data Pulse Analytics will contact you soon!');
            first_name.value = '',
            last_name.value = '',
            email.value = '',
            cellphone.value = '',
            company.value = '',
            message.value = ''
        } else{
            alert('An error happened while processing your request!');
        }
    }
    xhr.send(JSON.stringify(formData));
});