document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle code (keep your existing theme code)...

    // Bio card toggle functionality
    const aboutBtn = document.querySelector('.about-btn');
    const bioContainer = document.querySelector('.bio-container');
    
    aboutBtn.addEventListener('click', function() {
        if (bioContainer.style.display === 'none' || !bioContainer.style.display) {
            bioContainer.style.display = 'block';
            // Force a reflow
            bioContainer.offsetHeight;
            bioContainer.style.opacity = '1';
        } else {
            bioContainer.style.opacity = '0';
            setTimeout(() => {
                bioContainer.style.display = 'none';
            }, 300); // Match transition duration
        }
    });
});
