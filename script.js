document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const toggleIcon = document.getElementById('toggle-icon');
    const logo = document.querySelector('.nav-logo img');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            logo.src = 'images/logoDark.png'; // Ruta del logo para el modo oscuro
            toggleIcon.classList.replace('ri-moon-line', 'ri-sun-line');
        } else {
            logo.src = 'images/logoClaro.png'; // Ruta del logo para el modo claro
            toggleIcon.classList.replace('ri-sun-line', 'ri-moon-line');
            
        }
    });
});

