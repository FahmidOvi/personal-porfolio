function formOnSubmit() {
    alert("function working");
    let firstname = $('#first').val();
    let lastname = $('#last').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let message = $('#message').val();

    console.log(firstname);
}
document.getElementById("btnSubmit")?.addEventListener('click', formOnSubmit);