/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createPollinationElement(currentUserInfo) {
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  let newPollinationElement =
    `<article class="pollen-contribution">
        <header>
            <div class="user-section">
                <div>
                    <img class="user-picture"src="/images/sample-dp.png" alt="users profile picture">
                </div>
                <div class="user-information">
                    <a href="">${currentUserInfo.user.name}</a>
                    <a href="">${currentUserInfo.user.location}</a>
                    <a href="">${currentUserInfo.user.title}</a>
                </div>
            </div>
            <div id="header-err-space"></div>
            <fiqure class="branch-information">
                <a href="">${currentUserInfo.content.mainBranch}</a>
                <a href="">${currentUserInfo.content.currentNode}</a>
            </fiqure>
        </header>
  
        <main>
            <time>${currentUserInfo.created_at}</time>
            <p>
                ${escape(currentUserInfo.content.text)}
            </p>
        </main>
  
        <footer>
            <section class="standing-information">
                <a href="">${currentUserInfo.content.pollinationSum}</a>
                <a href="">Agree</a>
                <a href="">Disagree</a>
            </section>
  
            <section class="response-options">
                <button>Pollinate</button>
                <button>Branch</button>
            </section>
        </footer>
    </article>`;
  return newPollinationElement;
}

function renderContributions(ecosystem) {
  $("#ecosystem-container").empty();
  for (let contribution of ecosystem) {
    $("#ecosystem-container").prepend(createPollinationElement(contribution));
  }

}

//post new contribution 
$(function () {
  function loadContrabutions() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function (response) {
        renderContributions(response);
      },
      failure: function () {
        console.log("failed");
      }
    });
  }

  var $formSubmit = $("#new-pollinate-form");
  $formSubmit.submit(function (event) {

    event.preventDefault();

    let $queryString = $(this).serialize();
    console.log("QSS !!!: ", $queryString);

    if ($("#textBox").val().length === 0) {
      $("#errorMessage").html("No Contribution made");
    }
    else if ($("#textBox").val().length > 140) {
      $("#errorMessage").html("Contribution too long. Shorten.");
    }
    else{
      $.ajax({
        url: "/tweets",
        type: "POST",
        data: $queryString,
        success: function () {
          loadContrabutions();
          $("#textBox").val("");
          $("#errorMessage").html("");
        }
      })

    }
    
  });



  $("#open-contribution-section").click(function(){
    $("#pollination-form-view").css({"display": "flex"});
    $("#new-pollinate-form").css({"display": "block"});
    $("#contribution-default").css({"display": "none"});
    $("#textBox").select();
  });
  
  $("#close-contribution").click(function(){
    $("#pollination-form-view").css({"display": "none"});
    $("#new-pollinate-form").css({"display": "none"});
    $("#contribution-default").css({"display": "flex", "border-bottom": "0px"});
  });


  //Initial load of contributions 
  loadContrabutions()
});

