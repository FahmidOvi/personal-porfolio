

function formOnSubmit(): void {
    alert('test');
    let firstname = $('#first').val();
    let lastname = $('#last').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let message = $('#message').val();
    
    let userInfo = {
        "firstName" : firstname,
        "lastName" : lastname,
        "email" : email,
        "phone" : phone,
        "message" : message
    }


}
document.getElementById("btnSubmit")?.addEventListener('click', formOnSubmit);