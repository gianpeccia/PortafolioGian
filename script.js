document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const toggleIcon = document.getElementById('toggle-icon');
    const logo = document.querySelector('.nav-logo img');
    const flecha = document.querySelector('.arrow img');

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    /* FILTRO DE BUSQUEDA DE PROYECTOS */
    const applyFiltersBtn = document.querySelector('.apply-filters-btn');
    const cards = document.querySelectorAll('.card');
    const checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');

    applyFiltersBtn.addEventListener('click', () => {
        const selectedTechs = Array.from(checkboxes)
                                   .filter(checkbox => checkbox.checked)
                                   .map(checkbox => checkbox.value);

        cards.forEach(card => {
            const techs = card.getAttribute('data-tech').split(' ');
            if (selectedTechs.every(tech => techs.includes(tech)) || selectedTechs.length === 0) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Mostrar todos los proyectos por defecto al cargar la página
    applyFiltersBtn.click();


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
    // Selecciona todos los elementos con la clase 'cargo'
    const cargos = document.querySelectorAll('.cargo');

    cargos.forEach(cargo => {
        cargo.addEventListener('click', () => {
            const descripcion = cargo.nextElementSibling;

            // Si la descripción ya está activa, ciérrala y no abras ninguna
            if (descripcion.classList.contains('activo')) {
                descripcion.style.height = '0';
                descripcion.classList.remove('activo');
            } else {
                // Cierra todas las descripciones abiertas
                document.querySelectorAll('.descripcion.activo').forEach(desc => {
                    desc.style.height = '0';
                    desc.classList.remove('activo');
                });

                // Abre la descripción del cargo actual
                descripcion.classList.add('activo');
                descripcion.style.height = `${descripcion.scrollHeight}px`; // Ajusta la altura dinámicamente
            }
        });
    });


});

