/* =========================
   AK STUDIO JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       SIDEBAR
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        sidebar.classList.toggle("active");

    });


    /*
       Close sidebar whenever the user
       clicks anywhere outside the sidebar
    */

    document.addEventListener("click", function (event) {

        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            event.target !== menuBtn
        ) {

            sidebar.classList.remove("active");

        }

    });


    /*
       Close sidebar after clicking
       one of its links
    */

    const sidebarLinks =
        document.querySelectorAll(".side-link");

    sidebarLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            sidebar.classList.remove("active");

        });

    });


    /* =========================
       ASK AI
    ========================= */

    const askBtn = document.getElementById("askBtn");
    const aiInput = document.getElementById("aiInput");
    const aiResponse = document.getElementById("aiResponse");

    function askAI() {

        const question = aiInput.value.trim();

        if (question === "") {

            aiResponse.textContent =
                "✨ Tell AK AI what you want to create.";

            return;

        }

        aiResponse.textContent =
            "✨ AK AI is preparing your creative idea...";

        /*
          This is currently a frontend demo.

          Later we will connect this button
          to your real AI backend/API.
        */

        setTimeout(function () {

            aiResponse.textContent =
                "🎬 Your idea: " + question;

        }, 1000);

    }


    askBtn.addEventListener("click", askAI);


    aiInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            askAI();

        }

    });


    /* =========================
       CREATE BUTTON
    ========================= */

    const startCreating =
        document.getElementById("startCreating");

    startCreating.addEventListener("click", function () {

        aiInput.focus();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =========================
       BACKGROUND IMAGE ROTATION
    ========================= */

    const backgrounds = [

        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=90",

        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90",

        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=90",

        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=90"

    ];

    let currentBackground = 0;

    const background =
        document.querySelector(".background");


    setInterval(function () {

        currentBackground++;

        if (currentBackground >= backgrounds.length) {
            currentBackground = 0;
        }

        background.style.backgroundImage =
            `url("${backgrounds[currentBackground]}")`;

    }, 8000);


});
