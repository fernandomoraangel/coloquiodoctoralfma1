// Datos estructurados del marco teórico
const datos = [
  {
    dimension: "Co-Creación Artística",
    atlas_filosofico:
      "**Adorno**: Industria cultural, estandarización; **Bauman**: prosumerismo líquido; **Foucault**: biopoder, dispositivo",
    laboratorio:
      "**Jenkins**: inteligencia colectiva; **Cizek**: co-creación CON no PARA; **Benkler**: procomún; **Meister**: narratología computacional; **LLM como heterónimos**",
    dimension_critica:
      "Riesgo de estandarización (Adorno), captura del valor (Bauman), co-creación como simulacro (Foucault)",
    resultado_esperado:
      "Obra polifónica emergente; resistencia crítica algorítmica",
  },
  {
    dimension: "Identidad del sujeto",
    atlas_filosofico:
      "**Bauman**: Yo líquido; **Foucault**: tecnologías del yo; **Deleuze/Guattari**: Cuerpo sin Órganos",
    laboratorio:
      "**Turkle**: yo proteico; **Bailenson**: Efecto Proteo; **Ellis & Adams**: autoetnografía digital; **Pessoa**: heterónimo",
    dimension_critica:
      "Riesgo de autocorrección (Foucault), pérdida de ipseidad (Ricœur), fragmentación síntoma (Bauman)",
    resultado_esperado:
      "Transformación subjetiva registrada; resistencia identitaria",
  },
  {
    dimension: "Espacio & Medio",
    atlas_filosofico:
      "**Foucault**: milieu, panóptico; **Pardo**: superficie estética; **Baudrillard**: simulacro",
    laboratorio:
      "**Manovich**: base-datos vs. narrativa; **Ryan**: inmersión; **Warburg**: Pathosformeln; **Juul**: sistema reglado",
    dimension_critica:
      "Riesgo de pérdida de profundidad (Pardo), desterritorialización feroz (D/G), simulacro sin exterior (Baudrillard)",
    resultado_esperado:
      "Espacio crítico, háptico, no jerárquico; resistencia perceptiva",
  },
  {
    dimension: "Interacción & Colaboración",
    atlas_filosofico:
      "**Habermas**: acción comunicativa; **Serres**: parásito; **Foucault**: panóptico",
    laboratorio:
      "**Auslander/Dixon**: performatividad digital; **Cizek**: co-creación CON; **Jenkins**: cultura participativa; **Laurel**: interfaz performativa",
    dimension_critica:
      "Riesgo de consenso forzado (Habermas), simulacro de diálogo (Foucault), ruido anulado (Serres)",
    resultado_esperado: "Coordinación simétrica; resistencia comunicativa",
  },
  {
    dimension: "Narrativa inmersiva",
    atlas_filosofico:
      "**Adorno**: exclusión de lo nuevo; **Benjamin**: pérdida del aura",
    laboratorio:
      "**Ricœur**: mímesis; **Campbell**: héroe; **Gadamer**: verdad como evento; **Meister**: event parsing; **Ryan**: exploración = escritura",
    dimension_critica:
      "Riesgo de novedad simulada (Adorno), destrucción del aura (Benjamin), narrativa como mercancía",
    resultado_esperado: "Historias emergentes coherentes; resistencia estética",
  },
  {
    dimension: "Validación & Metodología",
    atlas_filosofico:
      "**Stiegler**: proletarización; **Foucault**: saber-poder; **Chomsky**: propaganda",
    laboratorio:
      "**Barab & Sasha**: DBR; **Haseman**: PaR; **Ellis**: autoetnografía; **Meister**: análisis narrativo",
    dimension_critica:
      "Riesgo de neutralización crítica (Foucault), pérdida de saber-hacer (Stiegler), alineación forzada (Chomsky)",
    resultado_esperado:
      "Conocimiento teórico-práctico transferible; resistencia epistémica",
  },
  {
    dimension: "Presencia & Inmersión",
    atlas_filosofico:
      "**Baudrillard**: simulacro; **Pardo**: tacticismo; **Benjamin**: aura",
    laboratorio:
      "**Lombard & Ditton**: presencia; **Ryan**: inmersión espacial/emocional/temporal; **Lanier**: definición de VR",
    dimension_critica:
      "Riesgo de simulacro de presencia (Baudrillard), pérdida de autenticidad (Benjamin), superficie sin profundidad (Pardo)",
    resultado_esperado: 'Sensación de "estar allí" y vínculo crítico',
  },
  {
    dimension: "Tecnologías inmersivas",
    atlas_filosofico:
      "**Stiegler**: fármakon, gramatización; **Pardo**: regla del juego; **Chomsky**: ideología incrustada",
    laboratorio:
      "**Quest/Vive**: RV; **Meta**: RM; **Ball**: metaverso; **Lanier**: VR; **Sora/DiT**: difusión-transformer; **Stable-Diffusion**: LDM; **MoE**: mezcla de expertos",
    dimension_critica:
      "Riesgo de colonización algorítmica (Foucault), externalización de la memoria (Stiegler), control ideológico (Chomsky)",
    resultado_esperado:
      "Plataformas accesibles y escalables; resistencia técnica",
  },
  {
    dimension: "IA conversacional",
    atlas_filosofico:
      "**Chomsky**: anti-musa, lenguaje estadístico; **Stiegler**: proletarización; **Habermas**: colonización",
    laboratorio:
      "**OpenAI (GPT)**: LLM generativo; **Google (Gemini)**: multimodalidad; **Vaswani**: Transformer; **CLIP**: condicionamiento texto-imagen",
    dimension_critica:
      "Riesgo de homogeneización discursiva (Chomsky), pérdida de intencionalidad (Habermas), anti-musa algorítmica (Stiegler)",
    resultado_esperado: "Agentes heterónimos dinámicos; resistencia discursiva",
  },
  {
    dimension: "Multimodalidad & Interfaces",
    atlas_filosofico:
      "**Stiegler**: gramatización del cuerpo; **Pardo**: superficie táctica",
    laboratorio:
      "**Early/Late Fusion**: fusión multimodal; **Omni-modal**: GPT-4o, Gemini; **Kinect/guantes/trajes**: interfaz corporal; **Haptics/sonoro**: feedback",
    dimension_critica:
      "Riesgo de gramatización del cuerpo (Stiegler), pérdida de resistencia material (Pardo)",
    resultado_esperado: "Interacción natural y crítica",
  },
  {
    dimension: "Estrategias de prompting",
    atlas_filosofico:
      "**Chomsky**: lenguaje estadístico, propaganda; **Serres**: ruido esencial",
    laboratorio:
      "**Chain-of-Thought**: razonamiento paso a paso; **Tree-of-Thoughts**: exploración ramificada; **Graph-of-Thoughts**: razonamiento en grafo; **Prompting como co-autoría**",
    dimension_critica:
      "Riesgo de sobre-optimización (Chomsky), pérdida de contingencia (Serres), exclusión del ruido",
    resultado_esperado:
      "Mayor control y creatividad con LLM; resistencia algorítmica",
  },
  {
    dimension: "Modelos de tiempo narrativo",
    atlas_filosofico:
      "**Stiegler**: tiempo cinemático, proletarización; **Arendt**: initium, capacidad de inicio",
    laboratorio:
      "**Ryan**: tiempo de experiencia; **Hühn**: tiempo de narración; **Grabes**: secuencialidad; **Eco**: pacto ficcional",
    dimension_critica:
      "Riesgo de pérdida de duración (Stiegler), aceleración inhumana (Arendt), stasis performativa",
    resultado_esperado:
      "Análisis fino de la experiencia temporal; resistencia crónica",
  },
  {
    dimension: "Autoría múltiple",
    atlas_filosofico:
      "**Foucault**: función-autor, genealogía; **Bauman**: identidad líquida, performance",
    laboratorio:
      "**Pessoa**: heterónimo; **Kierkegaard**: seudónimos; **Schumann**: Florestán/Eusebius; **Turkle**: yo proteico; **Bailenson**: avatar; **Jenkins**: prosumidor",
    dimension_critica:
      "Riesgo de disolución ética (Foucault), simulacro de autoría (Bauman), pérdida de responsabilidad",
    resultado_esperado:
      "Performance de identidades fragmentadas; resistencia autorial",
  },
];

