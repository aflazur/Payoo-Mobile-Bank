document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById('Mobile-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);

    if (mobileNumber.length === 11) {
        if (convertedPin === 1234) {
            window.location.href = "./main.html"
        }
        else {
            alert('Please correct your pin.');
        }
    }
    else {
        alert('Please enter a valid mobile number')
    }
})