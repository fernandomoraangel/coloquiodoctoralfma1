// Glosario de Conceptos
const conceptos = [
  {
    concepto: "Industria Cultural",
    autores: ["Theodor W. Adorno", "Max Horkheimer"],
    año: 1944,
    obra: "Dialéctica de la Ilustración",
    descripcion:
      "Término que describe el proceso de mercantilización de la cultura y el arte bajo el capitalismo. Adorno y Horkheimer argumentan que los productos culturales se producen en masa según estándares industriales, perdiendo su capacidad crítica y transformándose en mercancías que reproducen la ideología dominante. La cultura deja de ser un espacio de libertad y se convierte en un instrumento de control social.",
    categoria: "Filosofía Crítica",
  },
  {
    concepto: "Modernidad Líquida",
    autores: ["Zygmunt Bauman"],
    año: 2000,
    obra: "Liquid Modernity",
    descripcion:
      "Concepto que caracteriza la era contemporánea como una fase donde todas las estructuras sociales, identidades y relaciones se vuelven fluidas, flexibles y en constante cambio. A diferencia de la modernidad sólida, la líquida se caracteriza por la incertidumbre, la precariedad y la individualización. Las instituciones tradicionales pierden su solidez y los individuos deben construir y reconstruir constantemente sus identidades.",
    categoria: "Sociología",
  },
  {
    concepto: "Prosumerismo",
    autores: ["Zygmunt Bauman"],
    año: 2007,
    obra: "Consuming Life",
    descripcion:
      "Fusión de 'productor' y 'consumidor' que describe al sujeto contemporáneo que simultáneamente produce y consume contenido, especialmente en el contexto digital. El prosumidor borra las fronteras entre creación y consumo, participando activamente en la generación de valor para las plataformas, aunque a menudo sin compensación directa.",
    categoria: "Sociología",
  },
  {
    concepto: "Biopoder",
    autores: ["Michel Foucault"],
    año: 1976,
    obra: "Historia de la sexualidad, Vol. 1",
    descripcion:
      "Forma de poder que se ejerce sobre la vida, las poblaciones y los cuerpos. A diferencia del poder soberano que decidía sobre la muerte, el biopoder administra, optimiza y controla la vida biológica de las poblaciones mediante técnicas de normalización, estadísticas y políticas sanitarias. Este concepto es fundamental para entender cómo el poder moderno opera sobre los cuerpos y las subjetividades.",
    categoria: "Filosofía Política",
  },
  {
    concepto: "Tecnologías del Yo",
    autores: ["Michel Foucault"],
    año: 1988,
    obra: "Technologies of the Self",
    descripcion:
      "Conjunto de técnicas y prácticas mediante las cuales los individuos actúan sobre sí mismos para transformarse, modificar su modo de ser y alcanzar cierto estado de felicidad, pureza o sabiduría. Estas tecnologías permiten a los sujetos efectuar operaciones sobre su propio cuerpo, alma, pensamientos y conducta, constituyendo su propia subjetividad.",
    categoria: "Filosofía Política",
  },
  {
    concepto: "Función-Autor",
    autores: ["Michel Foucault"],
    año: 1969,
    obra: "¿Qué es un autor?",
    descripcion:
      "Principio de agrupación y clasificación de discursos que no se refiere al individuo real que escribió un texto, sino a una función discursiva que permite delimitar, caracterizar y organizar textos. La función-autor es una construcción histórica y cultural que regula la circulación y apropiación de los discursos, estableciendo relaciones de atribución y responsabilidad.",
    categoria: "Teoría Literaria",
  },
  {
    concepto: "Cuerpo sin Órganos (CsO)",
    autores: ["Gilles Deleuze", "Félix Guattari"],
    año: 1972,
    obra: "El Anti-Edipo",
    descripcion:
      "Concepto que designa un cuerpo liberado de la organización jerárquica de los órganos y sus funciones preestablecidas. No se trata de un cuerpo sin órganos literalmente, sino de un cuerpo que escapa a la organización social, a las codificaciones y territorializaciones. Representa un campo de intensidades puras, un proceso de experimentación más que una estructura fija.",
    categoria: "Filosofía",
  },
  {
    concepto: "Inteligencia Colectiva",
    autores: ["Henry Jenkins"],
    año: 2006,
    obra: "Convergence Culture",
    descripcion:
      "Capacidad de las comunidades virtuales para compartir conocimientos y colaborar en la resolución de problemas mediante la participación distribuida. Jenkins sostiene que ningún individuo puede saberlo todo, pero cada uno sabe algo, y ese conocimiento colectivo es más valioso que la suma de los conocimientos individuales. Esta inteligencia emerge especialmente en culturas participativas digitales.",
    categoria: "Estudios de Medios",
  },
  {
    concepto: "Cultura Participativa",
    autores: ["Henry Jenkins"],
    año: 2006,
    obra: "Convergence Culture",
    descripcion:
      "Cultura en la que los consumidores son invitados a participar activamente en la creación y circulación de contenidos. Se caracteriza por barreras bajas para la expresión artística, fuerte apoyo para crear y compartir creaciones, mentoría informal, y donde los miembros sienten que sus contribuciones importan y experimentan algún grado de conexión social entre sí.",
    categoria: "Estudios de Medios",
  },
  {
    concepto: "Co-creación CON (no PARA)",
    autores: ["Viktor Cizek"],
    año: 2018,
    obra: "Collective Wisdom Field Study",
    descripcion:
      "Principio metodológico que enfatiza la diferencia entre crear 'para' las audiencias (modelo tradicional) y crear 'con' las comunidades (modelo colaborativo). La co-creación 'con' implica compartir el poder de decisión, reconocer múltiples formas de conocimiento y establecer relaciones horizontales donde todos los participantes son co-autores legítimos del proceso creativo.",
    categoria: "Metodología",
  },
  {
    concepto: "Procomún",
    autores: ["Yochai Benkler"],
    año: 2006,
    obra: "The Wealth of Networks",
    descripcion:
      "Recursos compartidos por una comunidad donde cada miembro tiene igual derecho de acceso y uso. En el contexto digital, se refiere a recursos de información, conocimiento y cultura que son libremente accesibles y pueden ser utilizados, modificados y redistribuidos. Benkler analiza cómo la producción entre pares basada en el procomún desafía los modelos tradicionales de propiedad intelectual.",
    categoria: "Economía Política",
  },
  {
    concepto: "Yo Proteico",
    autores: ["Sherry Turkle"],
    año: 1995,
    obra: "Life on the Screen",
    descripcion:
      "Identidad fluida y múltiple que emerge en los entornos digitales, donde los individuos pueden experimentar con diferentes aspectos de sí mismos. El término proviene de Proteo, el dios griego que podía cambiar de forma. Turkle observa que las tecnologías digitales permiten a las personas explorar identidades alternativas, cuestionando la noción de un yo unitario y estable.",
    categoria: "Psicología Digital",
  },
  {
    concepto: "Efecto Proteo",
    autores: ["Nick Yee", "Jeremy Bailenson"],
    año: 2007,
    obra: "The Proteus Effect: The Effect of Transformed Self-Representation on Behavior",
    descripcion:
      "Fenómeno por el cual las representaciones digitales de las personas (avatares) influyen en su comportamiento tanto en entornos virtuales como en el mundo físico. Los usuarios tienden a conformar su conducta a las expectativas y estereotipos asociados con la apariencia de su avatar, demostrando cómo la representación digital puede transformar la identidad y el comportamiento.",
    categoria: "Psicología Digital",
  },
  {
    concepto: "Heterónimo",
    autores: ["Fernando Pessoa"],
    año: 1914,
    obra: "Obra Poética (varios heterónimos)",
    descripcion:
      "Personalidad literaria completa con biografía, estilo, visión del mundo y filosofía propias, distinta del autor real. A diferencia del seudónimo (un nombre falso) o el pseudónimo literario, el heterónimo es un autor ficticio con existencia autónoma. Pessoa creó múltiples heterónimos como Alberto Caeiro, Ricardo Reis y Álvaro de Campos, cada uno con su propia voz poética.",
    categoria: "Literatura",
  },
  {
    concepto: "Milieu",
    autores: ["Michel Foucault"],
    año: 1975,
    obra: "Vigilar y Castigar",
    descripcion:
      "Medio o entorno en el que se desarrollan los acontecimientos y las conductas. Para Foucault, el milieu no es simplemente un espacio físico, sino un campo de intervención donde se ejercen técnicas de poder. Es el medio de circulación de efectos y causas, donde los dispositivos disciplinarios operan no sobre individuos aislados sino sobre poblaciones en su ambiente.",
    categoria: "Filosofía Política",
  },
  {
    concepto: "Superficie",
    autores: ["José Luis Pardo"],
    año: 1992,
    obra: "Las formas de la exterioridad",
    descripcion:
      "Concepto que desafía la distinción tradicional entre superficie y profundidad, argumentando que en la cultura contemporánea todo se desarrolla en la superficie, sin que esto implique superficialidad. La superficie no oculta nada profundo detrás; es el lugar mismo donde se produce el sentido. Esto tiene implicaciones para entender el arte, la imagen y la subjetividad contemporáneas.",
    categoria: "Filosofía",
  },
  {
    concepto: "Simulacro",
    autores: ["Jean Baudrillard"],
    año: 1981,
    obra: "Simulacres et Simulation",
    descripcion:
      "Copia sin original, representación que precede y determina lo real en lugar de reflejarlo. Baudrillard argumenta que en la era de la simulación, la distinción entre realidad y representación colapsa. Los simulacros no representan la realidad sino que la sustituyen, creando una 'hiperrrealidad' donde los signos y símbolos son más reales que la realidad misma.",
    categoria: "Filosofía Posmoderna",
  },
  {
    concepto: "Base de Datos",
    autores: ["Lev Manovich"],
    año: 2001,
    obra: "The Language of New Media",
    descripcion:
      "Forma cultural dominante de la era digital que se contrapone a la narrativa. Mientras la narrativa es una trayectoria lineal que conecta elementos en un orden causal-temporal, la base de datos es una colección estructurada de ítems donde cada elemento tiene el mismo peso. Manovich argumenta que la lógica de la base de datos influye profundamente en cómo creamos y experimentamos la cultura digital.",
    categoria: "Teoría de Medios",
  },
  {
    concepto: "Inmersión",
    autores: ["Marie-Laure Ryan"],
    año: 2001,
    obra: "Narrative as Virtual Reality",
    descripcion:
      "Experiencia de ser transportado a un mundo simulado, donde la conciencia del medio se desvanece parcialmente. Ryan distingue tres tipos: espacial (sentirse presente en un espacio), temporal (absorción en el flujo temporal de la narrativa) y emocional (identificación con personajes y eventos). La inmersión requiere un delicado balance entre transparencia del medio y riqueza del mundo representado.",
    categoria: "Teoría Narrativa",
  },
  {
    concepto: "Pathosformeln",
    autores: ["Aby Warburg"],
    año: 1905,
    obra: "Atlas Mnemosyne",
    descripcion:
      "Fórmulas de pathos o expresiones gestuales cargadas emocionalmente que se transmiten a través de la historia del arte occidental. Warburg identificó gestos, poses y expresiones corporales que migran de una época a otra, portando cargas afectivas que sobreviven y se transforman. Estas fórmulas son memoria corporal y visual que trasciende contextos históricos específicos.",
    categoria: "Historia del Arte",
  },
  {
    concepto: "Acción Comunicativa",
    autores: ["Jürgen Habermas"],
    año: 1981,
    obra: "Teoría de la Acción Comunicativa",
    descripcion:
      "Tipo de interacción social donde los participantes no se orientan primariamente por el éxito individual sino por alcanzar entendimiento mutuo. La acción comunicativa se basa en pretensiones de validez (verdad, rectitud, sinceridad) que pueden ser cuestionadas y defendidas mediante razones. Contrasta con la acción estratégica, donde los actores buscan manipular a otros para lograr sus objetivos.",
    categoria: "Filosofía Social",
  },
  {
    concepto: "El Parásito",
    autores: ["Michel Serres"],
    año: 1980,
    obra: "Le Parasite",
    descripcion:
      "Figura que interrumpe la comunicación binaria introduciendo ruido en el sistema, pero que paradójicamente es esencial para la creación de complejidad y novedad. Serres usa el triple sentido francés de 'parasite': parásito biológico, ruido estático y comensal no invitado. El parásito no es simplemente destructivo; transforma las relaciones y genera nuevas configuraciones en los sistemas.",
    categoria: "Filosofía",
  },
  {
    concepto: "Panóptico",
    autores: ["Michel Foucault"],
    año: 1975,
    obra: "Vigilar y Castigar",
    descripcion:
      "Modelo arquitectónico de prisión diseñado por Jeremy Bentham que Foucault utiliza como metáfora del poder disciplinario moderno. En el panóptico, un vigilante puede observar a todos los prisioneros sin ser visto, induciendo en ellos un estado de visibilidad consciente y permanente que asegura el funcionamiento automático del poder. Representa cómo el poder moderno opera mediante la vigilancia interiorizada.",
    categoria: "Filosofía Política",
  },
  {
    concepto: "Performatividad",
    autores: ["Philip Auslander"],
    año: 2008,
    obra: "Liveness: Performance in a Mediatized Culture",
    descripcion:
      "En el contexto de medios digitales, refiere a cómo la presencia y la experiencia en vivo se reconstruyen y negocian en entornos mediados tecnológicamente. Auslander argumenta que lo 'en vivo' no es una categoría ontológica sino cultural, definida en relación con lo mediado. La performatividad digital cuestiona la distinción tradicional entre presencia física y representación mediada.",
    categoria: "Estudios de Performance",
  },
  {
    concepto: "Exclusión de lo Nuevo",
    autores: ["Theodor W. Adorno"],
    año: 1970,
    obra: "Teoría Estética",
    descripcion:
      "Mecanismo mediante el cual la industria cultural integra y neutraliza elementos aparentemente novedosos o transgresores, despojándolos de su potencial crítico. Lo nuevo es constantemente producido como mercancía, pero esta novedad es superficial y no cuestiona las estructuras fundamentales. La verdadera novedad artística, para Adorno, debe resistir su integración en el sistema.",
    categoria: "Estética",
  },
  {
    concepto: "Pérdida del Aura",
    autores: ["Walter Benjamin"],
    año: 1936,
    obra: "La obra de arte en la época de su reproductibilidad técnica",
    descripcion:
      "Concepto que describe cómo la reproducción técnica de las obras de arte elimina su unicidad, su aquí y ahora, su autenticidad. El aura es la cualidad única de una obra en su existencia irrepetible; la reproducción masiva destruye esta singularidad pero también democratiza el acceso al arte y abre posibilidades políticas. Benjamin ve tanto pérdida como potencial emancipador en este proceso.",
    categoria: "Estética",
  },
  {
    concepto: "Mímesis",
    autores: ["Paul Ricœur"],
    año: 1983,
    obra: "Tiempo y Narración",
    descripcion:
      "Proceso de representación narrativa que Ricœur divide en tres momentos: mímesis I (prefiguración del campo práctico), mímesis II (configuración narrativa) y mímesis III (refiguración de la experiencia temporal del lector). La narrativa no simplemente refleja la realidad sino que la reconfigura, creando nuevas comprensiones del tiempo y la acción humana a través del acto de narrar.",
    categoria: "Hermenéutica",
  },
  {
    concepto: "El Viaje del Héroe",
    autores: ["Joseph Campbell"],
    año: 1949,
    obra: "The Hero with a Thousand Faces",
    descripcion:
      "Estructura narrativa arquetípica que Campbell identifica en mitos de diversas culturas. El viaje incluye: partida (llamado a la aventura, rechazo, ayuda sobrenatural), iniciación (pruebas, encuentro con la diosa, reconciliación con el padre), y retorno (rechazo del regreso, cruce del umbral, maestría de dos mundos). Esta estructura ha influido profundamente en la narrativa contemporánea, especialmente en cine y literatura.",
    categoria: "Mitología",
  },
  {
    concepto: "Event Parsing",
    autores: ["Markus Meister"],
    año: 2014,
    obra: "On the Dimensionality of Face Space",
    descripcion:
      "Proceso cognitivo mediante el cual el cerebro segmenta el flujo continuo de experiencia en eventos discretos con límites temporales. Esta segmentación es fundamental para la comprensión narrativa y la memoria. El cerebro identifica cambios significativos en el entorno o la acción para demarcar el inicio y fin de eventos, creando la estructura básica de cómo experimentamos y recordamos historias.",
    categoria: "Neurociencia Cognitiva",
  },
  {
    concepto: "Proletarización del Conocimiento",
    autores: ["Bernard Stiegler"],
    año: 2010,
    obra: "For a New Critique of Political Economy",
    descripcion:
      "Proceso mediante el cual el saber-hacer, el conocimiento y las capacidades cognitivas son exteriorializados en tecnologías y sistemas, resultando en la pérdida de conocimiento individual y colectivo. Análogo a cómo la industrialización proletarizó el trabajo manual, la digitalización proletariza el trabajo intelectual, transfiriendo competencias humanas a algoritmos y bases de datos.",
    categoria: "Filosofía de la Tecnología",
  },
  {
    concepto: "Saber-Poder",
    autores: ["Michel Foucault"],
    año: 1975,
    obra: "Vigilar y Castigar",
    descripcion:
      "Concepto que articula la relación intrínseca entre conocimiento y poder. Para Foucault, no hay relación de poder sin constitución correlativa de un campo de saber, ni saber que no presuponga y constituya relaciones de poder. El saber no es neutral sino que está implicado en redes de poder que determinan qué puede ser dicho, quién puede decirlo y qué cuenta como verdadero.",
    categoria: "Filosofía Política",
  },
  {
    concepto: "Modelo de Propaganda",
    autores: ["Noam Chomsky", "Edward Herman"],
    año: 1988,
    obra: "Manufacturing Consent",
    descripcion:
      "Teoría que explica cómo los medios de comunicación de masas funcionan como sistema de propaganda en democracias. Identifica cinco filtros: propiedad, publicidad, fuentes, contraataques y anticomunismo (posteriormente actualizado a miedo ideológico). Estos filtros sistematizan cómo ciertos mensajes son promovidos mientras otros son marginalizados, manufacturando el consentimiento público.",
    categoria: "Teoría de la Comunicación",
  },
  {
    concepto: "Design-Based Research (DBR)",
    autores: ["Sasha Barab", "Kurt Squire"],
    año: 2004,
    obra: "Design-Based Research: Putting a Stake in the Ground",
    descripcion:
      "Metodología que combina diseño de intervenciones educativas con investigación sobre el aprendizaje. El DBR es iterativo, orientado a la práctica, y produce tanto artefactos funcionales como conocimiento teórico. Los investigadores diseñan, implementan, analizan y rediseñan intervenciones en contextos reales, generando teorías fundamentadas en la práctica.",
    categoria: "Metodología",
  },
  {
    concepto: "Practice as Research (PaR)",
    autores: ["Brad Haseman"],
    año: 2006,
    obra: "A Manifesto for Performative Research",
    descripcion:
      "Paradigma de investigación donde la práctica creativa es en sí misma un método de investigación que genera conocimiento. El PaR reconoce que practicantes-investigadores producen conocimiento a través de hacer, realizar y crear. Los resultados de investigación pueden ser performances, obras de arte u otros artefactos creativos que comunican insights de formas no exclusivamente textuales.",
    categoria: "Metodología",
  },
  {
    concepto: "Autoetnografía",
    autores: ["Carolyn Ellis"],
    año: 2004,
    obra: "The Ethnographic I: A Methodological Novel about Autoethnography",
    descripcion:
      "Método de investigación cualitativa que conecta lo personal con lo cultural, colocando al yo en el contexto social. El investigador utiliza su propia experiencia para ilustrar facetas de la experiencia cultural, haciendo que las características personales y distintivas sean comprensibles y evocativas para los demás. Combina características de autobiografía y etnografía.",
    categoria: "Metodología",
  },
  {
    concepto: "Presencia",
    autores: ["Matthew Lombard", "Theresa Ditton"],
    año: 1997,
    obra: "At the Heart of It All: The Concept of Presence",
    descripcion:
      "Ilusión perceptual de no-mediación, la experiencia de sentirse presente en un entorno mediado en lugar de en el entorno físico real. Lombard y Ditton identifican seis conceptualizaciones: presencia como realismo social, como inmersión, como transporte, como realismo perceptual, como presencia social, y como interacción con el medio como si no estuviera presente.",
    categoria: "Tecnología de Medios",
  },
  {
    concepto: "Realidad Virtual",
    autores: ["Jaron Lanier"],
    año: 1989,
    obra: "Dawn of the New Everything",
    descripcion:
      "Entorno generado por computadora con el que se puede interactuar de manera aparentemente real o física. Lanier, quien popularizó el término, define VR como una experiencia donde se sustituye tu entorno sensorial con uno sintético. No es simplemente ver imágenes 3D, sino estar dentro de un mundo simulado donde tus acciones tienen consecuencias y el mundo responde a tu presencia.",
    categoria: "Tecnología",
  },
  {
    concepto: "Fármacon",
    autores: ["Bernard Stiegler"],
    año: 2010,
    obra: "Taking Care of Youth and the Generations",
    descripcion:
      "Concepto derivado de Platón que designa a la tecnología como simultáneamente remedio y veneno. Las tecnologías no son neutras sino ambivalentes: pueden ser terapéuticas (curar, potenciar) o tóxicas (debilitar, intoxicar). La cuestión no es rechazar o abrazar la tecnología, sino comprender sus efectos ambivalentes y desarrollar una farmacología positiva que maximice sus aspectos curativos.",
    categoria: "Filosofía de la Tecnología",
  },
  {
    concepto: "Regla del Juego",
    autores: ["José Luis Pardo"],
    año: 1996,
    obra: "La intimidad",
    descripcion:
      "Estructura que define el espacio de posibilidades y límites dentro del cual se desarrolla una actividad. Pardo argumenta que las reglas no son restrictivas sino constitutivas: no limitan un juego preexistente sino que crean el espacio mismo del juego. En el contexto tecnológico, las interfaces y plataformas establecen reglas que determinan qué es posible hacer y pensar.",
    categoria: "Filosofía",
  },
  {
    concepto: "Transformer",
    autores: ["Ashish Vaswani et al."],
    año: 2017,
    obra: "Attention Is All You Need",
    descripcion:
      "Arquitectura de red neuronal que revolucionó el procesamiento de lenguaje natural mediante el mecanismo de atención. Los Transformers pueden procesar secuencias completas de datos en paralelo y aprender relaciones de largo alcance entre elementos. Esta arquitectura es la base de modelos como GPT, BERT y la mayoría de sistemas de IA conversacional actuales.",
    categoria: "Inteligencia Artificial",
  },
  {
    concepto: "Colonización del Mundo de la Vida",
    autores: ["Jürgen Habermas"],
    año: 1981,
    obra: "Teoría de la Acción Comunicativa",
    descripcion:
      "Proceso mediante el cual la racionalidad instrumental-estratégica de los sistemas (economía, burocracia) invade y subordina el mundo de la vida (familia, cultura, interacciones comunicativas). Esta colonización reemplaza la coordinación de acciones mediante entendimiento mutuo con mecanismos sistémicos como dinero y poder, erosionando la solidaridad social y la formación de identidad.",
    categoria: "Filosofía Social",
  },
  {
    concepto: "Anti-Musa",
    autores: ["Noam Chomsky"],
    año: 2023,
    obra: "Noam Chomsky: The False Promise of ChatGPT",
    descripcion:
      "Crítica de Chomsky a los grandes modelos de lenguaje como ChatGPT, argumentando que representan lo opuesto a la creatividad genuina. Mientras la musa inspira creación original y significativa, estos sistemas generan texto estadísticamente probable sin comprensión real, reemplazando la creatividad humana con patrones derivados de datos masivos sin insight genuino o capacidad crítica.",
    categoria: "Filosofía del Lenguaje",
  },
  {
    concepto: "Gramatización",
    autores: ["Bernard Stiegler"],
    año: 2010,
    obra: "For a New Critique of Political Economy",
    descripcion:
      "Proceso de discretización y formalización mediante el cual comportamientos continuos se transforman en elementos reproducibles y manipulables. Stiegler analiza cómo la escritura gramatizó el habla, la imprenta el texto manuscrito, y cómo las tecnologías digitales gramatizan gestos, movimientos y procesos cognitivos, externalizándolos en sistemas técnicos que pueden ser calculados y controlados.",
    categoria: "Filosofía de la Tecnología",
  },
  {
    concepto: "Tacticismo",
    autores: ["José Luis Pardo"],
    año: 1992,
    obra: "Las formas de la exterioridad",
    descripcion:
      "Modo de relación con el espacio y las prácticas que se caracteriza por la adaptación oportunista al terreno existente sin transformación estratégica profunda. Las tácticas operan en el terreno impuesto por otros, aprovechando ocasiones y grietas del sistema. En el contexto digital, refiere a cómo los usuarios navegan plataformas que no controlan, encontrando usos alternativos sin poder cambiar las estructuras fundamentales.",
    categoria: "Filosofía",
  },
  {
    concepto: "Chain-of-Thought",
    autores: ["Jason Wei et al. (Google Research)"],
    año: 2022,
    obra: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
    descripcion:
      "Técnica de prompting que mejora el razonamiento de los LLM al solicitar que generen pasos intermedios de razonamiento antes de producir la respuesta final. Al explicitar el proceso de pensamiento paso a paso, los modelos pueden resolver problemas más complejos que requieren razonamiento multi-paso, mejorando significativamente su desempeño en tareas de lógica y matemáticas.",
    categoria: "Inteligencia Artificial",
  },
  {
    concepto: "Tree-of-Thoughts",
    autores: ["Shunyu Yao et al."],
    año: 2023,
    obra: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
    descripcion:
      "Marco de resolución de problemas para LLM que generaliza Chain-of-Thought permitiendo exploración de múltiples caminos de razonamiento. El modelo genera y evalúa diferentes ramas de pensamiento, puede retroceder cuando una ruta no es prometedora, y explora el espacio de soluciones de manera más deliberada, similar a cómo los humanos consideran múltiples opciones antes de decidir.",
    categoria: "Inteligencia Artificial",
  },
  {
    concepto: "Graph-of-Thoughts",
    autores: ["Maciej Besta et al."],
    año: 2023,
    obra: "Graph of Thoughts: Solving Elaborate Problems with Large Language Models",
    descripcion:
      "Paradigma de prompting que modela el razonamiento como un grafo donde los pensamientos (nodos) pueden conectarse de formas arbitrarias, no solo lineales o arbóreas. Permite agregación de información de múltiples fuentes, loops de refinamiento, y estructuras complejas de dependencias entre pensamientos, facilitando la resolución de problemas que requieren combinación de múltiples perspectivas.",
    categoria: "Inteligencia Artificial",
  },
  {
    concepto: "Tiempo Cinemático",
    autores: ["Bernard Stiegler"],
    año: 2001,
    obra: "La technique et le temps, 3. Le temps du cinéma",
    descripcion:
      "Temporalidad específica de la imagen en movimiento que difiere tanto del tiempo vivido como del tiempo cronométrico. El cine produce objetos temporales que tienen su propia duración y que pueden repetirse idénticamente, creando una forma de memoria y conciencia colectiva. Stiegler analiza cómo las tecnologías de grabación temporal transforman nuestra relación con el tiempo y la memoria.",
    categoria: "Filosofía de la Tecnología",
  },
  {
    concepto: "Natalidad (Initium)",
    autores: ["Hannah Arendt"],
    año: 1958,
    obra: "The Human Condition",
    descripcion:
      "Capacidad humana fundamental de iniciar algo nuevo, de comenzar algo inesperado que no puede derivarse de lo que vino antes. Para Arendt, la natalidad es la categoría central de la política: cada nuevo nacimiento trae al mundo la posibilidad de lo radicalmente nuevo. La acción humana, en su imprevisibilidad y capacidad de innovación, está enraizada en esta condición de natalidad.",
    categoria: "Filosofía Política",
  },
  {
    concepto: "Tiempo de Experiencia vs. Tiempo de Narración",
    autores: ["Marie-Laure Ryan"],
    año: 2001,
    obra: "Narrative as Virtual Reality",
    descripcion:
      "Distinción entre el tiempo que toma experimentar una narrativa (tiempo de lectura/visionado) y el tiempo representado en el mundo de la historia. En narrativas interactivas, esta relación se complica porque el usuario tiene control sobre el ritmo y puede explorar el espacio narrativo de formas no-lineales. Ryan analiza cómo diferentes medios gestionan esta relación temporal.",
    categoria: "Teoría Narrativa",
  },
  {
    concepto: "Identidad Líquida",
    autores: ["Zygmunt Bauman"],
    año: 2004,
    obra: "Identity",
    descripcion:
      "Concepción de la identidad como flexible, fragmentada y en constante reconstrucción, característica de la modernidad líquida. Las identidades ya no son fijas sino proyectos en curso, montajes temporales que deben ser constantemente actualizados. Esta liquidez refleja la incertidumbre y precariedad de la vida contemporánea, donde las estructuras que antes estabilizaban la identidad se han disuelto.",
    categoria: "Sociología",
  },
];

