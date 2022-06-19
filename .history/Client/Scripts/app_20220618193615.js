"use strict";
(function () {
    function Start() {
        $("a.delete").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                event.preventDefault();
                location.href = "/contact-list";
            }
            ;
        });
        $("a.deleteOnEdit").on("click", function (event) {
            if (!confirm("Are you sure?")) {
                let pathArray = window.location.pathname.split('/');
                event.preventDefault();
                location.href = "/edit/" + pathArray[pathArray.length - 1];
            }
            ;
        });

        $("#registerForm").on("submit", function (event) {
            let password = document.getElementById("password");
            console.log(password);
            let confirmPassword = document.getElementById("password");
            if (password.value !== confirmPassword.value) {
                alert("wrong");
            }
            ;
        });
    }
    ;
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map