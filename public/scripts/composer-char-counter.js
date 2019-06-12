$(document).ready(function() {
    // --- updating the count under the input ---
    //this refers to the document
    //EDIT TO ADD 140 TO DATABASE and CHANGE to DYMANIC 

    $("#textBox").on('keypress', function() {
        $(this).siblings(".counter").text(140 - $(this).val().length);

        ($(this).val().length > 140) ? $(this).siblings(".counter").css({"color": "red"}) : $(this).siblings(".counter").css({"color": "white"});

    });
  });
