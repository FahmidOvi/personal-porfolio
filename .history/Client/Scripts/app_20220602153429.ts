import fs from 'fs';

function formOnSubmit(): void {
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

    console.log(JSON.stringify(userInfo));

    let data = JSON.stringify(userInfo);

    fs.writeFile('/Asset/Files/userInfo.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}
document.getElementById("btnSubmit")?.addEventListener('click', formOnSubmit);