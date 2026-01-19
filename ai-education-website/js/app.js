document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Navigation Handler
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            
            // Update Active State
            navLinks.forEach(n => n.classList.remove('active'));
            link.classList.add('active');

            // Show Section
            sections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');

            // Close mobile sidebar if open
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
            }

            // Scroll to top
            window.scrollTo(0, 0);
        });
    });

    // Mobile Toggle
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Handle deep linking (if hash present)
    /* 
    if(window.location.hash) {
        const target = window.location.hash.substring(1);
        const link = document.querySelector(`[data-target="${target}"]`);
        if(link) link.click();
    }
    */
});
