    // Implement the header within the carousel as captions
    var carouselCaptionHeaders = document.querySelectorAll("*[data-caption]")

    for (i = 0; i < carouselCaptionHeaders.length; i++) {
        carouselCaptionHeaders[i].innerHTML = (
            "<h1 class='title' data-interval='5' data-kbd='rev' data-txt=' Hire the Best Hands           _ Hire Trusted Workers           _ Save as you Work           '>"+
                " Hire at Fixed Prices           " +
            "</h1>" +

            "<nav class='buttons'>" +
                "<a class='quinsa-btn'> Hire </a>" +
                "<a class='quinsa-btn'> Find Work </a>" +
            "</nav>"
        )
    }