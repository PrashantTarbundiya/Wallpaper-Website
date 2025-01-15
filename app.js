function validateForm() {
var username = document.getElementById('username').value;
var phoneNumber = document.getElementById('number').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
if (username === ''|| email === '' || password === '') {
alert('Please fill in all fields');
return false;
}
if(phoneNumber.length <10 || phoneNumber.length >10){
    alert("Enter a valid Number");
}
return true;
}