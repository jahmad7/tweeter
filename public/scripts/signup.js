var $signUpSubmit = $("#signUpSubmit");

signUpSubmit.click( function() {
    $.post( 'some-url', $('#signUpForm').serialize(), function(data) {
         ... do something with response from server
       },
       'json' // I expect a JSON response
    );
});

$('input#submitButton').click( function() {
    $.ajax({
        url: 'some-url',
        type: 'post',
        dataType: 'json',
        data: $('form#myForm').serialize(),
        success: function(data) {
                   ... do something with the data...
                 }
    });
});