// Variables globales
let datosFiltrados = [...datos];
let ordenActual = {};

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  inicializarVanta();
  renderizarTabla();
  configurarEventos();
});

// Configurar Vanta.js background
function inicializarVanta() {
  VANTA.BIRDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0xfaf8f3,
    color1: 0xc4704f,
    color2: 0x9caf88,
    colorMode: "lerp",
    birdSize: 1.2,
    wingSpan: 25.0,
    speedLimit: 3.0,
    separation: 20.0,
    alignment: 20.0,
    cohesion: 20.0,
    quantity: 3.0,
  });
}

// Configurar eventos
function configurarEventos() {
  const filterInput = document.getElementById("filterInput");
  const clearFilter = document.getElementById("clearFilter");
  const sortButtons = document.querySelectorAll(".sort-btn");

  // Filtro de búsqueda
  filterInput.addEventListener("input", function () {
    filtrarDatos(this.value);
  });

  // Limpiar filtro
  clearFilter.addEventListener("click", function () {
    filterInput.value = "";
    filtrarDatos("");
  });

  // Ordenamiento
  sortButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const column = this.dataset.column;
      const order = this.dataset.order;
      ordenarDatos(column, order);

      // Actualizar dirección del ordenamiento
      this.dataset.order = order === "asc" ? "desc" : "asc";
    });
  });
}

