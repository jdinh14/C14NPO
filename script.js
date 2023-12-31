function subscribe() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        alert('Thank you for subscribing with the email: ' + email);
        document.getElementById('message').textContent = 'Subscribed successfully!';
    } else {
        alert('Please enter a valid email address.');
        document.getElementById('message').textContent = 'Failed to subscribe. Invalid email.';
    }
}

function validateEmail(email) {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return email.match(pattern);
}
