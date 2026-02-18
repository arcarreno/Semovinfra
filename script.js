
const faqData = {
    estudiante: [
        {
            question: "¿Qué es el ciclo presupuestario?",
            answer: 'Es una forma de organizar el gasto público a través de 7 etapas.'
        },
        {
            question: "¿Cómo se conforma el Presupuesto de Egresos?",
            answer: 'Consulta la versión ciudadana del PEF de acuerdo al año de tu interés.'
        },
        {
            question: "¿Dónde encuentro información sobre el gasto de las instituciones?",
            answer: 'En la sección de <a href="Presupuestacion/Obra-Publica-Abierta.html">Obra Pública Abierta</a> sobre el avance del gasto.'
        },
        {
            question: "¿Cómo puedo conocer las obras de infraestructura?",
            answer: 'Consulta la sección de <a href="Presupuestacion/Obra-Publica-Abierta.html">Obra Pública Abierta</a>.'
        }
    ],
    servidor: [
        {
            question: "¿Dónde consulto las obras públicas?",
            answer: 'En la sección de <a href="Presupuestacion/Obra-Publica-Abierta.html">Obra Pública Abierta</a>.'
        },
        {
            question: "¿Cuál es la calidad del reporte de mi estado?",
            answer: 'Consulta los reportes disponibles en el portal.'
        },
        {
            question: "¿Cómo conozco el desempeño de un programa?",
            answer: 'Consulta la ficha informativa del programa de tu interés.'
        },
        {
            question: "¿Dónde consulto el avance de las obras?",
            answer: 'En la sección de <a href="Presupuestacion/Obra-Publica-Abierta.html">Obra Pública Abierta</a> encontrarás los avances.'
        }
    ],
    investigador: [
        {
            question: "¿Qué información está disponible?",
            answer: 'La sección de <a href="Presupuestacion/Obra-Publica-Abierta.html">Obra Pública Abierta</a> tiene datos completos.'
        },
        {
            question: "¿Cómo interpreto las bases de datos?",
            answer: 'En la misma tabla de búsqueda de Obra Pública Abierta.'
        },
        {
            question: "¿Las obras tienen información para geolocalización?",
            answer: 'Sí, en la sección de <a href="Presupuestacion/Obra-Publica-Abierta.html">Obra Pública Abierta</a>.'
        },
        {
            question: "¿Cómo realizo comparativos del presupuesto?",
            answer: 'Descarga las bases de datos disponibles en el portal.'
        }
    ],
    desarrollador: [
        {
            question: "¿Cuánto presupuesto se aprobó para determinado sector?",
            answer: 'Consulta la información en el portal de transparencia.'
        },
        {
            question: "¿Cuánto gasta determinado programa?",
            answer: 'Consulta los datos disponibles en el portal.'
        },
        {
            question: "¿Dónde consulto el presupuesto de una obra pública?",
            answer: 'Localiza la obra pública en <a href="Presupuestacion/Obra-Publica-Abierta.html">Obra Pública Abierta</a>.'
        },
        {
            question: "¿Cómo realizo comparativos?",
            answer: 'Descarga las bases de datos disponibles en el portal.'
        }
    ]
};

// Información de páginas
const pagesData = {
    'obra-publica': {
        title: 'Obra Pública Abierta',
        description: 'Proyectos de infraestructura en desarrollo en Puebla'
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
    });
}

// Page Loader para navegación entre páginas
function initPageLoader() {
    const pageLoader = document.getElementById('pageLoader');
    const quickAccessCards = document.querySelectorAll('.quick-access-card');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

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

}

// ============================================
// NAVBAR STICKY CON JAVASCRIPT
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.main-nav');
    if (nav) {
        let navOffsetTop = nav.offsetTop;
        let spacer = null;

        function handleStickyNav() {
            if (window.scrollY >= navOffsetTop) {
                if (!nav.classList.contains('navbar-fixed')) {
                    spacer = document.createElement('div');
                    spacer.style.height = nav.offsetHeight + 'px';
                    spacer.id = 'navbar-spacer';
                    nav.parentNode.insertBefore(spacer, nav);
                    nav.classList.add('navbar-fixed');
                }
            } else {
                if (nav.classList.contains('navbar-fixed')) {
                    nav.classList.remove('navbar-fixed');
                    const existingSpacer = document.getElementById('navbar-spacer');
                    if (existingSpacer) existingSpacer.remove();
                    spacer = null;
                }
            }
        }

        window.addEventListener('scroll', handleStickyNav);
        window.addEventListener('resize', () => {
            if (!nav.classList.contains('navbar-fixed')) {
                navOffsetTop = nav.offsetTop;
            }
        });
    }
});

// Console log inicial
console.log('Portal de Transparencia Presupuestaria - Puebla');

// ============================================
// MODO DÍA / NOCH
// ============================================

(function () {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    }
})();

// Función global de toggle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}