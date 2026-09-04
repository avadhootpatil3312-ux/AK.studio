/* =========================
   AK STUDIO
   MOBILE FIRST DESIGN
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    overflow-x: hidden;
    background: #050909;
}


/* =========================
   BACKGROUND
========================= */

.background {
    position: fixed;
    inset: 0;

    background-image:
        url("https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=90");

    background-size: cover;
    background-position: center;

    z-index: -3;

    animation: backgroundZoom 15s ease-in-out infinite alternate;
}

@keyframes backgroundZoom {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.08);
    }
}


.overlay {
    position: fixed;
    inset: 0;

    background:
        linear-gradient(
            180deg,
            rgba(0,0,0,0.45),
            rgba(0,0,0,0.2) 40%,
            rgba(0,0,0,0.8)
        );

    z-index: -2;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;

    top: 16px;
    left: 14px;
    right: 14px;

    height: 70px;

    display: flex;
    align-items: center;

    padding: 0 14px 0 22px;

    border: 1px solid rgba(255,255,255,0.3);

    border-radius: 38px;

    background: rgba(255,255,255,0.14);

    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);

    z-index: 1000;
}


/* LOGO */

.logo {
    display: flex;
    align-items: baseline;
    gap: 9px;

    white-space: nowrap;
}

.logo span {
    font-size: 27px;
    font-weight: 300;
    letter-spacing: 3px;
}

.logo small {
    font-size: 10px;
    letter-spacing: 3px;
    opacity: 0.8;
}


/* DESKTOP NAV */

.desktop-nav {
    display: none;
}

.desktop-nav a {
    color: white;
    text-decoration: none;
}


/* LOGIN */

.login-btn {
    margin-left: auto;

    height: 52px;
    padding: 0 19px;

    border-radius: 28px;

    border: 1px solid rgba(255,255,255,0.4);

    background: rgba(255,255,255,0.12);

    color: white;

    font-size: 15px;
}


/* MENU */

.menu-btn {
    margin-left: 8px;

    width: 45px;
    height: 45px;

    border-radius: 14px;

    border: 1px solid rgba(255,255,255,0.35);

    background: rgba(255,255,255,0.15);

    color: white;

    font-size: 21px;

    cursor: pointer;
}


/* =========================
   SIDEBAR
========================= */

.sidebar {

    position: fixed;

    top: 0;
    right: -290px;

    width: 270px;
    height: 100vh;

    padding: 100px 25px 30px;

    background: rgba(8,15,15,0.88);

    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);

    border-left: 1px solid rgba(255,255,255,0.2);

    z-index: 2000;

    transition: right 0.35s ease;
}

.sidebar.active {
    right: 0;
}


.sidebar-title {

    font-size: 24px;
    letter-spacing: 4px;

    margin-bottom: 45px;
}

.sidebar-title span {
    font-size: 12px;
    opacity: 0.7;
}


.side-link {

    display: flex;

    align-items: center;

    gap: 15px;

    padding: 17px 10px;

    margin-bottom: 8px;

    color: white;

    text-decoration: none;

    font-size: 17px;

    border-radius: 12px;

    transition: background 0.2s;
}

.side-link:hover {
    background: rgba(255,255,255,0.12);
}


.sidebar-line {

    height: 1px;

    background: rgba(255,255,255,0.2);

    margin: 35px 0 20px;
}


.copyright {
    font-size: 13px;
    opacity: 0.6;
}


/* =========================
   HERO
========================= */

.hero {

    min-height: 100vh;

    display: flex;

    align-items: center;
    justify-content: center;

    text-align: center;

    padding:
        120px
        22px
        100px;
}


.hero-content {
    width: 100%;
    max-width: 700px;
}


/* TITLE */

.hero h1 {

    font-size: clamp(65px, 18vw, 130px);

    font-weight: 200;

    line-height: 0.82;

    letter-spacing: -3px;

    margin-bottom: 35px;
}

.hero h1 span {
    font-weight: 200;
}


/* TAGLINE */

.tagline {

    font-size: 11px;

    letter-spacing: 4px;

    color: #e8d58c;

    margin-bottom: 25px;
}


