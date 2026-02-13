
const faqData = {
    estudiante: [
        {
            question: "¿Qué es el ciclo presupuestario?",
            answer: 'Es una forma de organizar el gasto público a través de 7 etapas, <a href="#ciclo-presupuestario">conócelas</a>.'
        },
        {
            question: "¿Cómo se conforma el Presupuesto de Egresos?",
            answer: 'Consulta la versión ciudadana del PEF de acuerdo al año de tu interés.'
        },
        {
            question: "¿Dónde encuentro información sobre el gasto de las instituciones?",
            answer: 'En las bases de <a href="#datos-abiertos">Datos Abiertos</a> sobre Avance del gasto.'
        },
        {
            question: "¿Cómo puedo capacitarme en temas presupuestarios?",
            answer: 'Conoce <a href="#capacitacion">aquí</a> la oferta de cursos disponibles.'
        }
    ],
    servidor: [
        {
            question: "¿Cómo me inscribo a una capacitación?",
            answer: 'Da clic en "Solicitar información" dentro de la sección <a href="#capacitacion">Capacitación</a>.'
        },
        {
            question: "¿Cuál es la calidad del reporte de mi estado?",
            answer: 'En el apartado de <a href="#gobiernos-locales">¿Cómo reportan los gobiernos locales?</a>'
        },
        {
            question: "¿Cómo conozco el desempeño de un programa?",
            answer: 'Consulta la ficha informativa del <a href="#programas">programa</a> de tu interés.'
        },
        {
            question: "¿Dónde consulto las evaluaciones de programas?",
            answer: 'En la sección <a href="#evaluacion">Evaluación</a> hallarás información.'
        }
    ],
    investigador: [
        {
            question: "¿Qué secciones tienen API disponible?",
            answer: 'Las secciones <a href="#programas">Programas</a> y <a href="#obra-publica">Obra Pública</a>.'
        },
        {
            question: "¿Cómo interpreto las bases de datos?",
            answer: 'En la misma tabla de búsqueda de <a href="#datos-abiertos">Datos Abiertos</a>.'
        },
        {
            question: "¿Las obras tienen información para geolocalización?",
            answer: 'En las bases de datos de <a href="#obra-publica">Obra Pública Abierta</a>.'
        },
        {
            question: "¿Cómo realizo comparativos del presupuesto?",
            answer: 'Descarga las bases de <a href="#datos-abiertos">Datos Abiertos</a> de cada período.'
        }
    ],
    desarrollador: [
        {
            question: "¿Cuánto presupuesto se aprobó para determinado sector?",
            answer: 'En la sección <a href="#documentos">Documentos Ciudadanos</a>.'
        },
        {
            question: "¿Cuánto gasta determinado programa?",
            answer: 'Utiliza la tabla de búsqueda de <a href="#programas">Programas</a>.'
        },
        {
            question: "¿Dónde consulto el presupuesto de una obra pública?",
            answer: 'Localiza la obra pública en <a href="#obra-publica">Obra Pública Abierta</a>.'
        },
        {
            question: "¿Cómo realizo comparativos?",
            answer: 'Descarga las bases de <a href="#datos-abiertos">Datos Abiertos</a>.'
        }
    ]
};

// Información de páginas para los 10 contenedores
const pagesData = {
    'ciclo-presupuestario': {
        title: 'Ciclo Presupuestario',
        description: 'Conoce las etapas del proceso presupuestario del Estado de Puebla'
    },
    'planeacion': {
        title: 'Planeación',
        description: 'Planes y programas de desarrollo estatal de Puebla'
    },
    'ingresos-federales': {
        title: 'Ingresos Federales',
        description: 'Recursos federales asignados al Estado de Puebla'
    },
    'recaudacion-local': {
        title: 'Recaudación Local',
        description: 'Ingresos generados en la entidad de Puebla'
    },
    'programas': {
        title: 'Programas Presupuestarios',
        description: 'Programas presupuestarios en ejecución en Puebla'
    },
    'obra-publica': {
        title: 'Obra Pública Abierta',
        description: 'Proyectos de infraestructura en desarrollo en Puebla'
    },
    'entidades-federativas': {
        title: 'Entidades Federativas',
        description: 'Información por entidad federativa de Puebla'
    },
    'evaluacion': {
        title: 'Evaluación',
        description: 'Resultados y evaluación de programas en Puebla'
    },
    'datos-abiertos': {
        title: 'Datos Abiertos',
        description: 'Bases de datos y recursos abiertos de Puebla'
    },
    'capacitacion': {
        title: 'Capacitación',
        description: 'Cursos y materiales de formación de Puebla'
    }
};

