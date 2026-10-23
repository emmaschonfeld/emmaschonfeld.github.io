
/* GLOBAL */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: 'DM Sans', sans-serif;
    background: #f7f5f0;
    color: #252525;
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}

/* NAVIGATION */

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 8%;
    background: rgba(247, 245, 240, 0.96);
    border-bottom: 1px solid #e5e0d8;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(10px);
}

.logo {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.logo span {
    color: #a56a4b;
}

.navbar nav {
    display: flex;
    gap: 30px;
}

.navbar nav a {
    font-size: 14px;
    color: #555;
    transition: color 0.3s;
}

.navbar nav a:hover {
    color: #a56a4b;
}

/* HERO */

.hero {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 70px;
    min-height: 85vh;
    padding: 90px 8%;
    max-width: 1500px;
    margin: auto;
}

.eyebrow {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    color: #a56a4b;
    margin-bottom: 25px;
}

.hero h1 {
    font-size: clamp(50px, 6vw, 90px);
    letter-spacing: -4px;
    line-height: 1.1;
    margin-bottom: 20px;
}

.hero h1 span {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    color: #a56a4b;
    font-weight: 500;
}

.hero h2 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 25px;
    color: #555;
}

.hero-description {
    font-size: 16px;
    color: #666;
    max-width: 520px;
    margin-bottom: 18px;
}

/* HERO BUTTONS */

.hero-buttons {
    display: flex;
    gap: 18px;
    align-items: center;
    margin-top: 35px;
    flex-wrap: wrap;
}

.primary-btn {
    display: inline-block;
    background: #252525;
    color: white;
    padding: 15px 28px;
    border-radius: 40px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.primary-btn:hover {
    background: #a56a4b;
    transform: translateY(-3px);
}

.secondary-btn {
    font-size: 14px;
    border-bottom: 1px solid #252525;
    padding-bottom: 4px;
}

/* HEADSHOT */

.hero-image {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image-frame {
    width: 100%;
    max-width: 420px;
    height: 510px;
    overflow: hidden;
    border-radius: 220px 220px 18px 18px;
    background: #e9e5df;
    box-shadow: 20px 20px 0 #e9e3d9;
}

.image-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
    display: block;
}

.image-caption {
    margin-top: 35px;
    font-size: 12px;
    color: #777;
    letter-spacing: 0.5px;
}

.caption-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #a56a4b;
    border-radius: 50%;
    margin-right: 8px;
}

/* SECTIONS */

.section {
    display: grid;
    grid-template-columns: 25% 75%;
    padding: 110px 8%;
    border-top: 1px solid #e1ddd5;
    gap: 30px;
}

.section-number {
    color: #a56a4b;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 700;
}

.section-content {
    min-width: 0;
}

.section-content h2 {
    font-size: clamp(35px, 4vw, 58px);
    letter-spacing: -2px;
    line-height: 1.2;
    margin-bottom: 35px;
}

.section-content h2 em,
.contact h2 em {
    font-family: 'Playfair Display', serif;
    color: #a56a4b;
    font-weight: 500;
}

.section-content > p {
    max-width: 650px;
    color: #666;
    margin-bottom: 20px;
    font-size: 16px;
}

/* ABOUT */

.about-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 45px;
    padding-top: 30px;
    border-top: 1px solid #ddd7cf;
}

.about-details h3 {
    font-size: 13px;
    margin-bottom: 8px;
}

.about-details p {
    color: #777;
    font-size: 14px;
}

/* EXPERIENCE */

.experience-item {
    display: grid;
    grid-template-columns: 170px 1fr;
    gap: 35px;
    padding: 35px 0;
    border-top: 1px solid #ddd7cf;
}

.experience-date {
    font-size: 11px;
    color: #a56a4b;
    letter-spacing: 1px;
    font-weight: 700;
}

.experience-item h3 {
    font-size: 23px;
    margin-bottom: 5px;
}

.experience-item h4 {
    font-size: 14px;
    color: #888;
    font-weight: 500;
    margin-bottom: 15px;
}

.experience-item p {
    font-size: 15px;
    color: #666;
    margin-bottom: 15px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.tags span {
    border: 1px solid #d3cdc3;
    border-radius: 30px;
    padding: 5px 14px;
    font-size: 12px;
    color: #666;
}

/* LEADERSHIP */

.leadership-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.leadership-card {
    background: #eeeae3;
    padding: 30px;
    min-height: 260px;
    transition: transform 0.3s;
}

.leadership-card:hover {
    transform: translateY(-8px);
}

.leadership-card span {
    font-size: 12px;
    color: #a56a4b;
}

.leadership-card h3 {
    margin-top: 45px;
    margin-bottom: 15px;
    font-size: 20px;
}

.leadership-card p {
    color: #777;
    font-size: 14px;
}

/* SKILLS */

.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.skills-container span {
    padding: 12px 20px;
    border: 1px solid #d5cfc5;
    border-radius: 40px;
    font-size: 14px;
    transition: all 0.3s;
}

.skills-container span:hover {
    background: #252525;
    color: white;
}

/* CONTACT */

.contact {
    text-align: center;
    padding: 130px 20px;
    background: #ebe6dd;
}

.contact h2 {
    font-size: clamp(40px, 5vw, 70px);
    max-width: 800px;
    margin: 0 auto 25px;
    line-height: 1.2;
    letter-spacing: -2px;
}

.contact p:not(.eyebrow) {
    color: #777;
    margin-bottom: 35px;
}

/* FOOTER */

footer {
    display: flex;
    justify-content: space-between;
    padding: 30px 8%;
    color: #888;
    font-size: 12px;
}

/* RESPONSIVE */

@media (max-width: 900px) {

    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 55px;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .image-frame {
        max-width: 350px;
        height: 430px;
    }

    .section {
        grid-template-columns: 1fr;
        padding: 75px 7%;
    }

    .leadership-grid {
        grid-template-columns: 1fr;
    }

}

@media (max-width: 600px) {

    .navbar {
        padding: 20px 5%;
    }

    .navbar nav {
        display: none;
    }

    .hero {
        padding: 65px 6%;
    }

    .hero h1 {
        font-size: 55px;
        letter-spacing: -2px;
    }

    .hero h2 {
        font-size: 18px;
    }

    .image-frame {
        max-width: 290px;
        height: 370px;
    }

    .experience-item {
        grid-template-columns: 1fr;
        gap: 12px;
    }

    .about-details {
        grid-template-columns: 1fr;
    }

    footer {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }

}
