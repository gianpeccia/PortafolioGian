document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const toggleIcon = document.getElementById('toggle-icon');
    const logo = document.querySelector('.nav-logo img');
    const flecha = document.querySelector('.arrow img');

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            navLinks.style.height = `${navLinks.scrollHeight}px`;
        } else {
            navLinks.style.height = '0';
        }
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navLinks.style.height = '0';
        });
    });

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            logo.src = 'images/logoDark.png'; // Ruta del logo para el modo oscuro
            flecha.src = 'images/arrowlight.svg'; 
            toggleIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        } else {
            logo.src = 'images/logoClaro.png'; // Ruta del logo para el modo claro
            flecha.src = 'images/arrowdark.svg'; 
            toggleIcon.classList.replace('ri-sun-line', 'ri-moon-line');
            
        }
    });
});

