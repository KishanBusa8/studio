import type { Blog } from '@/types';

export const blogsData: Blog[] = [
  {
    id: 'flutter-performance',
    title: 'Flutter Best Practices for Performance',
    description: 'A deep dive into optimizing Flutter applications for better performance, covering state management, rendering, and memory usage.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code performance',
    url: 'https://inficial.medium.com/flutter-best-practices-for-improve-performance-7e21e14efebb',
  },
  {
    id: 'flutter-hand-detection',
    title: 'Hand & Eye Detection with Flutter',
    description: 'Learn how to use Flutter with live camera input to detect hands, eyes, and other features using machine learning models.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'machine learning camera',
    url: 'https://inficial.medium.com/how-to-detect-hands-eyes-or-other-things-by-the-live-camera-in-the-flutter-159e8af54ec7',
  },
];
