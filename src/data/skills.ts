import type { LocalizedString } from '@/i18n/utils';

/**
 * Technical skills, grouped by category. Engines + core languages lead,
 * since they matter most to game studios. Category names are bilingual;
 * individual skill labels are proper nouns / tech names kept as-is.
 */
export interface SkillGroup {
  category: LocalizedString;
  /** Optional short mono tag shown above the group (e.g. `01`, `core`). */
  tag: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    tag: 'engines',
    category: { en: 'Game Engines', es: 'Motores' },
    skills: ['Unity (C#, C++)', 'Unreal Engine (C++)', 'Godot 4 (GDScript, C++ GDExtension)'],
  },
  {
    tag: 'languages',
    category: { en: 'Languages', es: 'Lenguajes' },
    skills: ['C#', 'C++', 'Rust', 'GDScript', 'Python', '.NET / .NET Core', 'JavaScript / TypeScript'],
  },
  {
    tag: 'netcode',
    category: { en: 'Multiplayer & Networking', es: 'Multiplayer y Networking' },
    skills: [
      'Photon Quantum (ECS, deterministic sim)',
      'WebSocket',
      'TCP',
      'mDNS',
      'Custom protocols',
      '.NET Core game servers',
    ],
  },
  {
    tag: 'vr/xr',
    category: { en: 'VR / XR', es: 'VR / XR' },
    skills: [
      'OpenXR (vendor-neutral architecture)',
      'Meta Quest',
      'Android XR',
      'PICO',
      'Meta XR SDK',
      'Unity XR / AR Foundation',
      'Immersive interaction design',
      'Performance & thermal optimization',
    ],
  },
  {
    tag: 'graphics',
    category: { en: 'Graphics & GPU', es: 'Gráficos y GPU' },
    skills: [
      'GPU-driven rendering',
      'Nanite-style meshlet pipelines',
      'Visibility buffer & deferred shading',
      'Hi-Z occlusion culling',
      'GPU compute (Vulkan, wgpu)',
      'Frame-time profiling & optimization',
    ],
  },
  {
    tag: 'backend',
    category: { en: 'Backend & Online Services', es: 'Backend y Servicios Online' },
    skills: [
      'Node.js / TypeScript services',
      'Auth, accounts & sessions',
      'Matchmaking & lobby services',
      'REST APIs',
      'Prisma',
      'Render, Cloudflare',
    ],
  },
  {
    tag: 'tooling',
    category: { en: 'Cross-Platform Tooling', es: 'Tooling Cross-Platform' },
    skills: ['Rust + Tauri 2 desktop apps', 'Decky Loader (Steam Deck) plugins', 'SolidJS'],
  },
  {
    tag: 'ai',
    category: { en: 'AI Integration', es: 'Integración de IA' },
    skills: ['Local LLM inference (llama.cpp via C++ GDExtension)', 'Prompt engineering for NPC dialogue', 'Generative AI'],
  },
  {
    tag: 'platforms',
    category: { en: 'Platforms', es: 'Plataformas' },
    skills: ['Steam Deck', 'Linux handhelds', 'Windows', 'Android / mobile', 'VR headsets'],
  },
  {
    tag: 'craft',
    category: { en: 'Practices & Tools', es: 'Prácticas y Herramientas' },
    skills: ['SOLID', 'Design patterns', 'Clean architecture', 'Git', 'Agile', 'Gameplay prototyping', 'Developer tooling'],
  },
  {
    tag: 'linux',
    category: { en: 'Linux', es: 'Linux' },
    skills: [
      'Maintainer of a custom Fedora Atomic / Bazzite-based distribution (yaguarete_os)',
      'bootc / OCI image builds',
      'Shell scripting & build automation',
      'CI/CD (GitHub Actions, matrix builds)',
      'Server administration (Ubuntu, Fedora)',
      'Virtual machines (QEMU/KVM)',
    ],
  },
];
