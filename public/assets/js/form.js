/* Form Toggle JS */
var toggle = document.getElementById("toggle"),
    indexer = "Login"

var vAccount = document.getElementById("toggle-vAccount")

    toggle.onclick = function() {
        if (indexer == "SignIn") {
            for (i = 0; i < document.getElementsByClassName("form").length; i++) 
                document.getElementsByClassName("form")[i].style.display = "none"

            document.getElementById("title").innerHTML = " Sign In "

            document.getElementById("signIn").style.display = "block"

            this.innerHTML = " Already have an account? Login <a id='toggle'>here</a>. "

            indexer = "Login"
        }
        else if (indexer == "Login") {
            for (i = 0; i < document.getElementsByClassName("form").length; i++) 
                document.getElementsByClassName("form")[i].style.display = "none"

            document.getElementById("title").innerHTML = " Login "

            document.getElementById("login").style.display = "block"

            this.innerHTML = " Don&rsquo;t already have an account? Sign up <a id='toggle'>here</a>. "

            indexer = "SignIn"
        }
    }

    vAccount.onclick = function() {
        for (i = 0; i < document.getElementsByClassName("form").length; i++) 
            document.getElementsByClassName("form")[i].style.display = "none"

        document.getElementById("title").innerHTML = " Virtual Account "

        document.getElementById("vAccount").style.display = "block"
    }