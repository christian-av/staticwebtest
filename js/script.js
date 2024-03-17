function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

window.addEventListener('DOMContentLoaded', function() {
    var startX;

    document.body.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });
    
    document.body.addEventListener('touchmove', function(e) {
        var deltaX = e.touches[0].clientX - startX;
        
        // Prevent horizontal scrolling if deltaX is greater than deltaY
        if (Math.abs(deltaX) > Math.abs(e.touches[0].clientY - e.changedTouches[0].clientY)) {
            e.preventDefault();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path without leading '/'
    var path = window.location.pathname.replace(/^\/+|\/+$/g, ''); // Remove leading and trailing slashes
    var currentPage = path.split('/').pop(); // Get the last segment of the path

    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-links a');

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Get the href attribute of the link
        var href = link.getAttribute('href');

        // Check if the href matches the current page
        if (href === currentPage || href.endsWith('/' + currentPage)) {
            // Add the 'active' class to the matching link
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', function() {
        toggleNav();
    });
});