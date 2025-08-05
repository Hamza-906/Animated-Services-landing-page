document.addEventListener("DOMContentLoaded", function() {
    // ---------------------------------------------
    // 🧩 AOS (Animate on Scroll) Initialization
    // ---------------------------------------------
    AOS.init({
        duration: 800, // animation duration in ms
        once: true,    // whether animation should happen only once - while scrolling down
        offset: 100,   // offset (in px) from the original trigger point
    });

    // ---------------------------------------------
    // 🧭 Hamburger Menu Toggle
    // ---------------------------------------------
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // ---------------------------------------------
    // ⚙️ Feature Filtering
    // ---------------------------------------------
    const featureSelect = document.getElementById("feature-select");
    const featureCards = document.querySelectorAll(".feature-card");

    if (featureSelect) {
        featureSelect.addEventListener("change", (e) => {
            const selectedCategory = e.target.value;
    
            featureCards.forEach(card => {
                const cardCategory = card.getAttribute("data-feature");
                if (selectedCategory === "all" || selectedCategory === cardCategory) {
                    card.style.display = "block";
                    card.classList.remove('hidden');
                } else {
                    card.style.display = "none";
                    card.classList.add('hidden');
                }
            });
        });
    }

    // ---------------------------------------------
    // 👥 Testimonials Slider (Swiper.js)
    // ---------------------------------------------
    const swiper = new Swiper('.testimonials-slider', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        }
    });

    // ---------------------------------------------
    // 📧 Contact Form Validation
    // ---------------------------------------------
    const signupForm = document.getElementById("signup-form");
    const emailInput = document.getElementById("email-input");
    const formMessage = document.getElementById("form-message");

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            formMessage.textContent = "";
            emailInput.classList.remove("invalid");
    
            if (!emailInput.value || !emailInput.checkValidity()) {
                formMessage.textContent = "Please enter a valid email address.";
                formMessage.className = "form-message error";
                emailInput.classList.add("invalid");
            } else {
                formMessage.textContent = "Thank you for subscribing!";
                formMessage.className = "form-message success";
                emailInput.value = ""; // Clear input on success
            }
        });
    }

    // ---------------------------------------------
    // 🌙 Dark Mode Toggle
    // ---------------------------------------------
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    
    // Check for saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Save preference to localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

});