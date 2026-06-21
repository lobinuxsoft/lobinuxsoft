/**
 * UI "chrome" strings — navigation, section titles, buttons, labels.
 * Longer-form content (summary, experience, projects, skills) lives in the
 * typed data modules under `src/data/` with `{ en, es }` fields.
 *
 * Every key MUST exist in both `en` and `es` (parity enforced by the
 * `UiKey` type below).
 */
export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.skipToContent': 'Skip to content',
    'nav.menu': 'Menu',

    // hero
    'hero.role': 'Senior Game Developer · Lead Programmer',
    'hero.tagline': 'Multiplayer · VR/XR · Cross-Platform Tooling · AI Integration',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.years': '9+ years shipping games & real-time systems',

    // section titles
    'section.about': 'About',
    'section.experience': 'Experience',
    'section.projects': 'Selected Projects',
    'section.projects.subtitle': 'Open-source tools, games & experiments',
    'section.skills': 'Technical Skills',
    'section.education': 'Education & Certifications',
    'section.contact': 'Contact',
    'section.contact.lead': "Let's build something great together.",

    // labels
    'label.present': 'Present',
    'label.role': 'Role',
    'label.tech': 'Tech',
    'label.viewProject': 'View project',
    'label.viewCode': 'View code',
    'label.viewAll': 'All projects',
    'label.back': 'Back',
    'label.backToHome': 'Back to home',
    'label.education': 'Education',
    'label.certifications': 'Certifications',
    'label.languages': 'Languages',
    'label.email': 'Email',
    'label.liveInProduction': 'Live in production',

    // footer
    'footer.built': 'Built with Astro',
    'footer.rights': 'All rights reserved.',

    // a11y
    'a11y.toggleTheme': 'Toggle color theme',
    'a11y.switchLang': 'Switch language',
    'a11y.openMenu': 'Open navigation menu',
    'a11y.closeMenu': 'Close navigation menu',
  },
  es: {
    // nav
    'nav.about': 'Perfil',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Skills',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',
    'nav.skipToContent': 'Saltar al contenido',
    'nav.menu': 'Menú',

    // hero
    'hero.role': 'Desarrollador Senior de Videojuegos · Lead Programmer',
    'hero.tagline': 'Multiplayer · VR/XR · Herramientas Cross-Platform · Integración de IA',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    'hero.years': '9+ años creando juegos y sistemas en tiempo real',

    // section titles
    'section.about': 'Perfil',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos Destacados',
    'section.projects.subtitle': 'Herramientas open-source, juegos y experimentos',
    'section.skills': 'Habilidades Técnicas',
    'section.education': 'Formación y Certificaciones',
    'section.contact': 'Contacto',
    'section.contact.lead': 'Construyamos algo grande juntos.',

    // labels
    'label.present': 'Actualidad',
    'label.role': 'Rol',
    'label.tech': 'Tecnologías',
    'label.viewProject': 'Ver proyecto',
    'label.viewCode': 'Ver código',
    'label.viewAll': 'Todos los proyectos',
    'label.back': 'Volver',
    'label.backToHome': 'Volver al inicio',
    'label.education': 'Formación',
    'label.certifications': 'Certificaciones',
    'label.languages': 'Idiomas',
    'label.email': 'Email',
    'label.liveInProduction': 'En producción',

    // footer
    'footer.built': 'Hecho con Astro',
    'footer.rights': 'Todos los derechos reservados.',

    // a11y
    'a11y.toggleTheme': 'Cambiar tema de color',
    'a11y.switchLang': 'Cambiar idioma',
    'a11y.openMenu': 'Abrir menú de navegación',
    'a11y.closeMenu': 'Cerrar menú de navegación',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];
