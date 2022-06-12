/* JavaScript goes here */

function submitForm() {

    let formData = {
        firstName : $('#first').val(),
        lastName: $('#last').val(),
        email: $('#email').val(),
        phoneNumber: $('#phone').val(),
        message: $('#message').val()
    };

   console.log(formData);
};