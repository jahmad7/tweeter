/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const contributionData = {
    "user": {
      "name": "Newton",
      "title": "Citizen",
      "location": "Toronto",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },

    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants",
      "pollinationSum": 1,
      "support": 1,
      "disagree": 0
    },
    "created_at": 1461116232227
};


let currentUserInfo = contributionData;

function createPollinationElement(currentUserInfo) {
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
                <a href="">Main Branch</a>
                <a href="">Current Node</a>
            </fiqure>
        </header>
  
        <main>
            <time>${currentUserInfo.created_at}</time>
            <p>
                ${currentUserInfo.content.text}
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
    e
}
$(document).ready(function(){
    $("#ecosystem-container").append(newPollinationElement);
});

 

