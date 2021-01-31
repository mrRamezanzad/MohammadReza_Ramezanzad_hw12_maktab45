var loginButton = $("#login-button")

// send authentication request button handler
loginButton.on("click", function (e) {
    let formData = {
        username: $("#username").val(),
        password: String($("#password").val())
    }
    e.preventDefault()

    //    login request
    $.ajax({
        type: "POST",
        url: "http://localhost/login",
        data: JSON.stringify(formData),
        dataType: "application/json",
        success: function (response) {
            console.log("response");
        },
        error: function (err) {
            console.log("error");
        }
    });

})