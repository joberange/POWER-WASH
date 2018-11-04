$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAIVpom6hHYbNSV05ZDrKiroonJN6ZGM-o",
        authDomain: "range-wash.firebaseapp.com",
        databaseURL: "https://range-wash.firebaseio.com",
        projectId: "range-wash",
        storageBucket: "range-wash.appspot.com",
        messagingSenderId: "253043639551"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    //set global variables for the input fields

    // database.ref().push({
    //     name: name,
    //     email: email,
    //     streetAddress: streetAddress,
    //     city: city,
    //     state: state,
    //     zipCode: zipCode,
    //     description: description
    // });

    // Hide restaurant table and others table when page is loaded
    $(".equipment").hide();
    $(".pricing").hide();
    $(".residential").hide();
    $(".commercial").hide();
    $(".industrial").hide();

    $("#home-button").on("click", function () {
        $(".equipment").hide();
        $(".pricing").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".home").show();
    });

    $("#equipment-button").on("click", function () {
        $(".home").hide();
        $(".pricing").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".equipment").show();
    });

    $("#pricing-button").on("click", function () {
        $(".home").hide();
        $(".equipment").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".pricing").show();
    });

    $("#residential-button").on("click", function () {
        $(".home").hide();
        $(".pricing").hide();
        $(".equipment").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".residential").show();
    });

    $("#commercial-button").on("click", function () {
        $(".home").hide();
        $(".pricing").hide();
        $(".residential").hide();
        $(".equipment").hide();
        $(".industrial").hide();
        $(".commercial").show();
    });

    $("#industrial-button").on("click", function () {
        $(".home").hide();
        $(".pricing").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".equipment").hide();
        $(".industrial").show();
    });



    function renderMap(streetAddress, city, state, zipCode) {
        
        var apiResult = "https://www.google.com/maps/embed/v1/search?q=" + streetAddress + city + state + zipCode + "&key=AIzaSyDzd8udb7o2Ms2UBhL0PVbszc0Seo38DFY";

        // create iframe emelment and set that to a variable with the API result URL
        var addIframe = $('<iframe />', {
            id: 'map',
            name: 'map',
            src: apiResult
        });

        $("#mapWindow").append(addIframe);
    };

    function renderReceipt(name, email, streetAddress, city, state, zipCode, description) {
        var addCard = $("<div class='card'><div class='card-body'><ul><li>" + name + "</li>" + "<li>" + email + "</li>" + "<li>" + streetAddress + "</li>" + "<li>" + city + "</li>" + "<li>" + state + "</li>" + "<li>" + zipCode + "</li>" + "<li>" + description + "</li></ul></div></div>");

        $("#receipt").append(addCard);
    };

    const name = ($("#nameInput").val().trim()).toUpperCase();
    const email = ($("#emailInput").val().trim()).toUpperCase();
    const streetAddress = ($("#streetAddressInput").val().trim()).toUpperCase();
    const city = ($("#cityInput").val().trim()).toUpperCase();
    const state = ($("#stateInput").val().trim()).toUpperCase();
    const zipCode = $("#zipcodeInput").val().trim();
    const description = ($("#description").val().trim());
    

    // Create functions for each modal
    function modalEmpty() {
        $('#modal-empty').modal('show');
    };

    function modalZero() {
        $('#modal-zero').modal('show');
    };

    // // Input validations
    // if ((name === '') || (email === '') || (streetAddress === '') || (city === '') || (state === '') || (zipCode === '') || (description === '')) {
    //     modalEmpty();
    //     return false;
    // }