// Filtrar datos
function filtrarDatos(termino) {
  if (!termino.trim()) {
    datosFiltrados = [...datos];
  } else {
    const terminoLower = termino.toLowerCase();
    datosFiltrados = datos.filter((item) => {
      return Object.values(item).some((valor) =>
        valor.toLowerCase().includes(terminoLower)
      );
    });
  }
  renderizarTabla();
}

// Ordenar datos
function ordenarDatos(columna, orden) {
  datosFiltrados.sort((a, b) => {
    let valorA = a[columna].toLowerCase();
    let valorB = b[columna].toLowerCase();

    if (orden === "asc") {
      return valorA.localeCompare(valorB, "es");
    } else {
      return valorB.localeCompare(valorA, "es");
    }
  });

  renderizarTabla();
}

// Renderizar tabla
function renderizarTabla() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  datosFiltrados.forEach((item, index) => {
    const row = document.createElement("tr");
    row.className = "table-row border-b border-charcoal/10";

    row.innerHTML = `
            <td class="px-6 py-4 align-top">
                <div class="playfair text-lg font-bold text-charcoal mb-2">
                    ${item.dimension}
                </div>
            </td>
            <td class="px-6 py-4 align-top">
                <div class="text-base leading-relaxed">
                    ${formatearContenido(item.atlas_filosofico, "filosofico")}
                </div>
            </td>
            <td class="px-6 py-4 align-top">
                <div class="text-base leading-relaxed">
                    ${formatearContenido(item.laboratorio, "laboratorio")}
                </div>
            </td>
            <td class="px-6 py-4 align-top">
                <div class="text-base leading-relaxed">
                    ${formatearContenido(item.resultado_esperado, "resultado")}
                </div>
            </td>
            <td class="px-6 py-4 align-top">
                <div class="text-base leading-relaxed">
                    ${formatearContenido(item.dimension_critica, "critica")}
                </div>
            </td>
        `;

    tbody.appendChild(row);
  });

  // Añadir animación de aparición
  const rows = tbody.querySelectorAll(".table-row");
  rows.forEach((row, index) => {
    row.style.opacity = "0";
    row.style.transform = "translateY(20px)";

    setTimeout(() => {
      row.style.transition = "all 0.5s ease";
      row.style.opacity = "1";
      row.style.transform = "translateY(0)";
    }, index * 50);
  });
}

// Formatear contenido con estilos específicos
function formatearContenido(texto, tipo) {
  // Reemplazar **texto** con span con clase correspondiente
  let contenidoFormateado = texto.replace(
    /\*\*([^*]+)\*\*/g,
    (match, contenido) => {
      // Extraer solo el nombre del autor (antes del primer ':')
      const nombreAutor = contenido.split(":")[0].trim();

      if (tipo === "filosofico" || tipo === "laboratorio") {
        // Autores filosóficos o del laboratorio - hacerlos clickeables
        const clase = tipo === "filosofico" ? "philosopher" : "concept";
        return `<span class="${clase} author-clickable" onclick="openAuthorModal('${nombreAutor}')">${contenido}</span>`;
      } else if (tipo === "critica") {
        // Riesgos críticos - también clickeable si contiene autor
        if (contenido.includes(":")) {
          return `<span class="risk author-clickable" onclick="openAuthorModal('${nombreAutor}')">${contenido}</span>`;
        }
        return `<span class="risk">${contenido}</span>`;
      } else {
        // Resultados esperados
        return `<span class="result">${contenido}</span>`;
      }
    }
  );

  // Reemplazar saltos de línea por <br>
  contenidoFormateado = contenidoFormateado.replace(/;/g, "<br>");

  return contenidoFormateado;
}

// Función para mostrar/ocultar detalles adicionales (si se necesita en el futuro)
function toggleDetails(element) {
  const details = element.nextElementSibling;
  if (details && details.classList.contains("details-row")) {
    details.classList.toggle("hidden");
  }
}

