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
    <link href="../../../assets/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css">
    <!-- Base CSS -->
    <link href="../../../assets/css/surejobs.css" media="all" rel="stylesheet" type="text/css">
    <!-- Document CSS -->
    <link href="../../../assets/css/invoice.css" media="all" rel="stylesheet" type="text/css">

    <!-- Document Title -->
    <title> Sure Jobs | Invoice </title>
</head>

<body>
    <main>
        <!-- User Section -->
        <article class="container row" id="invoice">
            <!-- Header -->
            <h1 id="header"> Invoice </h1>

            <!-- Invoice -->
            <div class="invoice">
                <!-- Client Name -->
                <div class="header" data-id="clientName0"> Client Name </div>

                <!-- Item -->
                <input class="form-control primary-input" placeholder=" Item " type="text">
                <!-- Amount -->
                <input class="form-control secondary-input" placeholder=" Amount (₦) " type="text">

                <!-- Add -->
                    <!-- Item -->
                    <button class="btn btn-circle btn-default btn-item-add btn-success" type="button">
                        <span class="glyphicon glyphicon-plus"> </span>
                    </button>
                    <!-- Amount -->
                    <button class="btn btn-circle btn-default btn-amount-add btn-success" type="button">
                        <span class="glyphicon glyphicon-plus"> </span>
                    </button>

                <!-- Date -->
                <input class="form-control primary-input" placeholder=" Date " type="text">
                <!-- Due Date -->
                <input class="form-control secondary-input" placeholder=" Due Date " type="text">

                <!-- Message -->
                <textarea class="form-control message" placeholder="    Message "></textarea>
            </div>
        </article>
    </main>

    <!-- Tether IO Script (Dependency Script) -->
    <script src="../../../assets/js/tether.js" type="text/javascript"> </script>
    <!-- jQuery Script (Sub-Dependency Script) -->
    <script src="../../../assets/js/jquery-3.1.1.min.js" type="text/javascript"> </script>
    <!-- Bootstrap Script -->
    <script src="../../../assets/js/bootstrap.js" type="text/javascript"> </script>
    <!-- Base Script -->
    <script src="../../../assets/js/surejobs.js" type="text/javascript"> </script>
    <!-- Document Script -->
    <script src="../../../assets/js/invoice.js" type="text/javascript"> </script>
</body>

</html>