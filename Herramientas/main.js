// SoftwareHub Dashboard - Main JavaScript Functions
// Autor: SoftwareHub Team
// Versión: 1.0.0

// Configuración global
const CONFIG = {
    colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#f093fb',
        success: '#43e97b',
        warning: '#fee140',
        error: '#f5576c'
    },
    animations: {
        duration: 800,
        easing: 'easeOutQuart',
        stagger: 200
    }
};

// Utilidades de animación
const AnimationUtils = {
    fadeInUp: (targets, delay = 0) => {
        return anime({
            targets: targets,
            opacity: [0, 1],
            translateY: [50, 0],
            delay: anime.stagger(CONFIG.animations.stagger, {start: delay}),
            duration: CONFIG.animations.duration,
            easing: CONFIG.animations.easing
        });
    },
    
    scaleIn: (targets, delay = 0) => {
        return anime({
            targets: targets,
            opacity: [0, 1],
            scale: [0.8, 1],
            delay: anime.stagger(100, {start: delay}),
            duration: 600,
            easing: CONFIG.animations.easing
        });
    },
    
    counter: (elementId, target, duration = 2000) => {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const obj = { count: 0 };
        anime({
            targets: obj,
            count: target,
            duration: duration,
            easing: 'easeOutQuart',
            update: function() {
                element.textContent = Math.round(obj.count);
            }
        });
    }
};

// Utilidades de navegación
const NavigationUtils = {
    smoothScroll: (targetId) => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },
    
    setActiveNav: (currentPage) => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
};

// Utilidades de gráficos
const ChartUtils = {
    createResponsiveChart: (elementId, data, layout, config = {}) => {
        const defaultConfig = {
            responsive: true,
            displayModeBar: false
        };
        
        Plotly.newPlot(elementId, data, layout, {...defaultConfig, ...config});
    },
    
    getDefaultLayout: (title = '', xAxis = '', yAxis = '') => {
        return {
            title: title,
            xaxis: { title: xAxis },
            yaxis: { title: yAxis },
            font: { family: 'Inter, sans-serif' },
            margin: { t: 40, b: 80, l: 60, r: 20 },
            plot_bgcolor: 'rgba(0,0,0,0)',
            paper_bgcolor: 'rgba(0,0,0,0)'
        };
    }
};

// Gestión de interacciones
const InteractionManager = {
    init: () => {
        // Inicializar observadores de intersección
        InteractionManager.initScrollAnimations();
        
        // Inicializar eventos de clic
        InteractionManager.initClickEvents();
        
        // Inicializar efectos hover
        InteractionManager.initHoverEffects();
    },
    
    initScrollAnimations: () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animar estadísticas
                    if (entry.target.id === 'stats') {
                        AnimationUtils.counter('stat-tools', 8);
                        AnimationUtils.counter('stat-labs', 6);
                        AnimationUtils.counter('stat-categories', 5);
                    }
                    
                    // Animar tarjetas de herramientas
                    if (entry.target.classList.contains('tool-card')) {
                        AnimationUtils.fadeInUp('.tool-card');
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observar elementos
        document.querySelectorAll('#stats, .tool-card, .chart-container').forEach(el => {
            observer.observe(el);
        });
    },
    
    initClickEvents: () => {
        // Botones de scroll suave
        document.querySelectorAll('[onclick*="scrollToSection"]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
                NavigationUtils.smoothScroll(targetId);
            });
        });
        
        // Enlaces de navegación
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href !== '#' && !href.startsWith('#')) {
                    // Navegación normal
                    return true;
                } else if (href.startsWith('#')) {
                    // Scroll a sección
                    e.preventDefault();
                    const targetId = href.substring(1);
                    NavigationUtils.smoothScroll(targetId);
                }
            });
        });
    },
    
    initHoverEffects: () => {
        // Efectos hover para tarjetas
        document.querySelectorAll('.card-hover, .tool-card, .feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                anime({
                    targets: card,
                    scale: [1, 1.02],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                anime({
                    targets: card,
                    scale: [1.02, 1],
                    duration: 300,
                    easing: 'easeOutQuart'
                });
            });
        });
    }
};

