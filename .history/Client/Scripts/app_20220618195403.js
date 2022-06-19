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

        $("#submitButton").on("click", function (event) {
            let password = document.getElementById("password").value;
            console.log(password);
            let confirmPassword = document.getElementById("confirmPassword").value;
            console.log(confirmPassword)
            if (password === confirmPassword) {
                document.getElementById("password").setCustomValidity("");
            } else {
                alert("h");
                document.getElementById("password").setCustomValidity("Pass");
            };
        });
    }
    ;
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map