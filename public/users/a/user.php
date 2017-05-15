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
    <link href="../../assets/css/bootstrap.min.css" media="all" rel="stylesheet" type="text/css">
    <!-- Base CSS -->
    <link href="../../assets/css/surejobs.css" media="all" rel="stylesheet" type="text/css">
    <!-- Document CSS -->
    <link href="../../assets/css/user.css" media="all" rel="stylesheet" type="text/css">

    <!-- Document Title -->
    <title> Sure Jobs | </title>
</head>

<body>
    <main>
        <!-- User Section -->
        <article class="container row" id="user">
            <!-- Profile Section -->
            <section class="container-fluid row section" id="profileSection">
                <!-- User Profile -->
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12" id="userProfile">
                    <!-- User Portrait -->
                    <img class="img-circle img-thumbnail" id="userPortrait" src="../../assets/img/png/icon/avatar.png"
                        style="height: 100px; width: 100px">

                    <!-- Username -->
                    <div id="userName"> Username </div>

                    <!-- User Status -->
                    <div class="btn-group" id="userStatusContainer" role="group">
                        <!-- Label
                                --- NOTE ---
                                    The button class type changes here depending
                                    on the status value.
                        -->
                        <button type="button" class="btn btn-default btn-success" id="userStatusLabel"> Status </button>

                        <!-- Value -->
                        <button type="button" class="btn btn-default" id="userStatus" style="padding-left: 30px; padding-right: 30px"> Verified </button>
                    </div>
                </div>

                <!-- User Details -->
                <nav class="col-lg-7 col-md-7 col-sm-12 col-xs-12" id="userDetails">
                    <!-- Detail Pane 1 -->
                    <div class="detail-pane">
                        <!-- Header -->
                        <h3 class="detail-pane-title"> Account Balance (&#8358;) </h3>

                        <!-- Value -->
                        <div class="detail-pane-value" id="userAccountBalance"> 0.00 </div>
                    </div>

                    <!-- Detail Pane 2 -->
                    <div class="detail-pane">
                        <h3 class="detail-pane-title"> Jobs Done </h3>
                        <div class="detail-pane-value" id="userJobsDone"> 0 </div>
                    </div>

                    <!-- Detail Pane 3 -->
                    <div class="detail-pane">
                        <h3 class="detail-pane-title"> Invoices </h3>
                        <div class="detail-pane-value" id="userInvoices"> 0 </div>
                    </div>

                    <!-- Detail Pane 4 -->
                    <div class="detail-pane">
                        <h3 class="detail-pane-title"> Pending Jobs </h3>
                        <div class="detail-pane-value" id="userPendingJobs"> 0 </div>
                    </div>

                    <!-- Detail Pane 5 -->
                    <div class="detail-pane">
                        <h3 class="detail-pane-title"> Rating </h3>
                        <div class="detail-pane-value" id="userRating"> Newly Experienced </div>
                    </div>
                </nav>
            </section>

            <!-- (User Wall) Board Section -->
            <section class="container-fluid row section" id="boardSection">
                <!-- Pending Jobs -->
                <div id="pendingJobs">
                    <!-- Header -->
                    <h2> Pending Jobs </h2>

                    <!-- Job Boards (Navigation) -->
                    <nav class="container" id="jobBoards">
                        <!-- --- NOTE ---
                                    These are job boards.
                        -->
                        <div class="job-board"> Fix 7 chairs </div>
                        <div class="job-board"> Broken dining table </div>
                        <div class="job-board"> Bad door hinge </div>
                    </nav>
                </div>
                
                <!-- Invoices -->
                <div id="invoices">
                    <!-- Header -->
                    <h2> Invoices </h2>

                    <!-- Invoice Boards (Navigation) -->
                    <nav class="container" id="invoiceBoards">
                        <!-- --- NOTE ---
                                    This is an invoice board.
                        -->
                        <div class="invoice-board">
                            <!-- Header -->
                            <h3 class="invoice-board-title"> 6 Chairs </h3>

                            <!-- Details -->
                            <div class="invoice-board-details">
                                <!-- Amount Required -->
                                <div data-inner-amount> &#8358;2,000 </div>
                                <!-- Due Date -->
                                <div data-inner-date> 27-05-17 </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </article>
    </main>

    <!-- Tether IO Script (Dependency Script) -->
    <script src="../../assets/js/tether.js" type="text/javascript"> </script>
    <!-- jQuery Script (Sub-Dependency Script) -->
    <script src="../../assets/js/jquery-3.1.1.min.js" type="text/javascript"> </script>
    <!-- Bootstrap Script -->
    <script src="../../assets/js/bootstrap.js" type="text/javascript"> </script>
    <!-- Base Script -->
    <script src="../../assets/js/surejobs.js" type="text/javascript"> </script>
    <!-- Document Script -->
    <script src="../../assets/js/user.js" type="text/javascript"> </script>
</body>

</html>
