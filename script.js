// ==========================================
// AK STUDIO — HOMEPAGE JAVASCRIPT V2
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // NATURE BACKGROUND
    // ==========================================

    const background = document.querySelector(".background");

    const natureScenes = [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2400&q=90",
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2400&q=90",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90",
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=90"
    ];

    if (background) {

        let savedScene =
            localStorage.getItem("akStudioNatureScene");

        let sceneIndex =
            savedScene !== null
                ? Number(savedScene)
                : 0;

        if (
            sceneIndex < 0 ||
            sceneIndex >= natureScenes.length
        ) {
            sceneIndex = 0;
        }

        background.style.backgroundImage =
            `url("${natureScenes[sceneIndex]}")`;

        // Prepare different image for next visit
        const nextScene =
            (sceneIndex + 1) % natureScenes.length;

        localStorage.setItem(
            "akStudioNatureScene",
            nextScene
        );
    }


    // ==========================================
    // SIDEBAR
    // ==========================================

    const menuBtn =
        document.getElementById("menuBtn");

    const sidebar =
        document.getElementById("sidebar");

    const sidebarOverlay =
        document.getElementById("sidebarOverlay");


    function openSidebar() {

        if (!sidebar || !sidebarOverlay) return;

        sidebar.classList.add("active");
        sidebarOverlay.classList.add("active");

        document.body.classList.add("menu-open");
    }


    function closeSidebar() {

        if (!sidebar || !sidebarOverlay) return;

        sidebar.classList.remove("active");
        sidebarOverlay.classList.remove("active");

        document.body.classList.remove("menu-open");
    }


    // Open menu

    if (menuBtn) {

        menuBtn.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                if (
                    sidebar &&
                    sidebar.classList.contains("active")
                ) {
                    closeSidebar();
                } else {
                    openSidebar();
                }

            }
        );

    }


    // Close when clicking outside

    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    // Close after selecting sidebar option

    const sidebarLinks =
        document.querySelectorAll(".sidebar-link");

    sidebarLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeSidebar
        );

    });


    // ==========================================
    // ASK AI
    // ==========================================

    const aiInput =
        document.getElementById("aiInput");

    const aiResponse =
        document.getElementById("aiResponse");


    window.askAI = function () {

        if (!aiInput) return;

        const question =
            aiInput.value.trim();


        if (question === "") {

            aiInput.focus();

            if (aiResponse) {
                aiResponse.textContent =
                    "Ask me anything about creating films, stories or visuals.";
            }

            return;
        }


        if (aiResponse) {

            aiResponse.textContent =
                "AK Studio AI: Your AI assistant will be connected to the secure AI backend soon.";

        }

    };


    // Enter key for Ask AI

    if (aiInput) {

        aiInput.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    window.askAI();

                }

            }
        );

    }


    // ==========================================
    // AI FEATURE BUTTONS
    // ==========================================

    window.showFeature = function (featureName) {

        if (aiResponse) {

            aiResponse.textContent =
                `${featureName} is coming soon to AK Studio.`;

            aiResponse.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    };


    // ==========================================
    // LOGIN MODAL
    // ==========================================

    const loginModal =
        document.getElementById("loginModal");


    window.openLogin = function () {

        if (!loginModal) return;

        loginModal.classList.add("active");

    };


    function closeLogin() {

        if (!loginModal) return;

        loginModal.classList.remove("active");

    }


    // Close login by clicking outside

    if (loginModal) {

        loginModal.addEventListener(
            "click",
            event => {

                if (event.target === loginModal) {
                    closeLogin();
                }

            }
        );

    }


    // ==========================================
    // LOGIN BUTTON
    // ==========================================

    const modalLogin =
        document.querySelector(".modal-login");


    if (modalLogin) {

        modalLogin.addEventListener(
            "click",
            () => {

                alert(
                    "AK Studio Login\n\nThe real login system will be connected to the database in the backend stage."
                );

            }
        );

    }


    // ==========================================
    // MOBILE / DESKTOP NAVIGATION
    // ==========================================

    const navLinks =
        document.querySelectorAll(
            ".desktop-nav a, .footer-links a"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetID =
                    link.getAttribute("href");

                if (
                    targetID &&
                    targetID.startsWith("#")
                ) {

                    const target =
                        document.querySelector(targetID);

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    });


    // ==========================================
    // VOICE INPUT
    // ==========================================

    window.startVoice = function () {

        if (!aiInput) return;


        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;


        if (!SpeechRecognition) {

            alert(
                "Voice input is not supported by this browser."
            );

            return;
        }


        const recognition =
            new SpeechRecognition();


        recognition.lang = "en-IN";

        recognition.interimResults = false;

        recognition.maxAlternatives = 1;


        recognition.start();


        recognition.onresult =
            event => {

                const transcript =
                    event.results[0][0].transcript;

                aiInput.value =
                    transcript;

            };


        recognition.onerror =
            () => {

                console.log(
                    "Voice input could not be completed."
                );

            };

    };


    // ==========================================
    // FILM CARD INTERACTION
    // ==========================================

    const filmCards =
        document.querySelectorAll(".film-card");


    filmCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const title =
                    card.querySelector("h3");


                if (title) {

                    alert(
                        `${title.textContent}\n\nTrailer / movie player will be connected here.`
                    );

                }

            }
        );

    });


    // ==========================================
    // VIEW ALL
    // ==========================================

    const viewButton =
        document.querySelector(".view-btn");


    if (viewButton) {

        viewButton.addEventListener(
            "click",
            () => {

                const films =
                    document.getElementById("films");

                if (films) {

                    films.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // ==========================================
    // ESCAPE KEY
    // ==========================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSidebar();
                closeLogin();

            }

        }
    );


    // ==========================================
    // HERO ANIMATION
    // ==========================================

    const hero =
        document.querySelector(".hero");


    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform =
            "translateY(20px)";

        hero.style.transition =
            "opacity 1s ease, transform 1s ease";


        setTimeout(() => {

            hero.style.opacity = "1";

            hero.style.transform =
                "translateY(0)";

        }, 200);

    }


    // ==========================================
    // CONSOLE
    // ==========================================

    console.log(
        "🎬 AK Studio V2 loaded successfully."
    );

});
