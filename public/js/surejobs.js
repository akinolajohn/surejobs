/* Strict Mode JS */
"strict mode";

/* Global Object JS */
window.name = document.getElementsByTagName("title")[0].textContent

/* Document JS */
document.dir = "ltr"
    
/* HTML Elements JS */
    // <html> Properties
    document.getElementsByTagName("html")[0].lang = "en"
    document.getElementsByTagName("html")[0].translate = true
    document.getElementsByTagName("html")[0].version = "5.2"
    
    // Javascript Stylesheet
    var surejobsFont = "url('../assets/fonts/ASansrounded.ttf')"

    setTimeout(function() {
        document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",
            "<style id='surejobsCSS' type='text/css'>" +
                "/* CSS At-Rules */" +
                "@font-face {" +
                    "font-family: SureJobsFontRounded;" +
                    "src: " + surejobsFont +
                "}" +
            "</style>"
        )
    }, 1)

    // <main> Properties
    if (window.screen.height > window.screen.width)
        document.getElementsByTagName("main")[0].style.minHeight = (window.screen.height - window.screen.width) + "px"
    else
        document.getElementsByTagName("main")[0].style.minHeight = ((window.screen.height / (window.screen.width / window.screen.height)) / 2) + "px"

/* Navigation JS */
    // Create the navigation panel to clone it
    if (document.getElementById("headerNav") == undefined &&
        document.getElementById("headerNavExtraDropdown") == undefined &&
        document.getElementById("footerCopy") == undefined) {
        // Create the Header Navigation Panel
        document.getElementsByTagName("main")[0].insertAdjacentHTML("afterbegin",
            // Header Navigation Panel
            "<!-- Header Navigation Panel (Navigation) -->" +
                "<!-- Navigation Panel -->" +
                "<nav id='headerNav'>" +
                    // Link Main
                    "<a class='main' data-id='linkMain' data-title=' Home ' href='../index.php'>" +
                        "<img draggable='false' id='logo' src='../assets/img/png/logo/Sure Jobs (Medium).png'>" +
                    "</a>" +
                    // Link A - E
                    "<a data-id='linkA' href='../pages/hire.php'> Hire Artisans </a>" +
                    "<a data-id='linkB' href='../pages/work.php'> Find Work </a>" +
                    "<a data-id='linkC' href='../pages/about-us.php'> How it Works </a>" +
                    "<a data-id='linkD' href='../forms/form.php'> Sign In or Join </a>" +
                    "<a data-id='linkE' href='../../forms/form.php'> Welcome" +
                        // User Name
                        "<span class='user-name'> << User >> </span>" +
                        // User Profile Picture
                        "<div class='user-pic'> </div>" +
                    "</a>" +
                "</nav>" +

                // Header Navigation Dropdown
                "<!-- Navigation Dropdowns -->" +
                "<ul id='headerNavExtraDropdown'>" +
                    "<li data-ref='linkA'>" +
                        " Link A " +
                    "</li>" +
                    "<li data-ref='linkB'>" +
                        " Link B " +
                    "</li>" +
                    "<li data-ref='linkC'>" +
                        " Link C " +
                    "</li>" +
                    "<li data-ref='linkD'>" +
                        " Link D " +
                    "</li>" +
                    "<li data-ref='linkE'>" +
                        " Link E " +
                    "</li>" +
                "</ul>"
        )

        // Create the Footer Panel
        document.getElementsByTagName("main")[0].insertAdjacentHTML("afterend",
            "<footer id='footerCopy'>" +
                "<div class='row'>" +
                    // Main Content
                    "<div style='display: flex; justify-content: center'>" +
                        // Footer Links
                        "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-content' id='links'>" +
                            "<a> Our Mobile App </a>" +
                            "<a> Social Media </a>" +
                            "<a> Terms of Use </a>" +
                            "<a> Privacy Policy </a>" +
                        "</div>" +

                        // Footer Logos
                        "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 footer-content' id='logos'>" +
                            // Facebook
                            "<a class='bg' id='facebook' href='https://www.facebook.com/Surejobs-437849623238544/' style='background-image: url(../assets/img/png/logo/Facebook.png)' target='_blank'> </a>" +
                            // Twitter
                            "<a class='bg' id='twitter' href='#' style='background-image: url(../assets/img/png/logo/Twitter.png)' target='_blank'> </a>" +
                            // Instagram
                            "<a class='bg' id='instagram' href='https://www.instagram.com/_surejobs/?hl=en' style='background-image: url(../assets/img/png/logo/Instagram.png)' target='_blank'> </a>" +
                            // Google+
                            "<a class='bg' id='googlePlus' href='#' style='background-image: url(../assets/img/png/logo/Google+.png)' target='_blank'> </a>" +
                        "</div>" +
                    "</div>" +
                    // Copyright
                    "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>" +
                        "<p> &copy; Sure Jobs (2017 - " + new Date().getFullYear() + "). </p>" +
                    "</div>" +
                "</div>" +
            "</footer>")
    }

    // Change navigation based on these indicators
        // Landing Page
        if (location.href.indexOf("index.") >= 0 ||
            location.href.lastIndexOf("/") == 0) {
            // Link A - D
            for (i = 0; i < document.querySelectorAll("#headerNav a[data-id]").length; i++) {
                document.querySelectorAll("#headerNav a")[i].setAttribute(
                    "href",
                    document.querySelectorAll("#headerNav a")[i].getAttribute("href").replace("../", "")
                )
            }
            // Link Main
            document.querySelectorAll("#headerNav .main")[0].removeAttribute("href")
            document.querySelectorAll("#headerNav .main #logo")[0].setAttribute("src", "assets/img/png/logo/Sure Jobs (Medium).png")

            // Javascript Stylesheet
            surejobsFont = surejobsFont.replace("../", "")

            // Footer Logos
            document.querySelectorAll("#logos #facebook")[0].style.backgroundImage = "url('assets/img/png/logo/Facebook.png')"
            document.querySelectorAll("#logos #twitter")[0].style.backgroundImage = "url('assets/img/png/logo/Twitter.png')"
            document.querySelectorAll("#logos #instagram")[0].style.backgroundImage = "url('assets/img/png/logo/Instagram.png')"
            document.querySelectorAll("#logos #googlePlus")[0].style.backgroundImage = "url('assets/img/png/logo/Google+.png')"
        }
        // User Page
        if (location.href.indexOf("/users/") >= 0) {
            // Link A - D
            for (i = 0; i < document.querySelectorAll("#headerNav a[data-id]").length; i++) {
                document.querySelectorAll("#headerNav a")[i].setAttribute(
                    "href",
                    "../" + document.querySelectorAll("#headerNav a")[i].getAttribute("href")
                )
            }

            // Link Main
            document.querySelectorAll("#headerNav .main")[0].setAttribute(
                "href",
                "../" + document.querySelectorAll("#headerNav .main")[0].getAttribute("href")
            )
            document.querySelectorAll("#headerNav .main #logo")[0].setAttribute("src", "../../assets/img/png/logo/Sure Jobs (Medium).png")
            
            // Javascript Stylesheet
            surejobsFont = "url('../../assets/fonts/ASansrounded.ttf')"

            // Footer Logos
            document.querySelectorAll("#logos #facebook")[0].style.backgroundImage = "url('../../assets/img/png/logo/Facebook.png')"
            document.querySelectorAll("#logos #twitter")[0].style.backgroundImage = "url('../../assets/img/png/logo/Twitter.png')"
            document.querySelectorAll("#logos #instagram")[0].style.backgroundImage = "url('../../assets/img/png/logo/Instagram.png')"
            document.querySelectorAll("#logos #googlePlus")[0].style.backgroundImage = "url('../../assets/img/png/logo/Google+.png')"
        }

    // Definitions
        // Header Navigation
        var headerNav = document.getElementById("headerNav")
        // Header Navigation Components
        var headerNavComponents = {
            items : document.querySelectorAll("#headerNav > *")
        }
        // Header Navigation Extras
        var headerNavExtra = {
            /* Dropdown
                --- UPDATE REQUIRED ---
                    The navigation dropdown must be decided upon.        
            */
            dropdown : document.getElementById("headerNavExtraDropdown")
        }
        // Header Navigation Definitions (Extra)
            // Items
            headerNavComponents.items.list = document.querySelectorAll("#headerNav > *:not(.main)")
            headerNavComponents.items.main = document.querySelectorAll("#headerNav > *.main")[0]

    // Index all dropdown items
    for (i = 0; i < headerNavComponents.items.list.length; i++) {
        // Add the events
        headerNavComponents.items.list[i].addEventListener("mouseleave", hideDropdown)
        headerNavComponents.items.list[i].addEventListener("mouseover", showDropdown)
    }

    /* Toggle Dropdowns Visibility
            --- NOTE ---
                The delay is to allow for easing transition.
    */
    function showDropdown() {
        var navItem = this

        setTimeout(function() {
            document.querySelectorAll("#headerNavExtraDropdown > *[data-ref='" + navItem.getAttribute("data-id") + "']")[0].style.opacity = "1"
            document.querySelectorAll("#headerNavExtraDropdown > *[data-ref='" + navItem.getAttribute("data-id") + "']")[0].style.pointerEvents = "all"
        }, 250)
    }
    function hideDropdown() {
        var navItem = this

        setTimeout(function() {
            document.querySelectorAll("#headerNavExtraDropdown > *[data-ref='" + navItem.getAttribute("data-id") + "']")[0].style.opacity = "0"
            document.querySelectorAll("#headerNavExtraDropdown > *[data-ref='" + navItem.getAttribute("data-id") + "']")[0].style.pointerEvents = "none"
        }, 250)
}

