// Targhetam fiecare input dupa ID-ul sau specific
const firstNameInput = document.querySelector('#fname');
const lastNameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phnumb');
// Targhetam Submit button
const submitButton = document.querySelector('#buttonDiv input');

// Targhetam span-urile cu mesaje
const firstNameSpan = document.querySelector('#fnameSpan');

// Cream functiile de validare
function letterCharValidation(input) {
    var value = input.value;
    var span = input.nextElementSibling;
    console.log(span);
    var namePattern = /^[a-zA-Z\s-]+$/;
    if (value === '') {
        span.textContent = 'This field must be filled out';
        span.classList.remove('hidden');
        input.style.cssText = 'border: 2px solid red';
        return false;
    } else {
        if (!namePattern.test(value)) {
            span.textContent = 'You must use only letters';
            span.classList.remove('hidden');
            input.style.cssText = 'border: 2px solid red';
            return false;
        } else {
            console.log('All correct!');
            span.textContent = '';
            span.classList.add('hidden');
            input.style.cssText = 'border: 2px solid green';
            return true;
        }
    }



    // Regex verification

    /*if (!firstName || !lastName) {
        return "First name and last name are required.";
    }

    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
        return "Invalid first name or last name.";
    }

    return "Valid name.";*/

    // x - valoarea unui input
    // Scenariul cu input gol
    /*if (x == "") {
    alert("Name must be filled out");
    return false;
  }*/

}

function emailValidation(input) {
     var value = input.value;
     var firstRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var namePattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value === '') {
        console.log('This field must be filled out');
        input.style.cssText = 'border: 2px solid red';
        return false;
    } else {
        if (!namePattern.test(value)) {
            console.log('You must use only letters');
            input.style.cssText = 'border: 2px solid red';
            return false;
        } else {
            console.log('All correct!');
            input.style.cssText = 'border: 2px solid green';
            return true;
        }
    }

}

function phoneNumberValidation(input) {
    var value = input.value;
    var letterPattern = /^[a-zA-Z\s-]+$/;
    var namePattern = /^\d{9}$/;
    if (value === '') {
        console.log('This field must be filled out');
        input.style.cssText = 'border: 2px solid red';
        return false;
    } else {
        if (!namePattern.test(value)) {
            console.log('Incorrect number');
            phoneNumberInput.value = '';
            console.log('Scenariul cu stergerea literelor');
            /*input.style.cssText = 'border: 2px solid red';
            return false;*/
        } /*else if (letterPattern.test(value)) {
            phoneNumberInput.value = '';
            console.log('Scenariul cu stergerea literelor');
        }*/ else {
            console.log('All correct!');
            input.style.cssText = 'border: 2px solid green';
            return true;
        }
    }
}

firstNameInput.addEventListener('input', () => {
    letterCharValidation(firstNameInput);
});

lastNameInput.addEventListener('input', () => {
    letterCharValidation(lastNameInput);
});

emailInput.addEventListener('input', () => {
    emailValidation(emailInput);
});

phoneNumberInput.addEventListener('blur', () => {
    phoneNumberValidation(phoneNumberInput);
});