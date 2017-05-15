/* Strict Mode JS */
"strict mode";

// The timeout will be for the document's "pageType" property to be defined.
setTimeout(function() {
    // Call this function when the document has loaded
    $(document).ready(function() {
        /* Unique Variables */
            // Loop Counter
            var i

            // HTML Document Type
            var HTMLDoctype = (
                    '<!DOCTYPE ' +
                        (document.doctype.name) +
                        (document.doctype.publicId ? ' PUBLIC "' + document.doctype.publicId + '"' : '') +
                        (!document.doctype.publicId && document.doctype.systemId ? ' SYSTEM' : '')  +
                        (document.doctype.systemId ? ' "' + document.doctype.systemId + '"' : '') +
                    '>'
            )

        /* Global Object JS */
        window.name = $("title")[0].textContent

        /* Document JS */
        document.dir = "ltr"
            
        /* HTML Elements JS */
            // <html>
            $("html")[0].lang = "en"
            $("html")[0].translate = true
            $("html")[0].version = (
                function() {
                    if (HTMLDoctype == "<!DOCTYPE html>")
                        return "5.0+"
                    else 
                        return "5.0 below"
                }
            )()
            
            /* <main>
                    --- NOTE ---
                        Declare the CSS "min-height" for the element.
            */
            // If the screen height is larger than the width
            if (window.screen.height > window.screen.width)

                /* --- FORMAT ---
                        min-height: <<screenHeight - screenWidth>>
                */
                $("main")[0].style.minHeight = (window.screen.height - window.screen.width) + "px"
            
            else

                /* --- FORMAT ---
                        min-height: <<screenHeight / (screenWidth / screenHeight)>> / 2
                */
                $("main")[0].style.minHeight = ((window.screen.height / (window.screen.width / window.screen.height)) / 2) + "px"

            // <style>
                /* --- NOTE ---
                        Create a global variable with a
                        single instance declaring the document font.
                */
                var raleway = "url('../assets/fonts/Raleway/Raleway-Medium.ttf')"

                // Append the stylesheet
                setTimeout(function() {
                    $('head')[0].insertAdjacentHTML(
                        'beforeend',
                        '<style id="surejobsStylesheet" type="text/css"> ' +
                            // CSS At-Rules
                            '@font-face { ' +
                                'font-family: raleway; ' +
                                'src: ' + raleway +
                            ' }' +
                        ' </style>'
                    )
                }, 1)

        /* Navigation JS */
            /* If
                        the "headerNav" ID is not taken (for the header)
                    and 
                        the "headerNavExtraDropdown" ID is not taken (for the header's items' drop menus)

                    create Javascript clones of the <header> and <footer>.
            */
            if ($("#headerNav")[0] == undefined &&
                $("#headerNavExtraDropdown")[0] == undefined) {

                // Create the Header Navigation Panel
                $('main')[0].insertAdjacentHTML(
                    'afterbegin',
                    
                    // Header Navigation Panel
                    '<!-- Header Navigation Panel (Navigation) -->' +
                        '<!-- Navigation Panel -->' +
                        '<nav id="headerNav">' +
                            // Link Main
                            '<a class="main" data-id="linkMain" data-title=" Home " href="../index.php">' +
                                ' <img draggable="false" id="logo" src="../assets/img/png/logo/Sure Jobs (Medium).png"> ' +
                            '</a>' +
                            // Links A - E
                                // Hire Artisans
                                '<a data-id="linkA" href="../pages/hire.php"> Hire Artisans </a>' +
                                // Find Work
                                '<a data-id="linkB" href="../pages/work.php"> Find Work </a>' +
                                // How it Works
                                '<a data-id="linkC" href="../pages/about-us.php"> How it Works </a>' +
                                // Sign In or Join
                                '<a data-id="linkD" href="../forms/form.php"> Sign In or Join </a>' +
                        '</nav>' +

                        // Header Navigation Dropdown
                        '<!-- Navigation Dropdowns -->' +
                        '<ul id="headerNavExtraDropdown"> </ul>'
                )
                    for (i = 0; i < $('a[data-id*="link"]:not([data-id*="linkMain"])').length; i++) {
                        // Catch the letter index of the navigation item.
                        var headerNavItemLetterIndex = $('a[data-id*="link"]:not([data-id*="linkMain"])')[i].dataset.id.replace('link', '')

                        // Create a new drop menu for every navigation item.
                        $('#headerNavExtraDropdown')[0].innerHTML += (
                            '<li data-ref="link' + headerNavItemLetterIndex + '">' +
                                'Link ' + headerNavItemLetterIndex +
                            ' </li>'
                        )
                    }
            }

            // Change navigation based on these pages.
                // Landing Page
                if (document.pageType == "Landing Page") {
                    // Links A - D
                        // src
                        for (i = 0; i < $("#headerNav a[data-id]").length; i++)
                            $("#headerNav a")[i].setAttribute(
                                "href", $("#headerNav a")[i].getAttribute("href").replace("../", "")
                            )

                    // Link Main
                        // href
                        $("#headerNav .main")[0].removeAttribute("href")
                        // src
                        $("#headerNav .main #logo")[0].setAttribute(
                            "src", $("#headerNav .main #logo")[0].getAttribute("src").replace("../", "")
                        )

                    // Javascript Stylesheet
                        // src
                        raleway = raleway.replace("../", "")
                }
                // Profile Page
                else if (document.pageType == "Profile Page") {
                    // Links A - D
                        // src
                        for (i = 0; i < $("#headerNav a[data-id]").length; i++)
                            $("#headerNav a")[i].setAttribute(
                                "href", "../" + $("#headerNav a")[i].getAttribute("href")
                            )

                    // Link Main
                        // href
                        $("#headerNav .main")[0].setAttribute(
                            "href", $("#headerNav .main")[0].getAttribute("href")
                        )
                        // src
                        $("#headerNav .main #logo")[0].setAttribute(
                            "src", "../../" + $("#headerNav .main #logo")[0].getAttribute("src").replace("../", "")
                        )

                    // Javascript Stylesheet
                        // src
                        raleway = "../../" + raleway
                }
                // Profile Resource Page
                else if (document.pageType == "Profile Resource Page") {
                    // Links A - D
                        // src
                        for (i = 0; i < $("#headerNav a[data-id]").length; i++)
                            $("#headerNav a")[i].setAttribute(
                                "href", "../../" + $("#headerNav a")[i].getAttribute("href")
                            )

                    // Link Main
                        // href
                        $("#headerNav .main")[0].setAttribute(
                            "href", "../" + $("#headerNav .main")[0].getAttribute("href")
                        )
                        // src
                        $("#headerNav .main #logo")[0].setAttribute(
                            "src", "../../../" + $("#headerNav .main #logo")[0].getAttribute("src").replace("../", "")
                        )

                    // Javascript Stylesheet
                        // src
                        raleway = "../../../" + raleway
                }
                
            // Definitions
                // Header Navigation
                var headerNav = $("#headerNav")[0],
                // Header Navigation Components
                    headerNavItems = $("#headerNav > *"),
                // Header Navigation Items
                    headerNavItemsList = $("#headerNav > *:not(.main)")

            // Index all header dropdown items
            for (i = 0; i < headerNavItemsList.length; i++) {
                // Add the events
                headerNavItemsList[i].addEventListener("mouseleave", hideDropdown)
                headerNavItemsList[i].addEventListener("mouseover", showDropdown)
            }

            /* Toggle Dropdowns Visibility
                    --- NOTE ---
                        The delay is to allow for easing visual transition.
            */
            function showDropdown() {
                var navItem = this

                setTimeout(function() {
                    $("#headerNavExtraDropdown > *[data-ref='" + navItem.dataset.id + "']")[0].style.opacity = "1"
                    $("#headerNavExtraDropdown > *[data-ref='" + navItem.dataset.id + "']")[0].style.pointerEvents = "all"
                }, 250)
            }
            function hideDropdown() {
                var navItem = this

                setTimeout(function() {
                    $("#headerNavExtraDropdown > *[data-ref='" + navItem.dataset.id + "']")[0].style.opacity = "0"
                    $("#headerNavExtraDropdown > *[data-ref='" + navItem.dataset.id + "']")[0].style.pointerEvents = "none"
                }, 250)
        }

        /* Dependency JS
                --- NOTE ---
                    Minified sections of plug-in codes.
        */
        setTimeout(function() {
            // Lapys JS
            var txt = document.querySelectorAll("[data-kbd]"), txtBaselineCounter = [0], txtCounter = [0], txtLength = [0], txtHTML = [""], txtHTMLTxt = [[""]]; setTimeout(function() { for (i = 0; i < txt.length; i++) { txtHTML[i] = txt[i].innerHTML; txtHTMLTxt[i] = [ (txt[i].getAttribute("data-txt").slice( 0, parseInt(txt[i].getAttribute("data-txt").indexOf("_"))) ).replace(/</g, "&lt;").replace(/>/g, "&gt;").toString(), (txt[i].getAttribute("data-txt").slice( parseInt(txt[i].getAttribute("data-txt").indexOf("_") + 1), (parseInt(txt[i].getAttribute("data-txt").lastIndexOf("_")))) ), ( (txt[i].getAttribute("data-txt").slice(parseInt(txt[i].getAttribute("data-txt").lastIndexOf("_") + 1), -1)).toString() + (txt[i].getAttribute("data-txt").slice(-1)).toString() ).replace(/</g, "&lt;").replace(/>/g, "&gt;").toString() ]; txtLength[i] = txtHTML[i].length; txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i]); txtCounter[i] = 0 } }, 2); function txtForwardSlice() { txt[i].innerHTML = txt[i].innerHTML.slice(1); } function txtReverseSlice() { txt[i].innerHTML = txt[i].innerHTML.slice(0, -1); } setInterval(function() { for (i = 0; i < txt.length; i++) { txtCounter[i] += 0.005; txt[i].innerHTML = txt[i].innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;").toString(); if (txtCounter[i] >= txtBaselineCounter[i]) { txtCounter[i] = 0; if (txt[i].getAttribute("data-kbd") == "rev" || txt[i].getAttribute("data-kbd") == "reverse") { txtReverseSlice() } else { txtForwardSlice() } } if (txt[i].innerHTML == "" && !txt[i].hasAttribute("data-txt1-complete") && !txt[i].hasAttribute("data-txt2-complete") && !txt[i].hasAttribute("data-txt3-complete")) { txt[i].setAttribute("data-txt1-complete", ""); txt[i].innerHTML = txtHTMLTxt[i][0]; txtLength[i] = txtHTMLTxt[i][0].length; txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i]); } if (txt[i].innerHTML == "" && txt[i].hasAttribute("data-txt1-complete")) { txt[i].innerHTML = txt[i].innerHTML.replace(/ /g, ""); txt[i].removeAttribute("data-txt1-complete"); txt[i].setAttribute("data-txt2-complete", ""); txt[i].innerHTML = txtHTMLTxt[i][1]; txtLength[i] = txtHTMLTxt[i][1].length; txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i]); } if (txt[i].innerHTML == "" && txt[i].hasAttribute("data-txt2-complete")) { txt[i].innerHTML = txt[i].innerHTML.replace(/ /g, ""); txt[i].removeAttribute("data-txt2-complete"); txt[i].setAttribute("data-txt3-complete", ""); txt[i].innerHTML = txtHTMLTxt[i][2]; txtLength[i] = txtHTMLTxt[i][2].length; txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i]); } if (txt[i].innerHTML == "" && txt[i].hasAttribute("data-txt3-complete")) { txt[i].innerHTML = txt[i].innerHTML.replace(/ /g, ""); txt[i].removeAttribute("data-txt3-complete"); txt[i].innerHTML = txtHTML[i]; txtLength[i] = txtHTML[i].length; txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i]); } } }, 1); var tooltip = document.createElement("div"), tooltipElements = document.querySelectorAll("[data-title]"); document.body.appendChild(tooltip); tooltip.insertAdjacentHTML("beforebegin", " "); tooltip.setAttribute("id", "tooltip"); document.body.addEventListener("click", hideTooltip); document.body.addEventListener("keydown", hideTooltip); document.body.addEventListener("keypress", hideTooltip); document.body.addEventListener("mousedown", hideTooltip); function hideTooltip() { setTimeout(function() { tooltip.style.display = "none" }, 500) } for (i = 0; i < tooltipElements.length; i++) { tooltipElements[i].onmouseover = function() { tooltip.innerHTML = this.getAttribute("data-title"); tooltip.style.display = "inline"; tooltip.style.opacity = "1"; tooltip.style.transform = "translate(" + (event.clientX + 10) + "px, " + (event.clientY + 10) + "px" + ")"; if ((event.clientX + tooltip.clientWidth) >= document.body.clientWidth) tooltip.style.transform = "translate(" + ((event.clientX - tooltip.clientWidth) + 10) + "px, " + (event.clientY + 10) + "px" + ")"; if (this.hasAttribute("required") || this.required) { this.removeAttribute("required"); this.setAttribute("title", ""); this.tooltipBefore = this.getAttribute("title"); if (!this.tooltipBefore || this.tooltipBefore == "") this.tooltipBefore == false; this.onceRequired = true } if (this.hasAttribute("title")) this.removeAttribute("title"); if (this.getAttribute("data-title").lastIndexOf("_hidden") >= 0) tooltip.style.opacity = "0" }; tooltipElements[i].onmouseleave = function() { tooltip.style.opacity = "0"; if (this.onceRequired) { this.setAttribute("required", ""); if (this.tooltipBefore) this.setAttribute("title", this.tooltipBefore); this.onceRequired = false } } }
        }, 100)
    })
}, 1)