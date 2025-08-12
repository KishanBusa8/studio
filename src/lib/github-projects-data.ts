import type { GitHubProject } from '@/types';

export const githubProjectsData: GitHubProject[] = [
  {
    id: 'portfolio-website',
    name: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a clean design.',
    repositoryUrl: 'https://github.com/KishanBusa8/studio',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 'task-manager',
    name: 'Task Manager App',
    description: 'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
    repositoryUrl: 'https://github.com/KishanBusa8/task-management-flutter',
    technologies: ['Flutter', 'Node.js', 'MongoDB']
  },
  {
    id: 'tracer-tracker',
    name: 'Tracer Tracker',
    description: "Live Location Tracer and Tracker apps In this codebase you will find the two different app. One is Tracer and another one is Tracker app. Tracer app : This app will monitor the live location detection of the Tracker app user. Tracker app : This app will continuously add it's live location in to the firebase to get realtime updates in Tracer app. even in the background if user kills the app.",
    repositoryUrl: 'https://github.com/KishanBusa8/tracer_tracker',
    technologies: ['Flutter', 'Firebase', 'Firebase Auth', 'Firebase Storage']
  },
  {
    id: 'getx-boilerplate',
    name: 'GetX Boilerplate',
    description: 'A complete GetX boilerplate with clean architecture, MVVM pattern, and a modern UI.A Flutter application built with GetX for state management, featuring comprehensive theming, localization, and API services.',
    repositoryUrl: 'https://github.com/KishanBusa8/flutter-getx-boilerplate',
    technologies: ['Flutter', 'GetX', 'Clean Architecture', 'MVVM']
  },
  {
    id: 'bloc-boilerplate',
    name: 'Flutter Bloc Boilerplate',
    description: 'A Flutter Bloc boilerplate project with authentication, themes, and multi-language support. Complete Flutter boilerplate with clean architecture, MVVM pattern, and a modern UI.',
    repositoryUrl: 'https://github.com/KishanBusa8/flutter-boilerplate',
    technologies: ['Flutter', 'Bloc', 'Clean Architecture', 'MVVM']
  },
  {
    id: 'currency-converter-package',
    name: 'Currency Converter',
    description: 'A currency converter pub.dev package built with Flutter. Convert currencies using real-time exchange rates and get accurate conversion results.',
    repositoryUrl: 'https://github.com/KishanBusa8/currency_converter',
    technologies: ['Flutter', 'Pub.dev', 'Clean Architecture', 'MVVM']
  }
]; 