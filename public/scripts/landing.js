

$(function() {

    const $signUpSubmit = $('#signUpForm');

    $signUpSubmit.submit( function() {
        console.log("SERIALIZED: ", $(this).serialize());
        $.ajax({
            url: '/users',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                       console.log(data);
                     }
        });
    });

    $("#signUpBtn").click(function(){
        $("#searchBar").css({"display": "none"});
        $("#main-header").html("Welcome to Necter !");
        $("#secondary-header").html("Become a contributer");
        $("#loginDiv").css({"display": "none"});
        $("#signUpDiv").css({"display": "flex"});
        $("#sUuserName").select();
    });

    $("#loginBtn").click(function(){
        $("#searchBar").css({"display": "none"});
        $("#main-header").html("Welcome Back to Necter !");
        $("#secondary-header").html("Please Login Below");
        $("#signUpDiv").css({"display": "none"});
        $("#loginDiv").css({"display": "flex"});
        $("#userName").select();
    });

    $(".backToSearch").click(function(){
        $("#searchBar").css({"display": "flex"});
        $("#main-header").html("International Development");
        $("#secondary-header").html("For Local Change");
        $("#signUpDiv").css({"display": "none"});
        $("#loginDiv").css({"display": "none"});
        $("#userName").select();
    });

});