// State
let filteredConcepts = [...conceptos];
let activeFilters = {
  authors: new Set(),
  categories: new Set(),
  decades: new Set(),
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initVanta();
  generateFilterButtons();
  renderConcepts();
  setupEventListeners();
});

// Vanta background
function initVanta() {
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
    wingSpan: 20.0,
    speedLimit: 4.0,
    separation: 50.0,
    alignment: 50.0,
    cohesion: 50.0,
    quantity: 3.0,
  });
}

// Generate filter buttons dynamically
function generateFilterButtons() {
  // Extract unique authors
  const authors = new Set();
  conceptos.forEach((c) => {
    c.autores.forEach((a) => authors.add(a));
  });
  const sortedAuthors = Array.from(authors).sort();

  // Extract unique categories
  const categories = new Set(conceptos.map((c) => c.categoria));
  const sortedCategories = Array.from(categories).sort();

  // Extract decades
  const decades = new Set();
  conceptos.forEach((c) => {
    const decade = Math.floor(c.año / 10) * 10;
    decades.add(decade);
  });
  const sortedDecades = Array.from(decades).sort();

  // Render author filters
  const authorFilters = document.getElementById("authorFilters");
  sortedAuthors.forEach((author) => {
    const btn = createFilterButton(author, "author");
    authorFilters.appendChild(btn);
  });

  // Render category filters
  const categoryFilters = document.getElementById("categoryFilters");
  sortedCategories.forEach((category) => {
    const btn = createFilterButton(category, "category");
    categoryFilters.appendChild(btn);
  });

  // Render year filters
  const yearFilters = document.getElementById("yearFilters");
  sortedDecades.forEach((decade) => {
    const btn = createFilterButton(`${decade}s`, "decade", decade);
    yearFilters.appendChild(btn);
  });
}

