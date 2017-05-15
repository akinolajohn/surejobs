<!DOCTYPE html>
<html>
<head>
    <!-- Document Character Encoding Metadata -->
    <meta charset="UTF-8">
    <!-- Document http-equiv Compatibility MetaData -->
    <meta content="chrome=1, IE=Edge" http-equiv="X-UA-Compatible">
    <!-- Document Viewport MetaData -->
    <meta content="height=device-height, initial-scale=1.0, maximum-scale=2.0, minimal-ui, minimum-scale=0.1, user-scalable=no, width=device-width" target-densitydpi="92dpi" name="viewport">
    <!-- Miscellaneous Metadata -->
    <meta content="QUINSA | The Lapys Dev Team" name="author">

    <!-- Bootstrap CSS -->
    <link href="../assets/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css">
    <!-- Base CSS -->
    <link href="../assets/css/surejobs.css" media="all" rel="stylesheet" type="text/css">
    <!-- Document CSS -->
    <link href="../assets/css/form.css" media="all" rel="stylesheet" type="text/css">

    <!-- Document Title -->
    <title> Sure Jobs | Register </title>
</head>

<body>
    <main>
        <!-- Forms -->
            <!-- Title
                        --- NOTE ---
                            Dynamically set via Javascript.
            -->
            <h1 id="title"> Sign In </h1>

            <!-- Sign In -->
            <section class="form" id="signIn">
                <form>
                    <!-- Name -->
                    <input class="collapsed" data-title="Type in your name" placeholder="  First Name" required style="width: 35%" type="text">
                    <input class="collapsed" data-title="Type in your other name" placeholder="  Middle Name" style="width: 33%" type="text">
                    <input class="collapsed" data-title="Type in your surname" placeholder="  Last Name" required style="width: 30%" type="text">

                    <!-- Electronic Mail -->
                    <input data-title="Type in your email address." placeholder="  E-Mail" required type="email">
                    
                    <!-- Password -->
                    <input data-title="Type in your password" placeholder="  Password" required type="password">
                    
                    <!-- Confirm Password -->
                    <input data-title="Secure your password" placeholder="  Confirm Password" required type="password">
                    
                    <!-- Day Month Year -->
                    <input class="collapsed" placeholder="  Day" required style="width: 30%" type="text">
                    <input class="collapsed" placeholder="  Month" required style="width: 35%" type="text">
                    <input class="collapsed" placeholder="  Year" required style="width: 33%" type="text">
                    
                    <!-- I Accept -->
                    <input data-title="Check to agree" required type="checkbox">
                    <span> I Accept the Terms and Conditions. </span>
                    
                    <!-- Register -->
                    <input class="quinsa-btn" type="submit">
                </form>
            </section>
            
            <!-- Login -->
            <section class="form" id="login">
                <form>
                    <!-- Electronic Mail -->
                    <input placeholder="  E-Mail" required type="email">
                    
                    <!-- Password -->
                    <input placeholder="  Password" required type="password">
                    
                    <!-- Register -->
                    <input class="quinsa-btn" type="submit">
                </form>
            </section>

            <!-- Toggle -->
            <span style="float: right"> <a id="toggle"> Already have an account? Login here.</a> </span>
    </main>

    <!-- Tether IO Script (Dependency Script) -->
    <script src="../assets/js/tether.js" type="text/javascript"> </script>
    <!-- jQuery Script (Sub-Dependency Script) -->
    <script src="../assets/js/jquery-3.1.1.min.js" type="text/javascript"> </script>
    <!-- Bootstrap Script -->
    <script src="../assets/js/bootstrap.js" type="text/javascript"> </script>
    <!-- Base Script -->
    <script src="../assets/js/surejobs.js" type="text/javascript"> </script>
    <!-- Document Script -->
    <script src="../assets/js/form.js" type="text/javascript"> </script>
</body>

</html>