// DOM Ready
document.addEventListener('DOMContentLoaded', function () {
    // Preloader de 2 segundos
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('hidden');

        // Habilitar scroll
        document.body.style.overflow = 'auto';

        // Inicializar componentes después del preloader
        setTimeout(() => {
            initCarousel();
            initMobileMenu();
            initProfileCards();
            initSmoothScroll();
            initCounters();
            initAnimations();
            initDropdowns();
            initPageLoader();
            initSearch();
            initPageCards();
        }, 500);
    }, 2000); // 2 segundos de preloader

    // Deshabilitar scroll mientras se muestra el preloader
    document.body.style.overflow = 'hidden';
});

// Carrusel de Imágenes
function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 segundos

    // Función para mostrar slide específico
    function showSlide(index) {
        // Asegurarse que el índice esté dentro del rango
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        // Ocultar todas las slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Quitar activo de todos los indicadores
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });

        // Mostrar slide actual
        slides[index].classList.add('active');
        indicators[index].classList.add('active');

        currentSlide = index;
    }

    // Función para siguiente slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Función para slide anterior
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Iniciar autoplay
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Detener autoplay
    function stopAutoPlay() {
        clearInterval(slideInterval);
    }

    // Event listeners para botones
    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            prevSlide();
            stopAutoPlay();
            startAutoPlay(); // Reiniciar autoplay después de interacción manual
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            nextSlide();
            stopAutoPlay();
            startAutoPlay(); // Reiniciar autoplay después de interacción manual
        });
    }

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            showSlide(index);
            stopAutoPlay();
            startAutoPlay(); // Reiniciar autoplay después de interacción manual
        });
    });

    // Pausar autoplay al pasar el mouse
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    // Iniciar autoplay
    startAutoPlay();

    // Mostrar primer slide
    showSlide(0);
}

// Mobile Menu con submenús
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function () {
            menu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Cerrar al hacer clic en enlace
        const menuLinks = menu.querySelectorAll('a:not(.mobile-dropdown-toggle)');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }

    // Submenús en móvil
    mobileDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.mobile-dropdown-toggle');
        if (toggle) {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                dropdown.classList.toggle('active');

                // Cerrar otros dropdowns
                mobileDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            });
        }
    });
}

// Dropdowns en desktop
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            this.querySelector('.dropdown-menu').style.display = 'block';
            setTimeout(() => {
                this.querySelector('.dropdown-menu').style.opacity = '1';
                this.querySelector('.dropdown-menu').style.transform = 'translateY(0)';
                this.querySelector('.dropdown-menu').style.visibility = 'visible';
            }, 10);
        });

        dropdown.addEventListener('mouseleave', function () {
            const menu = this.querySelector('.dropdown-menu');
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-10px)';
            menu.style.visibility = 'hidden';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        });
    });
}

// Profile Cards
function initProfileCards() {
    const cards = document.querySelectorAll('.profile-card');
    const faqPanel = document.getElementById('faqPanel');
    const faqContent = document.getElementById('faqContent');
    let activeProfile = null;

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const profile = this.dataset.profile;

            // Toggle active state
            if (activeProfile === profile) {
                cards.forEach(c => c.classList.remove('active'));
                faqPanel.classList.remove('active');
                activeProfile = null;
                return;
            }

            // Update active card
            cards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            activeProfile = profile;

            // Load FAQs
            loadFAQs(profile);

            // Show panel
            faqPanel.classList.add('active');

            // Scroll to panel on mobile
            if (window.innerWidth < 768) {
                setTimeout(() => {
                    faqPanel.scrollIntoView({ behavior: 'smooth' });
                }, 300);
            }
        });
    });

    function loadFAQs(profile) {
        const faqs = faqData[profile];
        if (!faqs) return;

        const titles = {
            estudiante: 'Para Estudiantes',
            servidor: 'Para Servidores Públicos',
            investigador: 'Para Investigadores',
            desarrollador: 'Para Especialistas en Datos'
        };

        let html = `<h3>Preguntas Frecuentes ${titles[profile]}</h3>`;

        faqs.forEach((faq, index) => {
            html += `
                <div class="faq-item" style="animation-delay: ${index * 0.1}s">
                    <div class="faq-question">${faq.question}</div>
                    <div class="faq-answer">${faq.answer}</div>
                </div>
            `;
        });

        faqContent.innerHTML = html;
    }
}

