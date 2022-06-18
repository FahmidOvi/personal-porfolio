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
        // Confirm delete contacts
        $("a.delete").on("click", function(event)
        {
            if (!confirm("Are you sure?"))
            {
                event.preventDefault();
                location.href = "/contact-list"; 
            };
        });

        $("a.deleteOnEdit").on("click", function(event)
        {
            if (!confirm("Are you sure?"))
            {
                let pathArray = window.location.pathname.split('/');
                event.preventDefault();
                location.href = "/edit/" + pathArray[pathArray.length - 1] ; 
            };
        });
    };

    window.addEventListener("load", Start);

})();