document.addEventListener('DOMContentLoaded', function() {
    // Generate random particles for background
    createBackgroundParticles();
    
    // Flash error message if provided from server
    const urlParams = new URLSearchParams(window.location.search);
    const errorMsg = urlParams.get('error');
    if (errorMsg) {
        showSnackbar(decodeURIComponent(errorMsg));
    }
    
    // Form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const username = document.querySelector('input[name="username"]').value;
            const password = document.querySelector('input[name="password"]').value;
            
            if (!username || !password) {
                e.preventDefault();
                showSnackbar('Silakan isi semua kolom yang diperlukan');
            }
        });
    }
});

// Function to create background particles
function createBackgroundParticles() {
    const container = document.getElementById('bg-particles-container');
    const numParticles = 30; // Number of particles
    
    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('bg-particle');
        
        // Random particle properties
        const size = Math.random() * 5 + 2; // Size between 2-7px
        const posX = Math.random() * 100; // Position X (0-100%)
        const delay = Math.random() * 15; // Animation delay
        const duration = Math.random() * 15 + 15; // Animation duration (15-30s)
        const endX = (Math.random() * 200) - 100; // End X position variation
        
        // Set CSS properties
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.setProperty('--x-end', `${endX}px`);
        
        // Add particle to the container
        container.appendChild(particle);
    }
}

// Function to show the snackbar
function showSnackbar(message) {
    const snackbar = document.getElementById('snackbar');
    const snackbarMessage = document.getElementById('snackbar-message');
    
    if (snackbar && snackbarMessage) {
        snackbarMessage.textContent = message;
        snackbar.classList.add('show');
        
        // Hide the snackbar after some time
        setTimeout(function() {
            snackbar.classList.remove('show');
        }, 4000);
    }
}

// Function to close the snackbar
function closeSnackbar() {
    const snackbar = document.getElementById('snackbar');
    if (snackbar) {
        snackbar.classList.remove('show');
    }
}