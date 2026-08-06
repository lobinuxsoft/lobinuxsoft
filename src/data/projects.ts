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
    slug: 'kooch',
    name: 'Kóoch',
    year: '2025',
    featured: true,
    engine: 'Rust + wgpu',
    tagline: {
      en: 'A GPU-driven game engine in Rust, with Nanite-style meshlet rendering.',
      es: 'Un motor de juegos GPU-driven en Rust, con renderizado de meshlets al estilo Nanite.',
    },
    description: {
      en: 'A game engine that pushes the rendering hot loop onto the GPU while gameplay and simulation stay on the CPU. Geometry is drawn through a Nanite-style meshlet pipeline — cluster culling, a visibility buffer and a deferred pass, driven by indirect dispatch with no per-frame readback. Around it: a custom archetype ECS with reflection, hierarchy and scene/prefab serialisation, Rapier physics, Mario Galaxy-style gravity fields, and a standalone editor that drives a running project over a local socket. Named after the creator deity of the Tehuelche (Aonikenk) people of Patagonia.',
      es: 'Un motor de juegos que empuja el hot loop de renderizado a la GPU mientras el gameplay y la simulación se quedan en la CPU. La geometría se dibuja con un pipeline de meshlets al estilo Nanite — cluster culling, visibility buffer y un pase deferred, manejados por indirect dispatch y sin readback por frame. Alrededor: un ECS por arquetipos propio con reflexión, jerarquía y serialización de escenas/prefabs, física con Rapier, campos de gravedad al estilo Mario Galaxy, y un editor standalone que controla un proyecto en ejecución por un socket local. Lleva el nombre del dios creador del pueblo tehuelche (aonikenk) de la Patagonia.',
    },
    role: { en: 'Architecture & full implementation', es: 'Arquitectura e implementación completa' },
    tech: ['Rust', 'wgpu', 'GPU-driven rendering', 'Meshlets', 'ECS', 'Rapier', 'egui'],
    cover: 'kooch.png',
    links: [
      { label: { en: 'Read the docs', es: 'Ver la documentación' }, href: 'https://lobinuxsoft.github.io/kooch', kind: 'external' },
      { label: { en: 'View code', es: 'Ver código' }, href: 'https://github.com/lobinuxsoft/kooch', kind: 'code' },
    ],
  },
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
    engine: 'Fedora Atomic',
    tagline: {
      en: 'An immutable KDE distribution built on Bazzite, for development and gaming.',
      es: 'Una distribución KDE inmutable basada en Bazzite, para desarrollo y gaming.',
    },
    description: {
      en: 'A custom image-based Linux distribution built on Bazzite (Fedora Atomic / Universal Blue), maintained end-to-end and tuned for development and gaming — atomic OCI image builds, a KDE desktop, and defaults that make the machine productive out of the box.',
      es: 'Una distribución Linux personalizada basada en imágenes, construida sobre Bazzite (Fedora Atomic / Universal Blue), mantenida de punta a punta y optimizada para desarrollo y gaming — builds atómicos de imágenes OCI, escritorio KDE y valores por defecto que dejan la máquina productiva desde el arranque.',
    },
    role: { en: 'Maintainer', es: 'Maintainer' },
    tech: ['Fedora Atomic', 'Bazzite', 'bootc', 'OCI', 'KDE', 'Linux'],
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
