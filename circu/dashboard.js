// Dashboard JavaScript para manejo de visualizaciones
class DashboardManager {
    constructor() {
        this.charts = {};
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadCharts();
    }

    setupEventListeners() {
        // Smooth scrolling para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Filtros interactivos
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleFilter(e.target);
            });
        });
    }

    loadCharts() {
        // Crear gráficos directamente con Plotly
        this.createVeniceChart();
        this.createTimelineChart();
        this.createTematicaChart();
        this.createObrasChart();
        this.createTecnologiasChart();
    }

    createVeniceChart() {
        const data = [
            {
                x: [2022, 2023, 2024],
                y: [44, 43, 63],
                mode: 'lines+markers',
                name: 'Proyectos Totales',
                line: { color: '#8B4513', width: 3 },
                marker: { size: 10, color: '#8B4513' }
            },
            {
                x: [2022, 2023, 2024],
                y: [30, 28, 26],
                mode: 'lines+markers',
                name: 'Proyectos en Competición',
                line: { color: '#2F4F4F', width: 3, dash: 'dot' },
                marker: { size: 10, color: '#2F4F4F' }
            }
        ];

        const layout = {
            title: 'Evolución de Venice Immersive (2022-2024)',
            xaxis: { title: 'Año' },
            yaxis: { title: 'Número de Proyectos' },
            paper_bgcolor: '#FAF8F5',
            plot_bgcolor: '#FAF8F5',
            font: { family: 'Source Sans Pro, sans-serif', color: '#2C3E50' },
            legend: {
                orientation: "h",
                yanchor: "bottom",
                y: 1.02,
                xanchor: "right",
                x: 1
            }
        };

        Plotly.newPlot('venice-chart', data, layout, {responsive: true});
    }

    createTimelineChart() {
        const festivales = [
            { nombre: 'Ars Electronica', fundacion: 1979, ubicacion: 'Linz, Austria', tipo: 'Nivel 1' },
            { nombre: 'ISEA', fundacion: 1988, ubicacion: 'Itinerante', tipo: 'Nivel 1' },
            { nombre: 'IGF', fundacion: 1998, ubicacion: 'San Francisco', tipo: 'Nivel 1' },
            { nombre: 'Transmediale', fundacion: 1997, ubicacion: 'Berlín, Alemania', tipo: 'Nivel 1' },
            { nombre: 'A MAZE.', fundacion: 2012, ubicacion: 'Berlín, Alemania', tipo: 'Nivel 1' },
            { nombre: 'Venice Immersive', fundacion: 2017, ubicacion: 'Venecia, Italia', tipo: 'Nivel 2' }
        ];

        const data = [{
            x: festivales.map(f => f.fundacion),
            y: festivales.map(f => f.nombre),
            mode: 'markers+text',
            marker: {
                size: festivales.map(f => f.tipo === 'Nivel 1' ? 20 : 15),
                color: festivales.map(f => f.tipo === 'Nivel 1' ? '#8B4513' : '#CD853F'),
                line: { width: 2, color: '#2F4F4F' }
            },
            text: festivales.map(f => f.nombre),
            textposition: 'middle right',
            textfont: { size: 10 },
            hovertemplate: '<b>%{y}</b><br>Fundado: %{x}<br>Ubicación: ' + 
                          festivales.map(f => f.ubicacion).join('<br>Ubicación: ') + '<extra></extra>'
        }];

        const layout = {
            title: 'Timeline de Festivales de Arte y Tecnología',
            xaxis: { title: 'Año de Fundación' },
            yaxis: { title: '' },
            paper_bgcolor: '#FAF8F5',
            plot_bgcolor: '#FAF8F5',
            font: { family: 'Source Sans Pro, sans-serif', color: '#2C3E50' },
            showlegend: false,
            height: 500
        };

        Plotly.newPlot('timeline-chart', data, layout, {responsive: true});
    }

    createTematicaChart() {
        const data = [{
            labels: ['Narrativa personalizada', 'Arte generativo', 'Co-creación social', 
                    'Documental inmersivo', 'Game art', 'Performance digital'],
            values: [25, 20, 18, 15, 12, 10],
            type: 'pie',
            hole: 0.4,
            marker: {
                colors: ['#8B4513', '#2F4F4F', '#CD853F', '#708090', '#A0522D', '#556B2F']
            }
        }];

        const layout = {
            title: 'Distribución Temática de Obras Destacadas',
            paper_bgcolor: '#FAF8F5',
            plot_bgcolor: '#FAF8F5',
            font: { family: 'Source Sans Pro, sans-serif', color: '#2C3E50' },
            annotations: [{
                text: 'Temas<br>Principales',
                x: 0.5,
                y: 0.5,
                font_size: 16,
                showarrow: false
            }]
        };

        Plotly.newPlot('tematica-chart', data, layout, {responsive: true});
    }

    createObrasChart() {
        const obras = [
            { titulo: 'Tulpamancer', artista: 'Marc Da Costa & Matthew Niederhauser', 
              año: 2023, festival: 'Venice Immersive', categoria: 'Narrativa personalizada' },
            { titulo: 'MAGIC AI-ART: DIMENSIONS', artista: 'Niko Lang', 
              año: 2024, festival: 'Venice Immersive', categoria: 'Arte generativo' },
            { titulo: 'A Cure for Straightness', artista: 'Cameron Kostopoulos', 
              año: 2024, festival: 'Venice Immersive', categoria: 'Documental inmersivo' },
            { titulo: 'Ancestors', artista: 'Steye Hallema', 
              año: 2024, festival: 'Venice Immersive', categoria: 'Co-creación social' },
            { titulo: 'The Time of the Chimeras', artista: 'Varios artistas', 
              año: 2022, festival: 'Bienal de Venecia', categoria: 'Criptoarte institucional' },
            { titulo: 'DOKU – Digital Descending', artista: 'LuYang', 
              año: 2022, festival: 'Bienal de Venecia', categoria: 'Videojuego como arte' },
            { titulo: 'T/C LATVIJA', artista: 'Pabellón de Letonia', 
              año: 2023, festival: 'Bienal de Venecia', categoria: 'Co-creación arquitectónica' }
        ];

        const data = [{
            x: obras.map(o => o.año),
            y: obras.map(o => o.festival),
            mode: 'markers',
            marker: {
                size: 12,
                color: obras.map(o => {
                    const colors = {
                        'Narrativa personalizada': '#8B4513',
                        'Arte generativo': '#2F4F4F',
                        'Documental inmersivo': '#CD853F',
                        'Co-creación social': '#708090',
                        'Criptoarte institucional': '#A0522D',
                        'Videojuego como arte': '#556B2F',
                        'Co-creación arquitectónica': '#483D8B'
                    };
                    return colors[o.categoria] || '#8B4513';
                })
            },
            text: obras.map(o => o.titulo),
            hovertemplate: '<b>%{text}</b><br>Año: %{x}<br>Festival: %{y}<extra></extra>'
        }];

        const layout = {
            title: 'Obras Destacadas por Festival y Año',
            xaxis: { title: 'Año' },
            yaxis: { title: 'Festival' },
            paper_bgcolor: '#FAF8F5',
            plot_bgcolor: '#FAF8F5',
            font: { family: 'Source Sans Pro, sans-serif', color: '#2C3E50' },
            height: 400
        };

        Plotly.newPlot('obras-chart', data, layout, {responsive: true});
    }

    createTecnologiasChart() {
        const data = [{
            x: ['IA Generativa', 'Realidad Virtual', 'Blockchain/NFTs', 'Game Art', 'Realidad Mixta'],
            y: [4, 3, 3, 3, 3],
            type: 'bar',
            marker: {
                color: ['#8B4513', '#2F4F4F', '#CD853F', '#708090', '#A0522D']
            },
            text: [4, 3, 3, 3, 3],
            textposition: 'auto'
        }];

        const layout = {
            title: 'Aplicaciones por Tecnología',
            xaxis: { title: 'Tecnologías' },
            yaxis: { title: 'Número de Aplicaciones' },
            paper_bgcolor: '#FAF8F5',
            plot_bgcolor: '#FAF8F5',
            font: { family: 'Source Sans Pro, sans-serif', color: '#2C3E50' },
            showlegend: false
        };

        Plotly.newPlot('tecnologias-chart', data, layout, {responsive: true});
    }

    handleFilter(button) {
        // Remover clase active de todos los botones
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        // Aquí iría la lógica de filtrado
        const filterType = button.dataset.filter;
        this.applyFilter(filterType);
    }

    applyFilter(filterType) {
        // Lógica para aplicar filtros a los gráficos
        console.log('Aplicando filtro:', filterType);
        // Implementar filtrado según sea necesario
    }

    // Función para exportar datos
    exportData(format = 'csv') {
        // Lógica para exportar datos en diferentes formatos
        console.log('Exportando datos en formato:', format);
    }

    // Función para compartir dashboard
    shareDashboard() {
        if (navigator.share) {
            navigator.share({
                title: 'Dashboard de Festivales de Arte y Tecnología',
                text: 'Explora el panorama de festivales internacionales dedicados a la investigación en narrativas, tecnología, inmersión y co-creación.',
                url: window.location.href
            });
        } else {
            // Fallback para navegadores que no soportan Web Share API
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                alert('Enlace copiado al portapapeles');
            });
        }
    }
}

// Inicializar dashboard cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new DashboardManager();
});

// Funciones globales para interactividad
window.scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

window.toggleFullscreen = (elementId) => {
    const element = document.getElementById(elementId);
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
};

// Observador de intersección para animaciones
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card, .chart-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});