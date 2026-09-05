/* =========================================
   AK STUDIO - MAIN JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SIDEBAR
       ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");

    if (menuBtn && sidebar) {

        // Open / close sidebar
        menuBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            sidebar.classList.toggle("active");
        });

        // Close sidebar when clicking anywhere outside
        document.addEventListener("click", (event) => {

            if (
                sidebar.classList.contains("active") &&
                !sidebar.contains(event.target) &&
                event.target !== menuBtn
            ) {
                sidebar.classList.remove("active");
            }

        });

        // Close sidebar after clicking a sidebar link
        const sidebarLinks = document.querySelectorAll(".side-link");

        sidebarLinks.forEach((link) => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("active");
            });
        });
    }


    /* =========================================
       ASK AI
       ========================================= */

    const askBtn = document.getElementById("askBtn");
    const aiInput = document.getElementById("aiInput");
    const aiResponse = document.getElementById("aiResponse");

    function askAI() {

        if (!aiInput || !aiResponse) return;

        const question = aiInput.value.trim();

        if (question === "") {

            aiResponse.textContent =
                "✨ Tell AK AI what you want to create.";

            return;
        }

        aiResponse.textContent =
            "✨ AK AI is thinking...";

        // Frontend demo response
        setTimeout(() => {

            aiResponse.textContent =
                "🎬 Your idea: " + question;

        }, 800);
    }

    if (askBtn) {
        askBtn.addEventListener("click", askAI);
    }

    if (aiInput) {

        aiInput.addEventListener("keydown", (event) => {

            if (event.key === "Enter") {
                event.preventDefault();
                askAI();
            }

        });
    }


    /* =========================================
       START CREATING BUTTON
       ========================================= */

    const startCreating =
        document.getElementById("startCreating");

    if (startCreating) {

        startCreating.addEventListener("click", () => {

            if (aiInput) {
                aiInput.focus();
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });
    }


    /* =========================================
       BACKGROUND IMAGE SLIDER
       ========================================= */

    const backgrounds = [

        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=90",

        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90",

        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=90",

        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=90"

    ];

    const background =
        document.querySelector(".background");

    let currentBackground = 0;

    if (background && backgrounds.length > 0) {

        // First background
        background.style.backgroundImage =
            `url("${backgrounds[0]}")`;

        // Change background every 8 seconds
        setInterval(() => {

            currentBackground++;

            if (currentBackground >= backgrounds.length) {
                currentBackground = 0;
            }

            background.style.backgroundImage =
                `url("${backgrounds[currentBackground]}")`;

        }, 8000);
    }


    /* =========================================
       SMOOTH NAVIGATION
       ========================================= */

    const navLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       LOGIN BUTTON
       ========================================= */

    const loginBtn =
        document.querySelector(".login-btn");

    if (loginBtn) {

        loginBtn.addEventListener("click", () => {

            alert(
                "🔐 AK Studio Login\n\nLogin system will be connected to the backend soon."
            );

        });

    }


    /* =========================================
       PREVENT EMPTY SEARCH SUBMISSION
       ========================================= */

    if (aiInput) {

        aiInput.addEventListener("input", () => {

            if (aiResponse && aiInput.value.trim() === "") {
                aiResponse.textContent = "";
            }

        });

    }


    /* =========================================
       PAGE LOADED
       ========================================= */

    console.log("AK Studio loaded successfully 🎬");

});