console.log(name);

    $("#submit-1").on("click", function () {
        event.preventDefault();
        if ((name === '') || (email === '') || (streetAddress === '') || (city === '') || (state === '') || (zipCode === '') || (description === '')) {
        //     modalEmpty();
        //     console.log("fail");
        // } else {
            $(".home").hide();
            $(".pricing").hide();
            $(".equipment").hide();
            $(".commercial").hide();
            $(".industrial").hide();
            $(".residential").show();
            renderReceipt();
            renderMap();
            modalZero();
        };


        database.ref().push({
            name: name,
            email: email,
            streetAddress: streetAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            description: description
        });

    })
    $("#submit-2").on("click", function () {
        event.preventDefault();
        if ((name === '') || (email === '') || (streetAddress === '') || (city === '') || (state === '') || (zipCode === '') || (description === '')) {
        //     modalEmpty();
        //     console.log("fail");
        // } else {
            $(".home").hide();
            $(".pricing").hide();
            $(".residential").hide();
            $(".equipment").hide();
            $(".industrial").hide();
            $(".commercial").show();
            renderReceipt();
            renderMap();
            modalZero();
        };


        database.ref().push({
            name: name,
            email: email,
            streetAddress: streetAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            description: description
        });

    })
    $("#submit-3").on("click", function () {
        event.preventDefault();
        if ((name === '') || (email === '') || (streetAddress === '') || (city === '') || (state === '') || (zipCode === '') || (description === '')) {
        //     modalEmpty();
        //     console.log("fail");
        // } else {
            $(".home").hide();
            $(".pricing").hide();
            $(".residential").hide();
            $(".commercial").hide();
            $(".equipment").hide();
            $(".industrial").show();
            renderReceipt();
            renderMap();
            modalZero();
        };


        database.ref().push({
            name: name,
            email: email,
            streetAddress: streetAddress,
            city: city,
            state: state,
            zipCode: zipCode,
            description: description
        });

    })

    // // Hide restaurant table and others table when page is loaded
    // $(".equipment").hide();
    // $(".pricing").hide();
    // $(".residential").hide();
    // $(".commercial").hide();
    // $(".industrial").hide();

    // $("#home-button").on("click", function () {
    //     $(".equipment").hide();
    //     $(".pricing").hide();
    //     $(".residential").hide();
    //     $(".commercial").hide();
    //     $(".industrial").hide();
    //     $(".home").show();
    // });

    // $("#equipment-button").on("click", function () {
    //     $(".home").hide();
    //     $(".pricing").hide();
    //     $(".residential").hide();
    //     $(".commercial").hide();
    //     $(".industrial").hide();
    //     $(".equipment").show();
    // });

    // $("#pricing-button").on("click", function () {
    //     $(".home").hide();
    //     $(".equipment").hide();
    //     $(".residential").hide();
    //     $(".commercial").hide();
    //     $(".industrial").hide();
    //     $(".pricing").show();
    // });

    // $("#residential-button").on("click", function () {
    //     $(".home").hide();
    //     $(".pricing").hide();
    //     $(".equipment").hide();
    //     $(".commercial").hide();
    //     $(".industrial").hide();
    //     $(".residential").show();
    // });

    // $("#commercial-button").on("click", function () {
    //     $(".home").hide();
    //     $(".pricing").hide();
    //     $(".residential").hide();
    //     $(".equipment").hide();
    //     $(".industrial").hide();
    //     $(".commercial").show();
    // });

    // $("#industrial-button").on("click", function () {
    //     $(".home").hide();
    //     $(".pricing").hide();
    //     $(".residential").hide();
    //     $(".commercial").hide();
    //     $(".equipment").hide();
    //     $(".industrial").show();
    // });

    // var request = require('request');

    // function subscribe(req, res, next) {
    //     var email = req.body.email; //Email entered
    //     var dataCenter = 'us1';
    //     var apiKey = 'API_KEY';
    //     var listID = 'LIST_ID';
    //     //Request settings
    //     var options = {
    //         url: `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listID}/members`,
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json', 'Authorization': `apikey ${apiKey}` },
    //         body: JSON.stringify({ email_address: email, status: 'subscribed' })
    //     }
    //     // Make a simple POST call to MailChimp
    //     request(options, function (error, response, body) {
    //         try {
    //             var respObj = {}; //Initial response object
    //             if (response.statusCode === 200) {
    //                 respObj = { success: `Subscribed using ${email}!`, message: JSON.parse(response.body) };
    //             } else {
    //                 respObj = { error: `Error trying to subscribe ${email}. Please try again.`, message: JSON.parse(response.body) };
    //             }
    //             res.send(respObj);
    //         } catch (err) {
    //             var respErrorObj = { error: 'There was an error with your request', message: err.message };
    //             res.send(respErrorObj);
    //         }
    //     });
    //     next();
    // }


});