// Gestión de datos
const DataManager = {
    tools: [
        {
            name: 'Cellverse',
            institution: 'MIT Game Lab',
            category: 'Educación VR',
            description: 'Juego educativo colaborativo en Realidad Virtual',
            url: 'https://game.mit.edu',
            complexity: 8.5,
            popularity: 6
        },
        {
            name: 'Glaive y Sabre',
            institution: 'Univ. Kentucky',
            category: 'Narrativa',
            description: 'Motores de razonamiento narrativo del Narrative Intelligence Lab',
            url: 'https://narrative.cs.uky.edu',
            complexity: 7.5,
            popularity: 5
        },
        {
            name: 'TimelineJS',
            institution: 'Knight Lab',
            category: 'Visualización',
            description: 'Herramientas de código abierto para crear timelines interactivos',
            url: 'https://knightlab.northwestern.edu',
            complexity: 4,
            popularity: 8
        },
        {
            name: 'StoryMapJS',
            institution: 'Knight Lab',
            category: 'Visualización',
            description: 'Herramientas para crear mapas narrativos interactivos',
            url: 'https://knightlab.northwestern.edu',
            complexity: 4,
            popularity: 7
        },
        {
            name: 'SceneVR',
            institution: 'Knight Lab',
            category: 'Educación VR',
            description: 'Crea historias en Realidad Virtual de forma sencilla',
            url: 'https://knightlab.northwestern.edu',
            complexity: 5,
            popularity: 7
        },
        {
            name: 'Chunity',
            institution: 'Stanford VR',
            category: 'Educación VR',
            description: 'Integración de ChucK en Unity para creación musical interactiva',
            url: 'https://ccrma.stanford.edu',
            complexity: 9,
            popularity: 4
        },
        {
            name: 'Somax2',
            institution: 'IRCAM',
            category: 'IA Musical',
            description: 'Software de IA interactiva para improvisación musical',
            url: 'https://www.ircam.fr',
            complexity: 8,
            popularity: 5
        },
        {
            name: 'Ricercar',
            institution: 'Ars Electronica',
            category: 'IA Musical',
            description: 'Sistema colaborativo de composición musical basado en IA',
            url: 'https://www.aec.at',
            complexity: 7,
            popularity: 6
        },
        {
            name: 'Cutting Room OBM',
            institution: 'Digital Creativity Hub',
            category: 'Cine Interactivo',
            description: 'Herramienta para crear películas interactivas y narrativas no lineales',
            url: 'https://www.dclabprojects.com',
            complexity: 6,
            popularity: 7
        }
    ],
    
    getToolsByCategory: (category) => {
        return DataManager.tools.filter(tool => tool.category === category);
    },
    
    getToolsByInstitution: (institution) => {
        return DataManager.tools.filter(tool => tool.institution === institution);
    },
    
    getCategoryStats: () => {
        const categories = {};
        DataManager.tools.forEach(tool => {
            if (!categories[tool.category]) {
                categories[tool.category] = [];
            }
            categories[tool.category].push(tool);
        });
        return categories;
    }
};

// Funciones de utilidad global
window.scrollToSection = (sectionId) => {
    NavigationUtils.smoothScroll(sectionId);
};

window.showContactInfo = () => {
    alert('Gracias por tu interés en SoftwareHub.\n\nPara más información sobre las herramientas presentadas, visita los sitios web oficiales de cada desarrollador.\n\n¡Explora y descubre el futuro del software!');
};

window.showFeedback = () => {
    const feedback = prompt('¿Qué te gustaría compartir con nosotros?\n\nTu feedback nos ayuda a mejorar:');
    if (feedback) {
        alert('¡Gracias por tu feedback!\n\nTu opinión es muy valiosa para nosotros.');
    }
};

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar gestor de interacciones
    InteractionManager.init();
    
    // Animación inicial del hero
    if (document.getElementById('hero-title')) {
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
        })
        .add({
            targets: '#hero-title',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: 300
        })
        .add({
            targets: '#hero-subtitle',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: 200
        }, '-=800')
        .add({
            targets: '#hero-buttons',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: 100
        }, '-=600');
    }
    
    // Configurar navegación activa
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    NavigationUtils.setActiveNav(currentPage);
    
    console.log('SoftwareHub Dashboard inicializado correctamente');
});

// Exportar utilidades para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AnimationUtils,
        NavigationUtils,
        ChartUtils,
        DataManager,
        CONFIG
    };
}