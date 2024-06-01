document.addEventListener('DOMContentLoaded', function () {
    // Form Validation
    const subscribeForm = document.querySelector('#newsletter form');
    const quoteForm = document.querySelector('#sidebar .form');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (validateEmail(emailInput.value)) {
                alert('Subscription successful!');
                // You can add AJAX here to actually submit the form
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const nameInput = this.querySelector('input[type="text"]');
            const messageInput = this.querySelector('textarea');

            if (nameInput.value.trim() === '') {
                alert('Please enter your name.');
            } else if (!validateEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
            } else if (messageInput.value.trim() === '') {
                alert('Please enter a message.');
            } else {
                alert('Quote request sent!');
                // You can add AJAX here to actually submit the form
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Navigation Highlight
    const navLinks = document.querySelectorAll('#navbar a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('current');
        }
    });

    // Smooth Scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== '') {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
