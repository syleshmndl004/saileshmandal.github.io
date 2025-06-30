document.addEventListener('DOMContentLoaded', function () {
    // Contact Form Submission
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                console.log("Form submitted:", { name, email, message });
                form.reset();
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    // Mobile Menu Toggle
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = `<i class="fas fa-bars"></i>`;
    document.querySelector('header').appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
