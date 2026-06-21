import type { LocalizedString } from '@/i18n/utils';

/**
 * Core profile content sourced from Matías Galarza Fernández's CV.
 * Bilingual fields use `{ en, es }`. EN reads as native games-industry
 * English; ES is natural Spanish, not a literal translation.
 */

export const profile = {
  name: 'Matias Galarza Fernandez',
  shortName: 'Matias Galarza',
  summary: {
    en: 'Senior game developer and lead programmer with 9+ years building games, real-time multiplayer systems, and cross-platform developer tools. Currently shaping next-generation VR multiplayer experiences at 3dar, an Argentine studio with AAA cinematic and HBO immersive credits. A strong advocate of clean architecture, SOLID principles, measurable performance, and production-grade code — comfortable leading prototypes from concept to shippable product.',
    es: 'Desarrollador senior de videojuegos y lead programmer con más de 9 años creando juegos, sistemas multiplayer en tiempo real y herramientas de desarrollo cross-platform. Actualmente doy forma a experiencias VR multiplayer de nueva generación en 3dar, un estudio argentino con créditos en cine AAA e inmersivos para HBO. Defensor de la arquitectura limpia, los principios SOLID, el rendimiento medible y el código de calidad de producción — con experiencia llevando prototipos del concepto a producto terminado.',
  } satisfies LocalizedString,
} as const;

export interface ExperienceEntry {
  company: string;
  role: LocalizedString;
  location: LocalizedString;
  start: string; // e.g. "Mar 2024"
  end: LocalizedString | 'present';
  highlights: LocalizedString[];
}

export const experience: ExperienceEntry[] = [
  {
    company: '3dar',
    role: { en: 'Senior Multiplayer Developer', es: 'Desarrollador Senior de Multiplayer' },
    location: { en: 'Argentina (Remote)', es: 'Argentina (Remoto)' },
    start: 'Mar 2024',
    end: 'present',
    highlights: [
      {
        en: 'Develop next-generation VR multiplayer experiences for a studio with AAA cinematic and HBO immersive credits.',
        es: 'Desarrollo experiencias VR multiplayer de nueva generación para un estudio con créditos en cine AAA e inmersivos para HBO.',
      },
      {
        en: 'Build deterministic real-time multiplayer with Photon Quantum (ECS), with custom networking over WebSocket, TCP and mDNS.',
        es: 'Construyo multiplayer determinista en tiempo real con Photon Quantum (ECS), con networking propio sobre WebSocket, TCP y mDNS.',
      },
      {
        en: 'Optimize VR performance and thermal budgets for Meta Quest headsets to sustain target frame rates.',
        es: 'Optimizo el rendimiento VR y los presupuestos térmicos de los visores Meta Quest para sostener los frame rates objetivo.',
      },
    ],
  },
  {
    company: 'DIGI Learnnials',
    role: { en: 'Co-Founder, Lead Programmer & Game Developer', es: 'Co-Fundador, Lead Programmer y Game Developer' },
    location: { en: 'Argentina', es: 'Argentina' },
    start: 'Sep 2017',
    end: { en: 'Jan 2024', es: 'Ene 2024' },
    highlights: [
      {
        en: 'Co-founded an EdTech game studio and led engineering on five shipped educational titles.',
        es: 'Co-fundé un estudio de juegos EdTech y lideré la ingeniería de cinco títulos educativos publicados.',
      },
      {
        en: 'Built gameplay prototypes across diverse mechanics, researching and integrating new technologies including multiplayer and API connectivity.',
        es: 'Construí prototipos de gameplay con mecánicas diversas, investigando e integrando nuevas tecnologías como multiplayer y conectividad por API.',
      },
      {
        en: 'Authored readable, scalable, production-grade code following SOLID principles, design patterns and clean architecture.',
        es: 'Escribí código legible, escalable y de calidad de producción siguiendo principios SOLID, patrones de diseño y arquitectura limpia.',
      },
      {
        en: 'Created internal tools that accelerated project development across the team.',
        es: 'Creé herramientas internas que aceleraron el desarrollo de proyectos en todo el equipo.',
      },
    ],
  },
  {
    company: 'Lobinux',
    role: { en: 'Founder & Game Developer', es: 'Fundador y Game Developer' },
    location: { en: 'Lomas de Zamora, Buenos Aires, Argentina', es: 'Lomas de Zamora, Buenos Aires, Argentina' },
    start: 'Mar 2017',
    end: { en: 'Sep 2019', es: 'Sep 2019' },
    highlights: [
      {
        en: 'Developed video games and immersive VR experiences for mobile platforms, both independent and work-for-hire.',
        es: 'Desarrollé videojuegos y experiencias VR inmersivas para plataformas móviles, tanto independientes como por encargo.',
      },
      {
        en: 'Shipped Rugby Penalty Kicks for Vear Experience as a contracted VR project.',
        es: 'Publiqué Rugby Penalty Kicks para Vear Experience como proyecto VR por contrato.',
      },
    ],
  },
];

export interface EducationEntry {
  title: LocalizedString;
  institution: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    title: {
      en: 'Higher Technical Degree in Video Game Development',
      es: 'Tecnicatura Superior en Desarrollo de Videojuegos',
    },
    institution: 'Image Campus',
    period: 'Mar 2020 – Dec 2023',
  },
  {
    title: {
      en: 'Junior Programmer — Game Design & Interactive Content',
      es: 'Programador Junior — Game Design y Contenido Interactivo',
    },
    institution: 'Image Campus',
    period: '2016',
  },
  {
    title: {
      en: 'Image & Sound Design (Visual Design & Communication)',
      es: 'Diseño de Imagen y Sonido (Diseño Visual y Comunicación)',
    },
    institution: 'Universidad de Buenos Aires (UBA)',
    period: '2006 – 2010',
  },
];

export const certifications: string[] = [
  'Unreal 5.0 C++ Developer: Learn C++ and Make Video Games',
  'Become a C++ Developer',
  'Learn C#',
  'C++: Smart Pointers',
  'Essential Foundations of Programming',
];

export interface SpokenLanguage {
  name: LocalizedString;
  level: LocalizedString;
}

export const spokenLanguages: SpokenLanguage[] = [
  {
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native', es: 'Nativo' },
  },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'Professional working proficiency', es: 'Competencia profesional' },
  },
];