/* Dependency JS
        --- NOTE ---
            Pieces of code freely given to use.
*/
    // Lapys JS
        setTimeout(function() {
            var txt = document.querySelectorAll("[data-kbd]"),
                txtBaselineCounter = [0],
                txtCounter = [0],
                txtLength = [0],
                txtHTML = [""],
                txtHTMLTxt = [[""]]

            setTimeout(function() {
                for (i = 0; i < txt.length; i++) {
                    txtHTML[i] = txt[i].innerHTML
                    
                    txtHTMLTxt[i] = [
                        (txt[i].getAttribute("data-txt").slice(
                            0,
                            parseInt(txt[i].getAttribute("data-txt").indexOf("_")))
                        ).replace(/</g, "&lt;").replace(/>/g, "&gt;").toString(),
                        (txt[i].getAttribute("data-txt").slice(
                            parseInt(txt[i].getAttribute("data-txt").indexOf("_") + 1),
                            (parseInt(txt[i].getAttribute("data-txt").lastIndexOf("_"))))
                        ),
                        (
                            (txt[i].getAttribute("data-txt").slice(parseInt(txt[i].getAttribute("data-txt").lastIndexOf("_") + 1), -1)).toString() +
                            (txt[i].getAttribute("data-txt").slice(-1)).toString()
                        ).replace(/</g, "&lt;").replace(/>/g, "&gt;").toString()
                    ]
                    
                    txtLength[i] = txtHTML[i].length
                    
                    txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i])
                    
                    txtCounter[i] = 0
                }
            }, 2)

            function txtForwardSlice() {
                txt[i].innerHTML = txt[i].innerHTML.slice(1)
            }
            function txtReverseSlice() {
                txt[i].innerHTML = txt[i].innerHTML.slice(0, -1)
            }

            setInterval(function() {
                for (i = 0; i < txt.length; i++) {
                    txtCounter[i] += 0.005
                    
                    txt[i].innerHTML = txt[i].innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;").toString()
                    
                    if (txtCounter[i] >= txtBaselineCounter[i]) {
                            txtCounter[i] = 0

                            if (txt[i].getAttribute("data-kbd") == "rev" ||
                                txt[i].getAttribute("data-kbd") == "reverse")
                                txtReverseSlice()
                            else
                                txtForwardSlice()
                    }

                    if (txt[i].innerHTML == "" &&
                        !txt[i].hasAttribute("data-txt1-complete") &&
                        !txt[i].hasAttribute("data-txt2-complete") &&
                        !txt[i].hasAttribute("data-txt3-complete")) {
                            txt[i].setAttribute("data-txt1-complete", "")
                    
                            txt[i].innerHTML = txtHTMLTxt[i][0]
                    
                            txtLength[i] = txtHTMLTxt[i][0].length
                            txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i])
                    }

                    if (txt[i].innerHTML == "" &&
                        txt[i].hasAttribute("data-txt1-complete")) {
                            txt[i].innerHTML = txt[i].innerHTML.replace(/ /g, "")

                            txt[i].removeAttribute("data-txt1-complete")
                            txt[i].setAttribute("data-txt2-complete", "")
                    
                            txt[i].innerHTML = txtHTMLTxt[i][1]
                    
                            txtLength[i] = txtHTMLTxt[i][1].length
                            txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i])
                    }
                    
                    if (txt[i].innerHTML == "" &&
                        txt[i].hasAttribute("data-txt2-complete")) {
                            txt[i].innerHTML = txt[i].innerHTML.replace(/ /g, "")

                            txt[i].removeAttribute("data-txt2-complete")
                            txt[i].setAttribute("data-txt3-complete", "")
                    
                            txt[i].innerHTML = txtHTMLTxt[i][2]
                    
                            txtLength[i] = txtHTMLTxt[i][2].length
                            txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i])
                    }

                    if (txt[i].innerHTML == "" &&
                        txt[i].hasAttribute("data-txt3-complete")) {
                            txt[i].innerHTML = txt[i].innerHTML.replace(/ /g, "")

                            txt[i].removeAttribute("data-txt3-complete")
            
                            txt[i].innerHTML = txtHTML[i]
                
                            txtLength[i] = txtHTML[i].length
                            txtBaselineCounter[i] = parseFloat(txt[i].getAttribute("data-interval") / txtLength[i])
                    }
                }
            }, 1)

            var tooltip = document.createElement("div"),
                tooltipElements = document.querySelectorAll("[data-title]")

                document.getElementsByTagName("body")[0].appendChild(tooltip)
                
                tooltip.insertAdjacentHTML("beforebegin", "<!-- Tooltip -->")
                tooltip.setAttribute("id", "tooltip")

                document.getElementsByTagName("body")[0].addEventListener("click", hideTooltip)
                document.getElementsByTagName("body")[0].addEventListener("keydown", hideTooltip)
                document.getElementsByTagName("body")[0].addEventListener("keypress", hideTooltip)
                function hideTooltip() {
                    tooltip.style.display = "none"
                }
                
                for (i = 0; i < tooltipElements.length; i++) {
                    tooltipElements[i].onmouseover = function() {
                        tooltip.innerHTML = this.getAttribute("data-title")

                        tooltip.style.display = "inline"
                        tooltip.style.opacity = "1"

                        tooltip.style.transform = "translate(" +
                            event.clientX + "px, " +
                            event.clientY + "px" +
                        ")"

                        if (this.hasAttribute("required") ||
                            this.required) {
                            this.removeAttribute("required")
                            this.setAttribute("title", "")

                            this.tooltipBefore = this.getAttribute("title")
                                if (!this.tooltipBefore || this.tooltipBefore == "")
                                    this.tooltipBefore == false

                            this.onceRequired = true
                        }

                        if (this.hasAttribute("title"))
                            this.removeAttribute("title")

                        if (this.getAttribute("data-title").lastIndexOf("_hidden") >= 0)
                            tooltip.style.opacity = "0"
                    }

                    tooltipElements[i].onmouseleave = function() {
                        tooltip.style.opacity = "0"

                        if (this.onceRequired) {
                            this.setAttribute("required", "")
                                
                            if (this.tooltipBefore)
                                this.setAttribute("title", this.tooltipBefore)
                                
                            this.onceRequired = false
                        }
                    }
                }
        }, 100)