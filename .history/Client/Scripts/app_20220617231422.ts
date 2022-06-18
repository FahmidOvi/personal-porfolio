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
        $("a.delete").on("click", function(event)
        {
            if (!confirm("Are you sure?"))
            {
                event.preventDefault;
                location.href('/movie-list');
            }
        });
    };

    window.addEventListener("load", Start);

})();