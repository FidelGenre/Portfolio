// Diccionario de traducciones EN / ES.
// Las claves se consumen vía el hook useLang() -> t.<seccion>.<clave>
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "Software Developer",
      description: "Crafting web experiences with modern technologies and clean code.",
      tagline: "I write the code so you don’t have to — let’s connect!",
      viewWork: "View Work",
      contactMe: "Contact Me",
      goToAbout: "Go to About",
    },
    about: {
      title: "About Me",
      p1: "I'm Fidel Genre, a Software Engineer dedicated to building scalable digital solutions that bridge the gap between robust enterprise architectures and modern web technologies.",
      p2: "I specialize in crafting high-performance applications with a strong focus on security, efficiency, and user experience. Whether I'm architecting complex relational databases, building RESTful APIs, or developing dynamic interfaces, I enjoy transforming complex challenges into elegant, production-ready solutions.",
      p3: "I am driven by a constant curiosity for emerging technologies and a commitment to clean code. My goal is to create impactful digital experiences that are both functional and future-proof.",
      viewCV: "View CV",
      introduction: "INTRODUCTION",
      overviewTitle: "Overview.",
      overviewDescription:
        "These are the areas I work on, along with the technologies and tools I use to build efficient, scalable, and user-friendly solutions.",
      developer: "Developer",
      technologies: "Technologies",
      tools: "Tools & Platforms",
      viewMore: "View More",
      viewLess: "View Less",
    },
    projects: {
      title: "My Recent Works",
      subtitle: "Here are a few projects I've worked on recently.",
      viewProject: "View Project",
      code: "Code",
      seeMore: "See More on GitHub",
      items: {
        ecommerce: {
          title: "E-Commerce/Inventory-Gestor",
          description:
            "e-commerce project for a coffee beans brand. Users can explore different coffee products, view detailed information, add items to the cart, and place orders. The system also includes basic product and inventory management features",
        },
        lpticket: {
          title: "LPTicket",
          description:
            "Digital ticketing platform to buy, sell, publish and validate tickets for concerts, festivals, conferences, sports and more. Includes QR / PDF / Apple & Google Wallet tickets, Stripe payments, and an AI support assistant.",
        },
        elpacto: {
          title: "El Pacto BC",
          description:
            "Digital-native basketball club fan app (PWA). Fans take part in club decisions, earn XP and credits, follow events, spin a daily reward wheel, vote in the community and support social-impact projects.",
        },
        stealthbid: {
          title: "StealthBid (Agentic Commerce Web3)",
          description:
            "First B2B marketplace for autonomous AI agents. Features privacy-first negotiations using SKALE BITE v2 (Threshold Encryption), gasless settlements via Coinbase x402, and verifiable audit trails with Google AP2.",
        },
        social: {
          title: "Social Network",
          description:
            "Social network project designed to connect users through profiles and interactions. Allows user registration, content sharing, and basic social interactions such as following and engagement. Focused on core social features and user experience.",
        },
      },
    },
    contact: {
      title: "Contact",
      subtitle:
        "Do you have a project in mind? Don’t hesitate to contact me. I’m always open to discussing new projects, creative ideas, or opportunities.",
      infoTitle: "Contact Information",
      location: "Argentina",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "✅ Message sent successfully!",
      error: "❌ Something went wrong.",
      network: "❌ Network error. Please try again.",
    },
    footer: {
      rights: "© 2025 Fidel Genre. All rights reserved.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      title: "Desarrollador de Software",
      description: "Creando experiencias web con tecnologías modernas y código limpio.",
      tagline: "Yo escribo el código para que vos no tengas que hacerlo — ¡conectemos!",
      viewWork: "Ver Proyectos",
      contactMe: "Contactame",
      goToAbout: "Ir a Sobre mí",
    },
    about: {
      title: "Sobre mí",
      p1: "Soy Fidel Genre, un Ingeniero de Software dedicado a construir soluciones digitales escalables que conectan arquitecturas empresariales robustas con tecnologías web modernas.",
      p2: "Me especializo en crear aplicaciones de alto rendimiento con un fuerte enfoque en seguridad, eficiencia y experiencia de usuario. Ya sea diseñando bases de datos relacionales complejas, construyendo APIs RESTful o desarrollando interfaces dinámicas, disfruto transformar desafíos complejos en soluciones elegantes y listas para producción.",
      p3: "Me impulsa una curiosidad constante por las tecnologías emergentes y un compromiso con el código limpio. Mi objetivo es crear experiencias digitales con impacto, que sean funcionales y preparadas para el futuro.",
      viewCV: "Ver CV",
      introduction: "INTRODUCCIÓN",
      overviewTitle: "Resumen.",
      overviewDescription:
        "Estas son las áreas en las que trabajo, junto con las tecnologías y herramientas que uso para construir soluciones eficientes, escalables y fáciles de usar.",
      developer: "Desarrollador",
      technologies: "Tecnologías",
      tools: "Herramientas y Plataformas",
      viewMore: "Ver más",
      viewLess: "Ver menos",
    },
    projects: {
      title: "Mis Trabajos Recientes",
      subtitle: "Estos son algunos proyectos en los que trabajé recientemente.",
      viewProject: "Ver Proyecto",
      code: "Código",
      seeMore: "Ver más en GitHub",
      items: {
        ecommerce: {
          title: "E-Commerce / Gestor de Inventario",
          description:
            "Proyecto de e-commerce para una marca de granos de café. Los usuarios pueden explorar distintos productos, ver información detallada, agregar artículos al carrito y realizar pedidos. El sistema también incluye funciones básicas de gestión de productos e inventario.",
        },
        lpticket: {
          title: "LPTicket",
          description:
            "Plataforma de ticketing digital para comprar, vender, publicar y validar entradas para conciertos, festivales, conferencias, deportes y más. Incluye tickets con QR / PDF / Apple & Google Wallet, pagos con Stripe y un asistente de soporte con IA.",
        },
        elpacto: {
          title: "El Pacto BC",
          description:
            "App de fans (PWA) de un club de baloncesto nativo digital. Los fans participan en decisiones del club, ganan XP y créditos, siguen eventos, giran una ruleta de recompensas diaria, votan en la comunidad y apoyan proyectos de impacto social.",
        },
        stealthbid: {
          title: "StealthBid (Comercio Agéntico Web3)",
          description:
            "Primer marketplace B2B para agentes de IA autónomos. Ofrece negociaciones privadas con SKALE BITE v2 (Cifrado por Umbral), liquidaciones sin gas vía Coinbase x402 y registros de auditoría verificables con Google AP2.",
        },
        social: {
          title: "Red Social",
          description:
            "Proyecto de red social diseñado para conectar usuarios a través de perfiles e interacciones. Permite el registro de usuarios, compartir contenido e interacciones sociales básicas como seguir y participar. Enfocado en funciones sociales centrales y la experiencia de usuario.",
        },
      },
    },
    contact: {
      title: "Contacto",
      subtitle:
        "¿Tenés un proyecto en mente? No dudes en contactarme. Siempre estoy abierto a hablar sobre nuevos proyectos, ideas creativas u oportunidades.",
      infoTitle: "Información de Contacto",
      location: "Argentina",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "✅ ¡Mensaje enviado con éxito!",
      error: "❌ Algo salió mal.",
      network: "❌ Error de red. Intentá de nuevo.",
    },
    footer: {
      rights: "© 2025 Fidel Genre. Todos los derechos reservados.",
    },
  },
} as const;

export type Lang = keyof typeof translations;