function createFilterButton(label, type, value = null) {
  const btn = document.createElement("button");
  btn.className =
    "filter-btn px-4 py-2 rounded-lg bg-white/80 hover:bg-white transition-colors text-sm font-medium text-charcoal";
  btn.textContent = label;
  btn.dataset.type = type;
  btn.dataset.value = value || label;

  btn.addEventListener("click", () => {
    toggleFilter(type, value || label, btn);
  });

  return btn;
}

function toggleFilter(type, value, btn) {
  const filterSet =
    type === "author"
      ? activeFilters.authors
      : type === "category"
      ? activeFilters.categories
      : activeFilters.decades;

  if (filterSet.has(value)) {
    filterSet.delete(value);
    btn.classList.remove("active");
  } else {
    filterSet.add(value);
    btn.classList.add("active");
  }

  applyFilters();
}

function applyFilters() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();

  filteredConcepts = conceptos.filter((concepto) => {
    // Search filter
    const matchesSearch =
      searchTerm === "" ||
      concepto.concepto.toLowerCase().includes(searchTerm) ||
      concepto.autores.some((a) => a.toLowerCase().includes(searchTerm)) ||
      concepto.obra.toLowerCase().includes(searchTerm) ||
      concepto.descripcion.toLowerCase().includes(searchTerm) ||
      concepto.categoria.toLowerCase().includes(searchTerm);

    // Author filter
    const matchesAuthor =
      activeFilters.authors.size === 0 ||
      concepto.autores.some((a) => activeFilters.authors.has(a));

    // Category filter
    const matchesCategory =
      activeFilters.categories.size === 0 ||
      activeFilters.categories.has(concepto.categoria);

    // Decade filter
    const decade = Math.floor(concepto.año / 10) * 10;
    const matchesDecade =
      activeFilters.decades.size === 0 || activeFilters.decades.has(decade);

    return matchesSearch && matchesAuthor && matchesCategory && matchesDecade;
  });

  renderConcepts();
  updateResultsCount();
}