// Función para exportar datos (si se necesita en el futuro)
function exportarDatos(formato) {
  if (formato === "csv") {
    const csv = convertirACSV(datosFiltrados);
    descargarArchivo(csv, "marco_teorico_bicameral.csv", "text/csv");
  } else if (formato === "json") {
    const json = JSON.stringify(datosFiltrados, null, 2);
    descargarArchivo(json, "marco_teorico_bicameral.json", "application/json");
  }
}

// Función auxiliar para convertir a CSV
function convertirACSV(datos) {
  const headers = [
    "Dimensión clave",
    "Atlas filosófico",
    "Laboratorio",
    "Dimensión crítica",
    "Resultado esperado",
  ];
  const csvContent = [
    headers.join(","),
    ...datos.map((row) =>
      [
        `"${row.dimension}"`,
        `"${row.atlas_filosofico}"`,
        `"${row.laboratorio}"`,
        `"${row.dimension_critica}"`,
        `"${row.resultado_esperado}"`,
      ].join(",")
    ),
  ].join("\\n");

  return csvContent;
}

// Función auxiliar para descargar archivos
function descargarArchivo(contenido, nombre, tipo) {
  const blob = new Blob([contenido], { type: tipo });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = nombre;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

// Función para abrir el modal con los conceptos del autor
function openAuthorModal(autorNombre) {
  // Cargar conceptos del glosario
  fetch("glosario.js")
    .then((response) => response.text())
    .then((data) => {
      // Extraer el array de conceptos del archivo
      const match = data.match(/const conceptos = (\[[\s\S]*?\]);/);
      if (match) {
        const conceptos = eval(match[1]);
        mostrarConceptosAutor(autorNombre, conceptos);
      }
    })
    .catch((error) => {
      console.error("Error al cargar conceptos:", error);
      // Mostrar modal sin conceptos
      mostrarConceptosAutor(autorNombre, []);
    });
}

// Función para mostrar los conceptos del autor en el modal
function mostrarConceptosAutor(autorNombre, conceptos) {
  const modal = document.getElementById("authorModal");
  const modalTitle = document.getElementById("modalAuthorName");
  const conceptsList = document.getElementById("modalConceptsList");

  // Limpiar nombres de autores que pueden tener variaciones
  const autorLimpio = autorNombre.replace(/\/.*$/, "").trim();

  // Filtrar conceptos del autor
  const conceptosAutor = conceptos.filter((c) =>
    c.autores.some((a) => a.includes(autorLimpio))
  );

  // Actualizar título
  modalTitle.textContent = autorNombre;

  // Limpiar lista
  conceptsList.innerHTML = "";

  if (conceptosAutor.length === 0) {
    conceptsList.innerHTML = `
            <div class="concept-item">
                <p class="text-charcoal/70">No se encontraron conceptos en el glosario para este autor.</p>
                <p class="text-charcoal/70 mt-2">Puede explorar el <a href="glosario.html" class="text-terracotta hover:underline font-semibold">glosario completo</a> para más información.</p>
            </div>
        `;
  } else {
    // Crear elementos para cada concepto
    conceptosAutor.forEach((concepto) => {
      const conceptItem = document.createElement("div");
      conceptItem.className = "concept-item";

      const autoresHTML = concepto.autores
        .map((a) => `<span class="author-badge">${a}</span>`)
        .join(" ");

      conceptItem.innerHTML = `
                <h3 class="playfair text-xl font-bold text-charcoal mb-2">${concepto.concepto}</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                    ${autoresHTML}
                    <span class="year-badge">${concepto.año}</span>
                    <span class="category-badge">${concepto.categoria}</span>
                </div>
                <p class="text-sm text-charcoal/70 italic mb-2">
                    <strong>Obra:</strong> ${concepto.obra}
                </p>
                <p class="text-charcoal/90 leading-relaxed">
                    ${concepto.descripcion}
                </p>
            `;

      conceptsList.appendChild(conceptItem);
    });
  }

  // Mostrar modal con animación
  modal.classList.add("active");

  // Cerrar modal al hacer clic fuera del contenido
  modal.onclick = function (event) {
    if (event.target === modal) {
      closeAuthorModal();
    }
  };
}

// Función para cerrar el modal
function closeAuthorModal() {
  const modal = document.getElementById("authorModal");
  modal.classList.remove("active");
}

// Cerrar modal con tecla Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeAuthorModal();
  }
});