/* DESCRIPTION */

.description {

    font-size: 21px;

    line-height: 1.4;

    margin-bottom: 35px;

    font-weight: 500;
}


/* =========================
   AI SEARCH
========================= */

.ai-search {

    width: 100%;

    min-height: 64px;

    display: flex;

    align-items: center;

    gap: 9px;

    padding: 7px 8px 7px 17px;

    border-radius: 40px;

    border: 1px solid rgba(255,255,255,0.45);

    background: rgba(20,20,20,0.42);

    backdrop-filter: blur(20px);

    -webkit-backdrop-filter: blur(20px);

    box-shadow:
        0 10px 40px rgba(0,0,0,0.25);
}


.search-icon {
    font-size: 27px;
}


.ai-search input {

    min-width: 0;

    flex: 1;

    background: transparent;

    border: none;

    outline: none;

    color: white;

    font-size: 15px;
}

.ai-search input::placeholder {
    color: rgba(255,255,255,0.75);
}


.mic {
    font-size: 16px;
}


.ask-btn {

    flex-shrink: 0;

    width: 49px;
    height: 49px;

    border-radius: 50%;

    border: 1px solid rgba(255,255,255,0.5);

    background: rgba(255,255,255,0.08);

    color: #f5df88;

    font-size: 24px;

    cursor: pointer;
}


.ai-response {

    min-height: 24px;

    margin-top: 15px;

    font-size: 14px;

    opacity: 0.9;
}


/* =========================
   WELCOME
========================= */

.welcome-card {

    width: calc(100% - 45px);

    max-width: 360px;

    margin:
        -70px
        auto
        60px;

    padding: 22px;

    display: flex;

    align-items: center;

    gap: 18px;

    border-radius: 25px;

    border: 1px solid rgba(255,255,255,0.25);

    background: rgba(0,0,0,0.35);

    backdrop-filter: blur(15px);
}


.creator-circle {

    width: 44px;
    height: 44px;

    border-radius: 50%;

    border: 2px solid #eadb91;
}


.welcome-card span {

    display: block;

    font-size: 14px;

    opacity: 0.8;

    margin-bottom: 5px;
}


.welcome-card strong {
    font-size: 20px;
}


/* =========================
   SECTIONS
========================= */

.section-card {

    width: calc(100% - 30px);

    max-width: 900px;

    margin: 30px auto;

    padding: 45px 25px;

    text-align: center;

    border-radius: 28px;

    border: 1px solid rgba(255,255,255,0.22);

    background: rgba(4,10,10,0.58);

    backdrop-filter: blur(15px);
}


.section-card h2 {

    font-size: 22px;

    letter-spacing: 3px;

    color: #eadb91;

    margin-bottom: 18px;
}


.section-card p {

    line-height: 1.7;

    opacity: 0.85;
}


.section-card button {

    margin-top: 25px;

    padding: 13px 25px;

    border-radius: 25px;

    border: 1px solid rgba(255,255,255,0.35);

    background: rgba(255,255,255,0.1);

    color: white;

    font-size: 15px;
}


/* FILM */

.film-placeholder {

    margin-top: 25px;

    padding: 45px 15px;

    border-radius: 20px;

    background: rgba(255,255,255,0.05);

    border: 1px dashed rgba(255,255,255,0.25);
}

.film-placeholder span {
    font-size: 40px;
}


/* =========================
   FOOTER
========================= */

footer {

    text-align: center;

    padding: 45px 20px;

    font-size: 13px;

    opacity: 0.65;

    line-height: 1.8;
}


/* =========================
   TABLET / DESKTOP
========================= */

@media (min-width: 768px) {

    .navbar {
        left: 35px;
        right: 35px;
        height: 86px;
    }

    .desktop-nav {

        display: flex;

        gap: 28px;

        margin-left: auto;
        margin-right: 25px;
    }

    .desktop-nav a {
        font-size: 15px;
    }

    .menu-btn {
        display: block;
    }

    .hero {
        padding-top: 150px;
    }

    .description {
        font-size: 24px;
    }

    .ai-search {
        min-height: 72px;
    }

    .ai-search input {
        font-size: 17px;
    }

        }
