/* Document JS */
    document.pageType = "Profile Page"

/* Navigation JS
        --- NOTE ---
            The timeout is to correlate with the former timeout
            in the "surejobs.js" file.
*/
setTimeout(function() {
    // Change the "Sign In or Login" navigation item
    document.querySelectorAll('#headerNav [data-id="linkD"]')[0].innerHTML = 'Welcome <span id="username"> </span>'
}, 100)