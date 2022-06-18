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
    }
    ;
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map