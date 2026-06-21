import type { Lang, LocalizedString } from '@/i18n/utils';

/**
 * Portfolio projects — sourced from the CV's open-source work and shipped
 * titles. Typed bilingual data module (chosen over Markdown content
 * collections because every text field needs an `{ en, es }` pair, which is
 * far cleaner as structured data).
 *
 * LINKS: point at each project's GitHub Pages site when it has one, otherwise
 * at the public repo. Projects without a site/repo carry no link.
 * MEDIA: `cover` is optional; when omitted the card renders a graphic
 * treatment. Cover files live in `src/assets/projects/` (resolved by
 * `data/projectCovers.ts`); set the filename here to swap them in.
 */
export interface Project {
  slug: string;
  name: string;
  year: string;
  featured: boolean;
  liveInProduction?: boolean;
  /** Short one-liner shown on the card. */
  tagline: LocalizedString;
  /** Longer description for the detail view. */
  description: LocalizedString;
  role: LocalizedString;
  /** Primary engine/runtime, highlighted on the card. */
  engine: string;
  /** Tech badges. */
  tech: string[];
  links: {
    label: LocalizedString;
    href: string;
    /** `code` renders with a mono/terminal style; `external` is a generic link. */
    kind: 'code' | 'external' | 'play';
  }[];
  /** Optional local cover image path (relative to src/assets/projects/). */
  cover?: string;
}

export const projects: Project[] = [
  {
    slug: 'capydeploy',
    name: 'CapyDeploy',
    year: '2024',
    featured: true,
    liveInProduction: true,
    engine: 'Rust + Tauri 2',
    tagline: {
      en: 'Cross-platform game deployment for handheld devices.',
      es: 'Despliegue de juegos cross-platform para dispositivos handheld.',
    },
    description: {
      en: 'A Hub / Agent deployment system for handheld gaming devices. Built in Rust + Tauri with a WebSocket control channel and a separate TCP data channel for transfers, plus a Decky Loader plugin in Python on the Steam Deck side. Live in production.',
      es: 'Un sistema de despliegue Hub / Agent para dispositivos de juego handheld. Construido en Rust + Tauri con un canal de control por WebSocket y un canal de datos TCP separado para las transferencias, más un plugin de Decky Loader en Python del lado de la Steam Deck. En producción.',
    },
    role: { en: 'Architecture & full implementation', es: 'Arquitectura e implementación completa' },
    tech: ['Rust', 'Tauri 2', 'WebSocket', 'TCP', 'Python', 'Decky Loader', 'Steam Deck'],
    cover: 'capydeploy.gif',
    links: [
      { label: { en: 'Visit site', es: 'Ver sitio' }, href: 'https://lobinuxsoft.github.io/capydeploy/', kind: 'external' },
    ],
  },
  {
    slug: 'ohmydialogsystem',
    name: 'OhMyDialogSystem',
    year: '2024',
    featured: true,
    engine: 'Godot 4 + C++ GDExtension',
    tagline: {
      en: 'AI-powered NPC dialogue for Godot 4 — not a chatbot wrapper.',
      es: 'Diálogos de NPC con IA para Godot 4 — no un wrapper de chatbot.',
    },
    description: {
      en: 'Local LLM inference brought into Godot 4 via llama.cpp through a C++ GDExtension, exposing three distinct dialogue modes for NPCs. Designed as a real gameplay dialogue tool that runs on-device, not a thin chatbot wrapper.',
      es: 'Inferencia de LLM local llevada a Godot 4 mediante llama.cpp a través de una GDExtension en C++, exponiendo tres modos de diálogo distintos para NPCs. Diseñado como una herramienta real de diálogo de gameplay que corre on-device, no un simple wrapper de chatbot.',
    },
    role: { en: 'Architecture & full implementation', es: 'Arquitectura e implementación completa' },
    tech: ['Godot 4', 'C++', 'GDExtension', 'llama.cpp', 'Local LLM'],
    cover: 'ohmydialogsystem.png',
    links: [
      { label: { en: 'Visit site', es: 'Ver sitio' }, href: 'https://lobinuxsoft.github.io/OhMyDialogSystem/', kind: 'external' },
    ],
  },
  {
    slug: 'yryvu',
    name: 'Yryvu',
    year: '2024',
    featured: true,
    engine: 'Rust + Tauri + SolidJS',
    tagline: {
      en: 'A Git client that flags common mistakes before they ship.',
      es: 'Un cliente de Git que detecta errores comunes antes de que lleguen a producción.',
    },
    description: {
      en: 'A desktop Git client built in Rust + Tauri with a SolidJS front end, focused on catching common mistakes before they ship — surfacing risky operations and bad states in the workflow rather than after the fact.',
      es: 'Un cliente de Git de escritorio construido en Rust + Tauri con front end en SolidJS, enfocado en atrapar errores comunes antes de que lleguen a producción — exponiendo operaciones riesgosas y estados problemáticos durante el flujo de trabajo, no después.',
    },
    role: { en: 'Architecture & full implementation', es: 'Arquitectura e implementación completa' },
    tech: ['Rust', 'Tauri', 'SolidJS', 'Git'],
    cover: 'yryvu.png',
    // No GitHub Pages site yet — falls back to the public repo.
    links: [
      { label: { en: 'View code', es: 'Ver código' }, href: 'https://github.com/lobinuxsoft/yryvu', kind: 'code' },
    ],
  },
  {
    slug: 'yaguarete-os',
    name: 'yaguarete_os',
    year: '2023',
    featured: true,
    engine: 'Arch Linux',
    tagline: {
      en: 'An Arch-based Linux distribution tuned for development.',
      es: 'Una distribución Linux basada en Arch optimizada para desarrollo.',
    },
    description: {
      en: 'A custom Arch-based Linux distribution maintained end-to-end and tuned for development workflows — from package selection to defaults that make the machine productive out of the box.',
      es: 'Una distribución Linux basada en Arch, mantenida de punta a punta y optimizada para flujos de trabajo de desarrollo — desde la selección de paquetes hasta los valores por defecto que dejan la máquina productiva desde el arranque.',
    },
    role: { en: 'Maintainer', es: 'Maintainer' },
    tech: ['Arch Linux', 'Linux', 'Shell', 'Packaging'],
    cover: 'yaguarete-os.webp',
    links: [
      { label: { en: 'Visit site', es: 'Ver sitio' }, href: 'https://lobinuxsoft.github.io/yaguarete_os/', kind: 'external' },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Localized list of project links. */
export function localizedLinks(project: Project, lang: Lang) {
  return project.links.map((l) => ({ ...l, text: l.label[lang] }));
}
