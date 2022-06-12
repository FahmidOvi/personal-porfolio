import fs from 'fs';

function formOnSubmit(): void {
    let firstname = $('#first').val();
    let lastname = $('#last').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let message = $('#message').val();
    
    let userInfo = {
        firstName : firstname,
        lastName : lastname,
        email : email,
        phone : phone,
        message : message
    }

    console.log(JSON.stringify(userInfo));

    fs.writeFile('/Asset/Files/userInfo.txt', JSON.stringify(userInfo), function (err) {
        if (err) return console.log(err);
        else alert("Thank you for your message.");
        document.open('/home');
      });
}
document.getElementById("btnSubmit")?.addEventListener('click', formOnSubmit);

export default fs;