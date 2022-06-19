/* 
Filename: app.js
Name: Fahmid Ovi
Student ID: 301216822
Date: 6/3/2022
*/

/* Custom JavaScript goes here */

(function()
{
    function Start()
    {
        // Confirm delete contact in contact-list page
        $("a.delete").on("click", function(event)
        {
            if (!confirm("Are you sure?"))
            {
                event.preventDefault();
                location.href = "/contact-list"; 
            };
        });

        // Confirm delete contact in contact-list page
        $("a.deleteOnEdit").on("click", function(event)
        {
            if (!confirm("Are you sure?"))
            {
                let pathArray = window.location.pathname.split('/');
                event.preventDefault();
                location.href = "/edit/" + pathArray[pathArray.length - 1] ; 
            };
        });

        $("#registerForm").on("submit", function(event)
        {
            let firstName = document.getElementById("firstName");

            if ($("#firstName").val() == '')
            {
                firstName.setCustomValidity("Firstname cannot be blanked.");
                return false;
            };
        });
    };

    window.addEventListener("load", Start);

})();