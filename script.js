// ==========================================
// AK STUDIO — HOMEPAGE V1
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------------
  // 1. DYNAMIC NATURE BACKGROUND
  // ------------------------------------------

  const background = document.querySelector(".background");

  const natureScenes = [
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=90"
  ];

  let visitNumber = Number(localStorage.getItem("akStudioVisit")) || 0;

  const sceneIndex = visitNumber % natureScenes.length;

  background.style.backgroundImage =
    `url("${natureScenes[sceneIndex]}")`;

  localStorage.setItem("akStudioVisit", visitNumber + 1);


  // ------------------------------------------
  // 2. HERO FADE-IN ANIMATION
  // ------------------------------------------

  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(20px)";
    hero.style.transition = "opacity 1.2s ease, transform 1.2s ease";

    setTimeout(() => {
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    }, 300);
  }


  // ------------------------------------------
  // 3. AI SEARCH BAR
  // ------------------------------------------

  const searchBox = document.querySelector(".search-box");

  if (searchBox) {

    searchBox.addEventListener("click", () => {

      const request = prompt(
        "What do you want to create today?"
      );

      if (request && request.trim() !== "") {

        alert(
          "AK Studio AI\n\nYour request:\n" +
          request +
          "\n\nAI creation system coming soon."
        );

      }

    });

  }


  // ------------------------------------------
  // 4. AI FEATURE CARDS
  // ------------------------------------------

  const aiCards = document.querySelectorAll(".ai-card");

  aiCards.forEach((card) => {

    card.addEventListener("click", () => {

      const title = card.querySelector("h4");

      if (title) {

        alert(
          "AK Studio\n\n" +
          title.textContent +
          "\n\nThis creative tool will be available soon."
        );

      }

    });

  });


  // ------------------------------------------
  // 5. LOGIN BUTTON
  // ------------------------------------------

  const loginButton = document.querySelector(".login-btn");

  if (loginButton) {

    loginButton.addEventListener("click", () => {

      alert(
        "AK Studio Login\n\n" +
        "Login system will be connected in the next development phase."
      );

    });

  }


  // ------------------------------------------
  // 6. PROJECT CARD INTERACTION
  // ------------------------------------------

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {

    card.addEventListener("click", () => {

      const title = card.querySelector("h4");

      if (title) {

        alert(
          "AK Studio Project\n\n" +
          title.textContent +
          "\n\nProject details coming soon."
        );

      }

    });

  });


  // ------------------------------------------
  // 7. NAVIGATION ACTIVE EFFECT
  // ------------------------------------------

  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.forEach((item) => {
        item.style.opacity = "0.7";
      });

      link.style.opacity = "1";

    });

  });


  // ------------------------------------------
  // 8. CONSOLE MESSAGE
  // ------------------------------------------

  console.log(
    "🎬 AK Studio Homepage V1 loaded successfully."
  );

});
