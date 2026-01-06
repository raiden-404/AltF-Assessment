import { createContext, useState, useContext, useEffect } from "react";

// 1. The Dictionary: Contains text for ALL components in 4 languages
const translations = {
  // --- ENGLISH ---
  en: {
    nav: {
      tools: "Tools",
      categories: "Categories",
      resources: "Resources",
      about: "About",
      searchTools: "Search tools...",
      getStarted: "Get Started"
    },
    hero: {
      titlePart1: "All Your Daily Tools.",
      titlePart2: "One Powerful Platform.",
      subtitle: "Convert, calculate, analyze, and get things done faster with clean, ad-free micro tools.",
      try: "Try Now",
      explore: "Explore Tools",
      features: {
        tools: { title: "100+ Tools", desc: "Works for everyone" },
        secure: { title: "Secure & Private", desc: "Your data stays private" },
        ads: { title: "Ad-Free", desc: "No ads, no distractions" },
        powerful: { title: "Powerful", desc: "Small tools, big impact" }
      }
    },
    featured: {
      badge: "Featured",
      title: "Popular Tools Loved by Users",
      subtitle: "Discover productivity-focused tools crafted for speed and simplicity.",
      rating: "Rated 4.9/5 by our community"
    },
    build: {
      title: "What Do You Want to Build Today?",
      subtitle: "Over 100+ tools ready to use instantly",
      searchPlaceholder: "Search tools..."
    },
    categories: {
      badge: "Categories",
      title: "Built for Every Type of User",
      subtitle: "Flexible tools designed to fit every workflow.",
      viewAll: "View all categories",
      items: {
        prod: "Productivity",
        dev: "Development",
        design: "Design",
        util: "Utilities",
        track: "Trackers",
        math: "Math",
        security: "Security"
      }
    },
    footer: {
      desc: "A comprehensive collection of micro tools designed to make your workflow easier and more efficient.",
      cats: "Categories",
      comp: "Company",
      links: { home: "Home", about: "About Us", contact: "Contact Us", all: "All Tools" },
      contactTitle: "Contact Us",
      rights: "Copyright © 2025 Alt F. All Rights Reserved",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy"
    }
  },

  // --- SPANISH ---
  es: {
    nav: {
      tools: "Herramientas",
      categories: "Categorías",
      resources: "Recursos",
      about: "Nosotros",
      searchTools: "Buscar...",
      getStarted: "Empezar"
    },
    hero: {
      titlePart1: "Tus herramientas diarias.",
      titlePart2: "Una plataforma potente.",
      subtitle: "Convierte, calcula, analiza y haz las cosas más rápido con herramientas limpias y sin anuncios.",
      try: "Probar Ahora",
      explore: "Explorar",
      features: {
        tools: { title: "100+ Herramientas", desc: "Para todos" },
        secure: { title: "Seguro y Privado", desc: "Tus datos están seguros" },
        ads: { title: "Sin Anuncios", desc: "Sin distracciones" },
        powerful: { title: "Potente", desc: "Gran impacto" }
      }
    },
    featured: {
      badge: "Destacado",
      title: "Herramientas Populares",
      subtitle: "Descubre herramientas de productividad creadas para la velocidad y simplicidad.",
      rating: "Calificado 4.9/5 por la comunidad"
    },
    build: {
      title: "¿Qué quieres construir hoy?",
      subtitle: "Más de 100+ herramientas listas para usar",
      searchPlaceholder: "Buscar herramientas..."
    },
    categories: {
      badge: "Categorías",
      title: "Creado para todo usuario",
      subtitle: "Herramientas flexibles diseñadas para cada flujo de trabajo.",
      viewAll: "Ver todas",
      items: {
        prod: "Productividad",
        dev: "Desarrollo",
        design: "Diseño",
        util: "Utilidades",
        track: "Rastreadores",
        math: "Matemáticas",
        security: "Seguridad"
      }
    },
    footer: {
      desc: "Una colección completa de micro herramientas diseñadas para facilitar tu flujo de trabajo.",
      cats: "Categorías",
      comp: "Compañía",
      links: { home: "Inicio", about: "Nosotros", contact: "Contacto", all: "Herramientas" },
      contactTitle: "Contáctanos",
      rights: "Copyright © 2025 Alt F. Todos los derechos reservados",
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad"
    }
  },

  // --- FRENCH ---
  fr: {
    nav: {
      tools: "Outils",
      categories: "Catégories",
      resources: "Ressources",
      about: "À propos",
      searchTools: "Rechercher...",
      getStarted: "Commencer"
    },
    hero: {
      titlePart1: "Vos outils quotidiens.",
      titlePart2: "Une plateforme puissante.",
      subtitle: "Convertissez, calculez, analysez et travaillez plus rapidement avec des outils sans publicité.",
      try: "Essayer",
      explore: "Explorer",
      features: {
        tools: { title: "100+ Outils", desc: "Pour tout le monde" },
        secure: { title: "Sécurisé & Privé", desc: "Vos données restent privées" },
        ads: { title: "Sans Publicité", desc: "Aucune distraction" },
        powerful: { title: "Puissant", desc: "Petit outil, grand impact" }
      }
    },
    featured: {
      badge: "En Vedette",
      title: "Outils Populaires",
      subtitle: "Découvrez des outils de productivité conçus pour la vitesse et la simplicité.",
      rating: "Noté 4.9/5 par notre communauté"
    },
    build: {
      title: "Que voulez-vous construire ?",
      subtitle: "Plus de 100 outils prêts à l'emploi instantanément",
      searchPlaceholder: "Chercher un outil..."
    },
    categories: {
      badge: "Catégories",
      title: "Conçu pour tous",
      subtitle: "Des outils flexibles conçus pour chaque flux de travail.",
      viewAll: "Voir tout",
      items: {
        prod: "Productivité",
        dev: "Développement",
        design: "Design",
        util: "Utilitaires",
        track: "Suivi",
        math: "Mathématiques",
        security: "Sécurité"
      }
    },
    footer: {
      desc: "Une collection complète de micro-outils conçus pour rendre votre travail plus efficace.",
      cats: "Catégories",
      comp: "Entreprise",
      links: { home: "Accueil", about: "À propos", contact: "Contact", all: "Outils" },
      contactTitle: "Contactez-nous",
      rights: "Copyright © 2025 Alt F. Tous droits réservés",
      terms: "Termes et Conditions",
      privacy: "Politique de Confidentialité"
    }
  },

  // --- GERMAN ---
  de: {
    nav: {
      tools: "Werkzeuge",
      categories: "Kategorien",
      resources: "Ressourcen",
      about: "Über uns",
      searchTools: "Suchen...",
      getStarted: "Loslegen"
    },
    hero: {
      titlePart1: "Ihre täglichen Tools.",
      titlePart2: "Eine starke Plattform.",
      subtitle: "Konvertieren, berechnen und analysieren Sie schneller mit werbefreien Mikro-Tools.",
      try: "Jetzt Testen",
      explore: "Erkunden",
      features: {
        tools: { title: "100+ Werkzeuge", desc: "Funktioniert für jeden" },
        secure: { title: "Sicher & Privat", desc: "Ihre Daten bleiben privat" },
        ads: { title: "Werbefrei", desc: "Keine Werbung, keine Ablenkung" },
        powerful: { title: "Leistungsstark", desc: "Kleine Tools, große Wirkung" }
      }
    },
    featured: {
      badge: "Vorgestellt",
      title: "Beliebte Werkzeuge",
      subtitle: "Entdecken Sie Produktivitäts-Tools, die auf Geschwindigkeit und Einfachheit ausgelegt sind.",
      rating: "Bewertet mit 4.9/5 von unserer Community"
    },
    build: {
      title: "Was möchten Sie heute bauen?",
      subtitle: "Über 100+ Tools sofort einsatzbereit",
      searchPlaceholder: "Werkzeuge suchen..."
    },
    categories: {
      badge: "Kategorien",
      title: "Für jeden Nutzertyp gebaut",
      subtitle: "Flexible Werkzeuge für jeden Arbeitsablauf.",
      viewAll: "Alle anzeigen",
      items: {
        prod: "Produktivität",
        dev: "Entwicklung",
        design: "Design",
        util: "Dienstprogramme",
        track: "Tracker",
        math: "Mathe",
        security: "Sicherheit"
      }
    },
    footer: {
      desc: "Eine umfassende Sammlung von Mikro-Tools, um Ihren Arbeitsablauf einfacher und effizienter zu gestalten.",
      cats: "Kategorien",
      comp: "Unternehmen",
      links: { home: "Startseite", about: "Über uns", contact: "Kontakt", all: "Alle Tools" },
      contactTitle: "Kontaktieren Sie uns",
      rights: "Copyright © 2025 Alt F. Alle Rechte vorbehalten",
      terms: "Allgemeine Geschäftsbedingungen",
      privacy: "Datenschutzrichtlinie"
    }
  }
};

// 2. Create Context
const LanguageContext = createContext();

// 3. Create Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check Local Storage on first load
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("appLanguage");
      return saved || "en";
    }
    return "en";
  });

  useEffect(() => {
    // Save to Local Storage on change
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const value = {
    language,
    changeLanguage: setLanguage,
    t: translations[language] || translations['en'], // Fallback to EN
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);