function renderConcepts() {
  const grid = document.getElementById("conceptsGrid");
  const noResults = document.getElementById("noResults");

  grid.innerHTML = "";

  if (filteredConcepts.length === 0) {
    grid.classList.add("hidden");
    noResults.classList.remove("hidden");
    return;
  }

  grid.classList.remove("hidden");
  noResults.classList.add("hidden");

  filteredConcepts.forEach((concepto) => {
    const card = createConceptCard(concepto);
    grid.appendChild(card);
  });
}

function createConceptCard(concepto) {
  const card = document.createElement("div");
  card.className = "concept-card rounded-xl p-6 shadow-lg";

  const authorsHTML = concepto.autores
    .map((a) => `<span class="author-badge">${a}</span>`)
    .join(" ");

  card.innerHTML = `
        <div class="mb-4">
            <h3 class="playfair text-2xl font-bold text-charcoal mb-3">${concepto.concepto}</h3>
            <div class="flex flex-wrap gap-2 mb-3">
                ${authorsHTML}
                <span class="year-badge">${concepto.año}</span>
                <span class="category-badge">${concepto.categoria}</span>
            </div>
        </div>
        <div class="mb-4">
            <p class="text-sm text-charcoal/70 italic mb-2">
                <strong>Obra:</strong> ${concepto.obra}
            </p>
        </div>
        <div>
            <p class="text-charcoal/90 leading-relaxed">
                ${concepto.descripcion}
            </p>
        </div>
    `;

  return card;
}

function updateResultsCount() {
  const resultsCount = document.getElementById("resultsCount");
  const total = conceptos.length;
  const filtered = filteredConcepts.length;

  if (filtered === total) {
    resultsCount.textContent = `Mostrando ${total} conceptos`;
  } else {
    resultsCount.textContent = `Mostrando ${filtered} de ${total} conceptos`;
  }
}

function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", debounce(applyFilters, 300));

  // Clear filters button
  const clearButton = document.getElementById("clearFilters");
  clearButton.addEventListener("click", () => {
    // Clear search
    searchInput.value = "";

    // Clear all filter sets
    activeFilters.authors.clear();
    activeFilters.categories.clear();
    activeFilters.decades.clear();

    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn.active").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Apply filters (will show all)
    applyFilters();
  });
}

// Utility: Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize results count
updateResultsCount();
