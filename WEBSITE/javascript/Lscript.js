var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

// Select the forms
var signUpForm = document.querySelector('.first-content .form');
var signInForm = document.querySelector('.second-content .form');

// Initialize an array to store the user data
var users = [];

// Add submit event listener to the sign up form
signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var name = signUpForm.querySelector('input[type="text"]').value;
    var email = signUpForm.querySelector('input[type="email"]').value;
    var password = signUpForm.querySelector('input[type="password"]').value;

    // Store the user data in the users array
    users.push({ name, email, password });

    console.log('Users:', users);
});

// Add submit event listener to the sign in form
signInForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var email = signInForm.querySelector('input[type="email"]').value;
    var password = signInForm.querySelector('input[type="password"]').value;

    // Store the user data in the users array
    users.push({ email, password });

    console.log('Users:', users);
});
// Add submit event listener to the sign in form
signInForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var email = signInForm.querySelector('input[type="email"]').value;
    var password = signInForm.querySelector('input[type="password"]').value;

    // Find the user in the users array
    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        alert('User found:', user);
        // Navigate to index.html
        window.location.href = '../html/index2.html';
    } else {
        alert('No user found with the provided email and password');
    }
});