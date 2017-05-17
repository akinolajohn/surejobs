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

        /* Dependency JS
                --- NOTE ---
                    Minified sections of plug-in codes.
        */
        setTimeout(function() {
            // Lapys JS
            var tooltip=document.createElement("div"),tooltipElements=document.querySelectorAll("[data-title]");document.body.appendChild(tooltip);tooltip.insertAdjacentHTML("beforebegin","<!-- Tooltip -->");tooltip.setAttribute("id","tooltip");document.body.addEventListener("click",hideTooltip);document.body.addEventListener("keydown",hideTooltip);document.body.addEventListener("keypress",hideTooltip);document.body.addEventListener("mousedown",hideTooltip);function hideTooltip(){setTimeout(function(){tooltip.style.display = "none"},500)};for(i=0;i<tooltipElements.length;i++){tooltipElements[i].onmouseover=function(){tooltip.innerHTML=this.getAttribute("data-title");tooltip.style.display="inline";tooltip.style.opacity="1";tooltip.style.transform="translate("+(event.clientX+10)+"px, "+(event.clientY + 10)+"px)";if((event.clientX+tooltip.clientWidth)>=document.body.clientWidth)tooltip.style.transform="translate("+((event.clientX-tooltip.clientWidth)+10)+"px, "+(event.clientY+10)+"px)";if(this.hasAttribute("required")||this.required){this.removeAttribute("required");this.setAttribute("title", "");this.tooltipBefore=this.getAttribute("title");if(!this.tooltipBefore||this.tooltipBefore=="")this.tooltipBefore == false;this.onceRequired = true};if(this.hasAttribute("title"))this.removeAttribute("title");if(this.getAttribute("data-title").lastIndexOf("_hidden")>=0){tooltip.innerHTML=tooltip.innerHTML.replace(/_hidden([^_hidden]*)$/,"$1");tooltip.style.opacity = "0"};if (this.getAttribute("data-title").lastIndexOf("_bottom")>=0){tooltip.innerHTML=tooltip.innerHTML.replace(/_bottom([^_bottom]*)$/,"$1");tooltip.style.transform="translate("+(event.clientX+10)+"px, "+((this.getBoundingClientRect().top+tooltip.clientHeight)-10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_bottom")>=0&&this.getAttribute("data-title").lastIndexOf("_left")>=0){tooltip.innerHTML=tooltip.innerHTML.replace("_bottom","").replace("_left","");tooltip.style.transform="translate("+((this.getBoundingClientRect().left-tooltip.clientWidth)-10)+"px, "+((this.getBoundingClientRect().top+tooltip.clientHeight)-10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_bottom")>=0&&this.getAttribute("data-title").lastIndexOf("_right")>=0){tooltip.innerHTML=tooltip.innerHTML.replace("_bottom","").replace("_right","");tooltip.style.transform="translate("+((this.getBoundingClientRect().left+tooltip.clientWidth)-10)+"px, "+((this.getBoundingClientRect().top+tooltip.clientHeight)-10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_center")>=0){tooltip.innerHTML=tooltip.innerHTML.replace(/_center([^_center]*)$/,"$1");tooltip.style.transform="translate("+(this.getBoundingClientRect().left-(tooltip.clientWidth/2))+"px, "+(this.getBoundingClientRect().top-(tooltip.clientHeight/2))+"px)"};if(this.getAttribute("data-title").lastIndexOf("_bottom")>=0&&this.getAttribute("data-title").lastIndexOf("_center")>=0){tooltip.innerHTML=tooltip.innerHTML.replace("_bottom", "").replace("_center","");tooltip.style.transform="translate("+(this.getBoundingClientRect().left-(tooltip.clientWidth/2))+"px, "+((this.getBoundingClientRect().top+tooltip.clientHeight)+10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_left")>=0){tooltip.innerHTML=tooltip.innerHTML.replace(/_left([^_left]*)$/,"$1");tooltip.style.transform="translate("+((this.getBoundingClientRect().left-tooltip.clientWidth)-10)+"px, "+(event.clientY+10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_right")>=0){tooltip.innerHTML=tooltip.innerHTML.replace(/_right([^_right]*)$/,"$1");tooltip.style.transform="translate("+((this.getBoundingClientRect().left+this.clientWidth)+10)+"px, "+(event.clientY+10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_top")>=0){tooltip.innerHTML=tooltip.innerHTML.replace(/_top([^_top]*)$/,"$1");tooltip.style.transform="translate("+(event.clientX+10)+"px, "+((this.getBoundingClientRect().top-tooltip.clientHeight)-10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_left") >= 0&&this.getAttribute("data-title").lastIndexOf("_top")>=0){tooltip.innerHTML=tooltip.innerHTML.replace("_left","").replace("_top","");tooltip.style.transform="translate("+((this.getBoundingClientRect().left-tooltip.clientWidth)-10)+"px, "+((this.getBoundingClientRect().top-tooltip.clientHeight)-10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_top") >= 0&&this.getAttribute("data-title").lastIndexOf("_center")>=0){tooltip.innerHTML=tooltip.innerHTML.replace("_top","").replace("_center","");tooltip.style.transform="translate("+(this.getBoundingClientRect().left - (tooltip.clientWidth / 2))+"px, "+((this.getBoundingClientRect().top-tooltip.clientHeight)-10)+"px)"};if(this.getAttribute("data-title").lastIndexOf("_right")>=0&&this.getAttribute("data-title").lastIndexOf("_top")>=0){tooltip.innerHTML=tooltip.innerHTML.replace("_right","").replace("_top","");tooltip.style.transform="translate("+((this.getBoundingClientRect().left+tooltip.clientWidth)-10)+"px, "+((this.getBoundingClientRect().top + tooltip.clientHeight) - 10)+"px)"}};tooltipElements[i].onmouseleave=function(){tooltip.style.opacity = "0";if(this.onceRequired){this.setAttribute("required","");if(this.tooltipBefore)this.setAttribute("title",this.tooltipBefore);this.onceRequired = false}}};
        }, 100)
    })
}, 1)