// Page Cards (los 10 contenedores)
function initPageCards() {
    const pageCards = document.querySelectorAll('.page-card');

    pageCards.forEach(card => {
        // Efecto de hover mejorado
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 40px rgba(125, 36, 71, 0.3)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });

        // NO interceptamos el click - dejamos que el <a href="..."> funcione naturalmente
    });
}

// Page Loader para navegación entre páginas
function initPageLoader() {
    const pageLoader = document.getElementById('pageLoader');
    const quickAccessCards = document.querySelectorAll('.quick-access-card');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    // Función para simular carga de página
    function simulatePageLoad(pageId) {
        // Mostrar loader
        pageLoader.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Simular carga de 2 segundos
        setTimeout(() => {
            // Ocultar loader
            pageLoader.classList.remove('active');
            document.body.style.overflow = 'auto';

            // En un entorno real, aquí cargarías la página
            if (pagesData[pageId]) {
                alert(`Redirigiendo a: ${pagesData[pageId].title}\n\n${pagesData[pageId].description}\n\nEn un entorno real, esto cargaría la página correspondiente.`);
            } else {
                alert(`Redirigiendo a página...\n\nEn un entorno real, esto cargaría la página correspondiente.`);
            }
        }, 2000);
    }

    // Event listeners para tarjetas de acceso rápido
    quickAccessCards.forEach(card => {
        card.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.dataset.page;
            simulatePageLoad(pageId);
        });
    });

    // Event listeners para items del dropdown
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // --- CORRECCIÓN IMPORTANTE ---
            // Si el enlace es una página real (no empieza con #), dejamos que el navegador la abra
            if (href && !href.startsWith('#')) {
                return; // Se detiene el script aquí y deja que el enlace funcione normal
            }
            // -----------------------------

            e.preventDefault();
            const pageId = href ? href.replace('#', '') : '';
            simulatePageLoad(pageId);
        });
    });

    // Event listeners para enlaces de navegación principal
    navLinks.forEach(link => {
        if (!link.classList.contains('dropdown-toggle')) {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const pageId = href.replace('#', '');
                    simulatePageLoad(pageId);
                }
            });
        }
    });
}

// Search Functionality
function initSearch() {
    const searchBtn = document.querySelector('.main-search-btn');
    const searchInput = document.querySelector('.main-search-input');
    const tags = document.querySelectorAll('.tag');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    if (tags) {
        tags.forEach(tag => {
            tag.addEventListener('click', function (e) {
                e.preventDefault();
                const text = this.textContent.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '').trim();
                if (searchInput) {
                    searchInput.value = text;
                    searchInput.focus();
                }
            });
        });
    }

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Mostrar loader
            const pageLoader = document.getElementById('pageLoader');
            pageLoader.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Simular búsqueda de 2 segundos
            setTimeout(() => {
                pageLoader.classList.remove('active');
                document.body.style.overflow = 'auto';

                // En un entorno real, aquí iría la búsqueda AJAX
                console.log('Buscando:', query);
                alert(`Resultados de búsqueda para: "${query}"\n\nEn un entorno real, esto mostraría los resultados de búsqueda.`);
            }, 2000);
        } else {
            searchInput.focus();
        }
    }
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const elementPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animated Counters
function initCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.indicator-value');
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const section = document.querySelector('.indicators-section');
    if (section) observer.observe(section);

    function animateCounter(element) {
        const target = parseFloat(element.textContent.replace(/[^0-9.]/g, ''));
        const suffix = element.textContent.replace(/[0-9.]/g, '');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = suffix.includes('B')
                ? `$${current.toFixed(1)}B`
                : suffix.includes('%')
                    ? `${Math.round(current)}%`
                    : suffix.includes('+')
                        ? `${Math.round(current)}+`
                        : Math.round(current);
        }, 30);
    }
}

// Animaciones
function initAnimations() {
    // Animación de entrada para tarjetas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Animar tarjetas de página
    const pageCards = document.querySelectorAll('.page-card');
    pageCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animar tarjetas de perfil
    const profileCards = document.querySelectorAll('.profile-card');
    profileCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animar tarjetas de acceso rápido
    const quickAccessCards = document.querySelectorAll('.quick-access-card');
    quickAccessCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Sticky nav con sombra
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 100) {
            nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
        }
    });
}



// Console log inicial
console.log('Portal de Transparencia Presupuestaria - Puebla');