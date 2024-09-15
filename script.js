// Targhetam fiecare input dupa ID-ul sau specific
const firstNameInput = document.querySelector("#fname");
const lastNameInput = document.querySelector("#lname");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phnumb");
// Targhetam Submit button
const submitButton = document.querySelector("#buttonDiv input");

// Targhetam span-urile cu mesaje
const firstNameSpan = document.querySelector("#fnameSpan");

//Targhetam forma
const submitBtn = document.querySelector('#buttonDiv input');

// Cream functiile de validare
function letterCharValidation(input) {
    var value = input.value;
    var span = input.nextElementSibling;
    var label = input.previousElementSibling;
    var namePattern = /^[a-zA-Z\s-]+$/;
    if (value === "") {
        span.textContent = "This field is required";
        label.style.cssText = "color: red";
        failClasslistsToggle(input);
        return false;
    } else {
        if (!namePattern.test(value)) {
            span.textContent = "Please insert alphabetic characters only";
            label.style.cssText = "color: red";
            failClasslistsToggle(input);
            return false;
        } else {
            console.log("All correct!");
            span.textContent = "";
            label.style.cssText = "color: #370050";
            successClasslistToggle(input);
            return true;
        }
    }
}

function successClasslistToggle(el) {
    var message = el.nextElementSibling;
    if (!message.classList.contains("hidden")) {
        message.classList.add("hidden");
    } else {}
    if (el.classList.contains("failInput")) {
        el.classList.remove("failInput");
    } else {}
    if (!el.classList.contains("successInput")) {
        el.classList.add("successInput");
    } else {}
    var inputDiv = el.parentNode;
    var successMark = inputDiv.querySelector('.successMark');
    var failMark = inputDiv.querySelector('.failMark');
    if (successMark.classList.contains("hidden")) {
        successMark.classList.remove("hidden");
    } else { }
    if (!failMark.classList.contains("hidden")) {
        failMark.classList.add("hidden");
    } else { }
}

function failClasslistsToggle(el) {
    var message = el.nextElementSibling;
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
    } else { }
    if (el.classList.contains("successInput")) {
        el.classList.remove("successInput");
    } else { }
    if (!el.classList.contains("failInput")) {
        el.classList.add("failInput");
    } else { }
    var inputDiv = el.parentNode;
    var successMark = inputDiv.querySelector('.successMark');
    var failMark = inputDiv.querySelector('.failMark');
    if (failMark.classList.contains("hidden")) {
        failMark.classList.remove("hidden");
    } else { }
    if (!successMark.classList.contains("hidden")) {
        successMark.classList.add("hidden");
    } else { }
}

function emailValidation(input) {
    var value = input.value;
    var span = input.nextElementSibling;
    var label = input.previousElementSibling;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.match(emailPattern)) {
        span.textContent = "";
        label.style.cssText = "color: #370050";
        successClasslistToggle(input);
        return true;
    } else if (!email.value.includes('@') && email.value !== '') {
        span.textContent = `Please include an '@' in the email address. ${value} is missing an '@'.`;
        label.style.cssText = "color: red";
        failClasslistsToggle(input);
        return false;
    } else if (email.value.endsWith('@')) {
        span.textContent = `Please enter a part following '@'. '${value}' is incomplete.`;
        label.style.cssText = "color: red";
        failClasslistsToggle(input);
        return false;
    } else if (email.value == '') {
        span.textContent = "This field is required";
        label.style.cssText = "color: red";
        failClasslistsToggle(input);
        return false;
    } else {
        span.textContent = `Please enter a domain name (I.e ".com", ".uk", ".net"). '${value}' is incomplete.`;
        label.style.cssText = "color: red";
        failClasslistsToggle(input);
        return false;
    }
}

function phoneNumberValidation(input) {
    var value = input.value;
    var span = input.nextElementSibling;
    var label = input.previousElementSibling;
    var phonePattern = /^0[0-9].*$/;
    var lettersPattern = /^[a-zA-Z\s-]+$/;
    if (value === "") {
        span.textContent = "This field is required";
        label.style.cssText = "color: red";
        failClasslistsToggle(input);
        return false;
    } else {
        if (value.match(phonePattern) && value.length == 9 && value.startsWith('0')) {
            console.log("All correct!");
            span.textContent = "";
            label.style.cssText = "color: #370050";
            successClasslistToggle(input);
            return true;
        } else {
            if (lettersPattern.test(value)) {
                span.textContent = 'Invalid phone number format. Please use only numbers.';
            } else {
                span.textContent = 'Please use a valid phone number. Number should be 9 digits and start with "0" (I.e 060111222).';
            }
            label.style.cssText = "color: red";
            failClasslistsToggle(input);
            return false;
        }
    }
}



firstNameInput.addEventListener("input", () => {
    letterCharValidation(firstNameInput);
});

lastNameInput.addEventListener("input", () => {
    letterCharValidation(lastNameInput);
});

emailInput.addEventListener("input", () => {
    emailValidation(emailInput);
});

phoneNumberInput.addEventListener("input", () => {
    phoneNumberValidation(phoneNumberInput);
});

function validateAll() {
    console.log('validating all');
    letterCharValidation(firstNameInput);
    letterCharValidation(lastNameInput);
    emailValidation(emailInput);
    phoneNumberValidation(phoneNumberInput);
}

submitBtn.addEventListener('click', validateAll);
