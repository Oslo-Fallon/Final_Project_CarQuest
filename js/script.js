// Import Bootstrap from ESM CDN
import bootstrap from "https://esm.sh/bootstrap";

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Enter button functionality
    const enterBtn = document.getElementById('enter-btn');
    if (enterBtn) {
        enterBtn.addEventListener('click', function() {
            // Remove the splash screen
            const splashScreen = document.querySelector('.splash-container');
            if (splashScreen) {
                splashScreen.style.display = 'none';
            }
            
            // Show the main content
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.style.display = 'block';
            }
            
            // Optionally, you can still show a welcome message
            alert('Welcome to our site!');
        });
    }
});