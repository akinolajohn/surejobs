/* Document JS */
    document.pageType = "Landing Page"

/* Carousel JS */
    // Set all carousel's cycle intervals for 3 seconds
        $(".carousel").carousel({
            interval : 5000
        })
    // Automate all carousel cycles
        $(".carousel").carousel("cycle")

    // Implement the header within the carousel as captions
    for (i = 0; i < $("[data-caption]").length; i++) {
        $("[data-caption]")[i].innerHTML = (
            // Dynamic Header
            "<h1 id='title'" +
                "data-interval='5'" +
                "data-kbd='rev'" +
                // The white-space for each text determines the duration of pause before the text begins to alternate.
                "data-txt=' Hire the Best Hands           _ Hire Trusted Workers           _ Save as you Work           '>" +
                " Hire at Fixed Prices           " +
            "</h1>" +

            // Hire & Find Work Buttons
            "<nav id='buttons'>" +
                "<a class='quinsa-btn'> Hire </a>" +
                "<a class='quinsa-btn'> Find Work </a>" +
            "</nav>"
        )
    }