const name = ($("#nameInput").val().trim()).toUpperCase();
const email = ($("#emailInput").val().trim()).toUpperCase();
const streetAddress = ($("#streetAddressInput").val().trim()).toUpperCase();
const city = ($("#cityInput").val().trim()).toUpperCase();
const state = ($("#stateInput").val().trim()).toUpperCase();
const zipCode = $("#zipcodeInput").val().trim();
const description = ($("#description").val().trim());

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

    $(".equipment").hide();
    $(".reviews").hide();
    $(".residential").hide();
    $(".commercial").hide();
    $(".industrial").hide();

    $("#home-button").on("click", function () {
        $(".equipment").hide();
        $(".reviews").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".home").show();
    });

    $("#equipment-button").on("click", function () {
        $(".home").hide();
        $(".reviews").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".equipment").show();
    });

    $("#reviews-button").on("click", function () {
        $(".home").hide();
        $(".equipment").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".reviews").show();
    });

    $("#residential-button").on("click", function () {
        $(".home").hide();
        $(".reviews").hide();
        $(".equipment").hide();
        $(".commercial").hide();
        $(".industrial").hide();
        $(".residential").show();
    });

    $("#commercial-button").on("click", function () {
        $(".home").hide();
        $(".reviews").hide();
        $(".residential").hide();
        $(".equipment").hide();
        $(".industrial").hide();
        $(".commercial").show();
    });

    $("#industrial-button").on("click", function () {
        $(".home").hide();
        $(".reviews").hide();
        $(".residential").hide();
        $(".commercial").hide();
        $(".equipment").hide();
        $(".industrial").show();
    });

    $("#close").on("click", function () {
        $(".modal-body").empty();
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

    // const name = ($("#nameInput").val().trim()).toUpperCase();
    // const email = ($("#emailInput").val().trim()).toUpperCase();
    // const streetAddress = ($("#streetAddressInput").val().trim()).toUpperCase();
    // const city = ($("#cityInput").val().trim()).toUpperCase();
    // const state = ($("#stateInput").val().trim()).toUpperCase();
    // const zipCode = $("#zipcodeInput").val().trim();
    // const description = ($("#description").val().trim());


    // Create functions for each modal
    function modalEmpty() {
        $('#modal-empty').modal('show');
    };

    function modalZero() {
        $('#modal-zero').modal('show');
    };

    $("#submit-1").on("click", function () {
        event.preventDefault();
        if ((name === '') || (email === '') || (streetAddress === '') || (city === '') || (state === '') || (zipCode === '') || (description === '')) {
            //     modalEmpty();
            //     console.log("fail");
            // } else {
            $(".home").hide();
            $(".reviews").hide();
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
            $(".reviews").hide();
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
            $(".reviews").hide();
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

});